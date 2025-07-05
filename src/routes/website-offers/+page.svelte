<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Offer from '$lib/components/offer.svelte';
	import './website-offers.css';

	import { json, t } from 'svelte-i18n';

	$: offers = $json('website-offers.offers') as {
		title: string;
		price: string;
		features: string[];
		benefits: string[];
	}[];
</script>

<DynamicBackground image="images/website-offers/bg-dark.jpg" alt="website offers" />

<Hero
	title="Website offers"
	description="Let me create a website for you!"
	buttonText="View my offers"
	buttonLink="#offers"
/>

<main>
	<Container id="offers">
		{#each offers as offer}
			<div class="offer-tile">
				<div class="offer-tile-tile">
					<Offer
						title={offer.title}
						price={offer.price}
						features={offer.features}
						benefits={offer.benefits}
					/>
				</div>
				<div class="offer-tile-description">
					<h1></h1>
				</div>
			</div>
		{/each}
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
