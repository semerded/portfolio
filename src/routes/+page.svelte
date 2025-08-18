<script lang="ts">
	import './index.css';
	import { t, json } from 'svelte-i18n';

	import Hero from '$lib/components/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import OfferTile from '$lib/components/packages/PackageTile.svelte';
	import TiledContainer from '$lib/components/tiles/TiledContainer.svelte';
	import Tile from '$lib/components/tiles/Tile.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';
	import Button from '$lib/components/button.svelte';
	import { onDestroy, onMount } from 'svelte';
	import Process from './Process.svelte';
	import StaticBgContainer from '$lib/components/StaticBgContainer.svelte';
	import PackageForm from '$lib/components/form/PackageForm.svelte';

	$: offers = $json('website-packages.packages') as {
		title: string;
		price: string;
		features: string[];
		benefits: string[];
	}[];

	$: benefits = $json('why-a-website.benefits.content') as {
		title: string;
		icon: string;
		description: string;
	}[];

	$: additionalPackages = $json('additional-packages.packages') as {
		title: string;
		description: string;
		price: string;
	}[];

	let exampleLength = 0;
	let exampleContainer: HTMLElement;

	let observer: ResizeObserver;

	function updateLength() {
		if (exampleContainer) {
			exampleLength = Math.max(Math.floor(exampleContainer.clientWidth / 400), 1);
		}
	}

	onMount(() => {
		observer = new ResizeObserver(updateLength);
		if (exampleContainer) {
			observer.observe(exampleContainer);
		}
	});

	onDestroy(() => {
		if (observer && exampleContainer) {
			observer.unobserve(exampleContainer);
		}
	});

	const benefitIcons: string[] = ['fa-globe', 'fa-user-tie', 'fa-thumbs-up'];
	const additionalPackagesIcons: string[] = [
		'fa-face-smile',
		'fa-address-card',
		'fa-camera',
		'fa-crosshairs',
		'fa-language'
	];
</script>

