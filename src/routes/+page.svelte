<script lang="ts">
	import './index.css';
	import { t, json } from 'svelte-i18n';

	import Hero from '$lib/components/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Profile from '$lib/components/profile/profile.svelte';
	// import SideBar from '$lib/components/sidebar.svelte';
	import OfferTile from '$lib/components/offers/OfferTile.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import TiledContainer from '$lib/components/tiles/TiledContainer.svelte';
	import Tile from '$lib/components/tiles/Tile.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';
	import Button from '$lib/components/button.svelte';
	import { onDestroy, onMount } from 'svelte';
	import Process from './Process.svelte';

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
		// img: string;
	}[];

	let exampleLength = 0;
	let exampleContainer: HTMLElement;

	let observer: ResizeObserver;

	function updateLength() {
		if (exampleContainer) {
			exampleLength = Math.floor(exampleContainer.clientWidth / 400);
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

	//
</script>

<!-- <SideBar
	links={[
		{ name: 'Welcome', link: '#welcome' },
		{ name: 'My Profile', link: '#my-profile' },
		{ name: 'My projects', link: '#my-projects' },
		{ name: 'Website Offers', link: '#offers' },
		{ name: 'Quality of work', link: '#qos' }
	]}
/> -->

<!-- <DynamicBackground image="/images/bg/bg-dark.jpg" />
<a class="bg-credits" href="https://www.pexels.com/photo/stars-in-galaxy-17809421/">
	Photo by Daniel Cid from Pexels
</a> -->

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
		<Tile alignX="center" alignY="center" paddingY="4rem">
			<Button href="/">{$t('why-a-website.punchline.button')}</Button>
		</Tile>
	</Container>

	<!-- Benefits -->

	<Subtitle text="Why a website?" color="var(--primary)" />
	<div id="benefits-container">
		{#each benefits as benefit}
			<Card
				title={benefit.title}
				description={benefit.description}
				icon={benefit.icon}
				maxWidth="400px"
			/>
		{/each}
	</div>

	<!-- Examples -->
	<div id="examples" class="slanted bg-alt">
		<Container>
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
			</Tile>
		</Container>
	</div>
	<Container>
		<Process />
	</Container>

	<!-- Packages-->
	<Subtitle text={$t('website-packages.title')} color="var(--primary)"></Subtitle>
	<Container id="offers" marginBottom="5rem" containerFrom={768}>
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
		<p style="color: white;">* {$t('website-offers.additional')}</p>
	</Container>

	<div class="bg-alt slanted">
		
	</div>
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
	}

	/* .bg-credits {
		position: fixed;
		bottom: 10px;
		left: 10px;
		color: #fff;
		font-size: 10px;
		z-index: 100;
	} */

	@media screen and (max-width: 650px) {
		main {
			:global(#package-container) {
				overflow-x: scroll;
				justify-content: unset;

				:global(> *) {
					margin: 0 8px;
				}
			}
		}
	}
</style>
