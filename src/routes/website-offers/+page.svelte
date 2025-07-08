<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OfferExt from '$lib/components/offers/OfferExt.svelte';
	import './website-offers.css';

	import { json, t } from 'svelte-i18n';

	$: offers = $json('offers') as {
		title: string;
		price: string;
		description: string;
		perfectFor: string;
		why: {[key: string]: string };
		slot: string;
	}[];
</script>

<DynamicBackground image="images/website-offers/bg-dark.jpg" alt="website offers" />

<Hero
	title={$t('title')}
	description={$t('subtitle')}
	buttonText={$t('button')}
	buttonLink="#offers"
/>

<main>
	<Container id="offers">
		{#each offers as offer}
			<OfferExt {...offer} />
		{/each}
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
