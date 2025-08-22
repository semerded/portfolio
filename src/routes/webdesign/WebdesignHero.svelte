<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/container/container.svelte';
	import TiledContainer from '$lib/components/tiles/TiledContainer.svelte';
	import { onMount } from 'svelte';
	import { t, json } from 'svelte-i18n';

	$: titleCycle = $json('webdesign-hero.title-cycle') as string[];

	onMount(() => {
		animationTime = pauseTime + typingSpeed * displayText.length;

		function cycleTitles() {
			async function loop() {
				while (true) {
					const text = titleCycle[currentIndex];
					displayText = text;
					animationTime = pauseTime + typingSpeed * text.length;

					// wait for the animation duration
					await new Promise((r) => setTimeout(r, animationTime));

					currentIndex = (currentIndex + 1) % titleCycle.length;
				}
			}
			loop();
		}

		cycleTitles();
	});

	const typingSpeed = 100; // ms per character
	const pauseTime = 1500;
	let animationTime = 0;
	let currentIndex = 0;
	let displayText = 'business';
</script>

<Container marginTop="var(--navbar-height)">
	<TiledContainer
		wrapAt={768}
		wrapOnDeviceWidth={true}
		id={$$restProps.id}
		class="webdesign-hero {$$restProps.class}"
	>
		<div id="hero-text">
			<h1>
				<span id="title">
					<span> {$t('webdesign-hero.title-part1')}&nbsp;</span>
					{#key displayText}
						<span
							id="animated-cycle"
							style="--ch-length: {displayText.length}ch; --animation-time: {animationTime}ms"
						>
							{displayText}
						</span>
					{/key}
					<span id="caret"></span>
					<span>{$t('webdesign-hero.title-part2')} </span>
				</span>

				<span id="highlight">
					<span id="highlight-text">{$t('webdesign-hero.title-highlight')}</span><span
						id="highlight-icon"><i class="fa-solid fa-arrow-trend-up"></i></span
					>
				</span>
			</h1>
			<Button id="hero-button" href="#why-a-website">{$t('webdesign-hero.button')}</Button>
		</div>
		<div id="hero-image">
			<img src="/images/webdesign/hero.png" alt="web showcase" />
		</div>
	</TiledContainer>
</Container>

<style>
	:global(.webdesign-hero) {
		height: 70vh !important;
		width: 100%;

		div#hero-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			align-items: center;
			width: 100%;
			padding: 16px 4px;

			h1 {
				height: auto;
				width: 100%;
				display: flex;
				flex-direction: column;
				font-size: 2rem;
				text-wrap: none;
				text-align: center;

				span#title {
					display: flex;
					justify-content: center;
				}

				span#animated-cycle {
					width: fit-content;
					display: flex;
					animation: animated-cycle var(--animation-time) infinite ease-in-out;
					overflow: hidden;					
				}

				span#caret {
					&::after {
						content: '|';
						animation: caret-blink 1s infinite;
						width: 4px;
						position: relative;
						left: -2px;
						display: flex;
						overflow: hidden;
					}
				}

				span#highlight {
					width: 100%;
					color: var(--primary);
					font-size: 8rem;
					line-height: 6rem;
					
				}

				span#highlight-text {
					border-bottom: 4px solid var(--primary);
				}

				span#highlight-icon {
					padding-left: 1rem;
					border-bottom: 4px dashed var(--primary);
				}
			}

			:global(#hero-button) {
				margin-top: 3rem;
			}
		}

		div#hero-image {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				object-fit: contain;
				height: 100%;
			}
		}
	}

	@keyframes animated-cycle {
		0% {
			width: 0ch;
		}
		35% {
			width: var(--ch-length);
		}
		85% {
			width: var(--ch-length);
		}
		100% {
			width: 0ch;
		}
	}

	@keyframes caret-blink {
		0% {
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		50% {
			opacity: 1;
		}
		55% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		:global(.webdesign-hero) {
			div#hero-text {
				h1 {
					font-size: 1.8rem;
				}
			}
		}
	}

	@media screen and (max-width: 767px) {
		:global(.webdesign-hero) {
			height: 100% !important;

			div#hero-text {
				h1 {
					text-align: center;

					span#highlight {
						margin: auto;
					}
				}
			}
		}
	}

	@media screen and (max-width: 430px) {
		:global(.webdesign-hero) {
			div#hero-text {
				h1 {
					font-size: 6.5vw;

					span#highlight {
						font-size: 24vw;
						line-height: 16vw;
					}
				}
			}
		}
	}
</style>