<main>
	<!-- Hero -->
	<Hero
		title="Sem Van Broekhoven"
		image="images/index/hero.png"
		description={$t('hero.subtitle')}
		leading="<i class='fa-solid fa-location-dot'></i> {$t('hero.country')}"
		buttonText={[$t('hero.website-button'), $t('hero.portfolio-button')]}
		buttonLink={['#why-a-website', '/about']}
		id="welcome"
	/>
	<Container id="why-a-website">
		<Tile alignY="center" alignX="center" paddingY="2rem">
			<h2 id="punchline">
				{$t('why-a-website.punchline.title')}
			</h2>
		</Tile>
		<Tile alignX="center" alignY="center">
			<p id="punchline-description">
				{$t('why-a-website.punchline.description')}
			</p>
		</Tile>
		<Tile alignX="center" alignY="center" paddingY="2rem">
			<Button href="/">{$t('why-a-website.punchline.button')}</Button>
			<!-- TODO href -->
		</Tile>
	</Container>

	<!-- Benefits -->

	<article class="bg">
		<Subtitle text="Why a website?" color="var(--primary)" />
		<div id="benefits-container">
			{#each benefits as benefit, index}
				<Card
					title={benefit.title}
					description={benefit.description}
					icon={benefitIcons[index]}
					maxWidth="400px"
				/>
			{/each}
		</div>
	</article>

	<StaticBgContainer imageUrl="/images/index/idk.jpg" class="slanted" paddingY="8rem">
		<h2>{$t('quotes.1')}</h2>
	</StaticBgContainer>

	<!-- Examples -->
	<div id="examples" class="slanted bg-alt">
		<Container bg="var(--bg-alt)" marginTop={'4rem'}>
			<Tile alignX="center">
				<h2>{$t('examples.title')}</h2>
				<p>{$t('examples.filler')}</p>
			</Tile>
			<div id="example-container" bind:this={exampleContainer}>
				{#each Array(exampleLength) as _}
					<Card
						title={$t('examples.card.title')}
						description={$t('examples.card.description')}
						icon="fa-question"
						maxWidth="400px"
					></Card>
				{/each}
			</div>
			<Tile alignX="center" paddingY="4rem">
				<Button href="/">{$t('examples.button')}</Button>
				<!-- TODO href -->
			</Tile>
		</Container>
	</div>
	<Container>
		<Process />
	</Container>

	<!-- Packages-->
	<Subtitle text={$t('website-packages.title')} color="var(--primary)"></Subtitle>
	<Container id="offers" containerFrom={768}>
		<Tile alignX="center" paddingY="2rem">
			<Tile paddingY="0.5rem" paddingX="8px">
				<p>{$t('website-packages.description')}</p>
			</Tile>
			<Button href="/">{$t('website-packages.button')}</Button>
			<!-- TODO href -->
		</Tile>
		<p id="package-scroll-info">{$t('website-packages.scroll-info')}</p>
		<TiledContainer wrapFrom={670} class="attention-scroll-track" id="package-container">
			{#each offers as offer, index}
				<OfferTile
					title={offer.title}
					price={offer.price}
					features={offer.features}
					benefits={offer.benefits}
					{index}
				/>
			{/each}
		</TiledContainer>
		<Tile alignX="center" paddingX="8px">
			<p class="text-center">* {$t('website-packages.additional')}</p>
		</Tile>

		<Tile alignX="center" paddingY="4rem" paddingX="8px">
			<h3>{$t('website-packages.cant-decide.title')}</h3>
			<p>{$t('website-packages.cant-decide.description')}</p>
			<Button href="/">{$t('website-packages.cant-decide.button')}</Button>
		</Tile>
	</Container>

	<StaticBgContainer imageUrl="/images/index/bg-light_4.jpg" class="slanted" paddingY="8rem">
		<h2>{$t('quotes.2')}</h2>
	</StaticBgContainer>

	<!-- Additional packages -->
	<Container class="slanted">
		<Tile paddingY="1rem">
			<h2 class="text-center">{$t('additional-packages.title')}</h2>
		</Tile>
		<Tile paddingY="0.5rem">
			<h4 class="text-center">{$t('additional-packages.description')}</h4>
		</Tile>
		<TiledContainer wrap={true}>
			{#each additionalPackages as singlePackage, index}
				<Card
					title={singlePackage.title}
					description={singlePackage.description}
					maxWidth="400px"
					icon={additionalPackagesIcons[index]}
					price={singlePackage.price}
					textPosition="end"
				></Card>
			{/each}
		</TiledContainer>
	</Container>

	<!-- Contact Form -->
		<TiledContainer wrapAt={768} paddingY="4rem" class="slanted bg-alt" >
			<Tile class="package-form-tile">
				<h2>{$t('package-form.title')}</h2>
				<p>{$t('package-form.subtitle')}</p>
			</Tile>
				<Tile style="border-left: 1px solid rgba(255, 255, 255, 0.2);" class="package-form-tile">
					<PackageForm offers={offers.map((offer) => offer.title)} />
				</Tile>
		</TiledContainer>
</main>

<style>
	main {
		position: relative;
		z-index: 1;

		#punchline {
			font-size: 4rem;
			line-height: 5rem;
			width: 100%;
		}

		#punchline-description {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}

		#benefits-container {
			padding: 8px;
			display: flex;
			margin-bottom: 8rem;
			flex-wrap: wrap;
			justify-content: space-evenly;
		}

		#example-container {
			display: flex;
			justify-content: space-evenly;
			gap: 1rem;
		}

		#package-scroll-info {
			display: none;
			text-align: center;
			font-size: 1.2rem;
			line-height: 2rem;
		}

		:global(.package-form-tile) {
			width: 100%;
			text-align: right;

			h2, p {
				margin-right: 32px;
			}
		}
	}

	@media screen and (max-width: 670px) {
		main {
			:global(#package-container) {
				overflow-x: scroll;
				justify-content: unset;

				:global(> *) {
					margin: 0 8px;
				}
			}

			#package-scroll-info {
				display: block;
			}

			#punchline {
				font-size: 2rem;
				line-height: 2.5rem;
			}

			#punchline-description {
				font-size: 1rem;
				line-height: 1.2rem;
			}
		}
	}
</style>
