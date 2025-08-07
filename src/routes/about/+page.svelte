<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import Profile from '$lib/components/profile/profile.svelte';

	import { t } from 'svelte-i18n';
</script>

<Profile />

<Container>
	<div class="hero">
		<div>
			<h1>Hi! I'm Sem</h1>
			<h2>Software Developer & Tech Enthusiast</h2>
		</div>
		<div>
			<div class="image-container unselectable"><img src="/images/about/me.jpg" alt="me" /></div>
		</div>
	</div>
	<article id="about-container" class="tiled-container">
		<section class="glossy-tile">
			<i class="fa-solid fa-user"></i>
			<div>
				<h3>{$t('about.title')}</h3>
				<p>
					{$t('about.description')}
				</p>
				<p>
					{$t('about.hobbies')}
				</p>
			</div>
		</section>
		<section class="glossy-tile">
			<i class="fa-solid fa-code"></i>
			<div>
				<h3>{$t('programming.title')}</h3>
				<p>
					{$t('programming.description')}
				</p>
			</div>

			<a class="button" href="https://wakatime.com/@sem" target="_blank"
				>{$t('programming.button')}</a
			>
		</section>
		<section class="glossy-tile">
			<i class="fa-solid fa-camera"></i>
			<div>
				<h3>{$t('photography.title')}</h3>
				<p>{$t('photography.description')}</p>
			</div>
			<a
				class="button"
				href="https://www.pexels.com/nl-nl/@sem-van-broekhoven-1851543463/"
				target="_blank">{$t('photography.button')}</a
			>
		</section>
		<section class="glossy-tile">
			<i class="fa-solid fa-computer"></i>
			<div>
				<h3>{$t('tools.title')}</h3>
				<p>{$t('tools.description')}</p>
			</div>
			<a class="button" target="_blank" href="https://github.com/dotsem/.config">{$t('tools.button')}</a>
		</section>
	</article>
</Container>

<style>
	.hero {
		display: flex;
		margin: 20lvh 0;

		height: 60lvh;
		justify-content: center;
		align-items: center;

		> div {
			width: fit-content;
			height: 100%;
			padding: 2rem 0.5rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			/* align-items: start; */

			text-align: end;

			&:first-child {
				align-self: flex-end;
			}

			h1 {
				font-size: 4rem;
				color: var(--primary);
			}

			h2 {
				color: var(--secondary);
			}

			div.image-container {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: relative;
				pointer-events: all;
				border-radius: 9999px;

				img {
					transition: transform 500ms;

					height: 100%;
					object-fit: cover;
					border-radius: 9999px;
					transform: scale(1);

					&:hover {
						transition: transform 500ms;
						transform: scale(1.1);
					}
				}
			}
		}
	}

	article#about-container {
		section {
			width: 40%;
			min-width: 400px;
			min-height: 300px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h3 {
				transition: color 500ms;
				color: var(--secondary);
				padding: 8px 0;
			}

			i {
				transition: 500ms;
				color: var(--text);
				position: absolute;
				top: -10px;
				right: -30px;
				font-size: 12rem;
				overflow: hidden;
				transform: rotateZ(20deg);
			}

			p {
				width: calc(100% - 12rem);
				padding: 4px 0px;
				margin-bottom: 16px;
			}

			a {
				max-width: fit-content;
			}

			&:hover {
				i {
					color: var(--primary);
					transition: 500ms;
					transform: rotateZ(15deg);
				}

				h3 {
					transition: color 500ms;
					color: var(--primary);
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		.hero {
			height: 40lvh;

			> div {
				h1 {
					font-size: 3rem;
				}

				h2 {
					font-size: 1.8vw;
				}

				
			}
		}

		article#about-container {
			section {
				width: 100%;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.hero {
			> div {
				h1 {
					font-size: 6vw;
				}
			}
		}
		
	}

	@media screen and (max-width: 640px) {
		.hero {
			height: auto;
			margin: 15lvh auto;
			width: 100%;
			flex-direction: column-reverse;

			> div {
				text-align: center;
				padding: 8px;
				&:first-child {
				align-self: center;
			}

				h1 {
					font-size: 10vw;
				}
				h2 {
					font-size: 4vw;
				}

				div.image-container {
					width: 100%;
					height: auto;

					img {
						width: 100%;
						height: auto;

						&:hover {
							transform: unset;
						}
					}
				}
			}
		}

		article#about-container {
			section {
				min-width: fit-content;
				margin: 8px 0;
				i {
					color: rgba(128, 128, 128, 0.39);
				}

				p {
					width: 100%;
				}

				&:hover {
					i {
						color: rgba(128, 128, 128, 0.39);
					}
				}

			}
		}
	}
</style>
