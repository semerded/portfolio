<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OfferExt from '$lib/components/offers/OfferExt.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SideBar from '$lib/components/sidebar.svelte';
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

<SideBar
	links={[
		{ name: 'Pick an offer', link: '#offers' },
		{ name: 'What you get', link: '#wyg' },
		{ name: 'Fill in the form', link: '#form' }
	]}
/>

<Hero
	title={$t('title')}
	description={$t('subtitle')}
	buttonText={[$t('button'), $t('cant-choose.button')]}
	buttonLink={["#offers", "#form"]}
/>

<main>
	<Container id="offers">
		{#each offers as offer, index}
			<OfferExt {...offer} {index} />
		{/each}
		<SectionHeader title={$t('cant-choose.title')} subtitle={$t('cant-choose.subtitle')} buttonText={$t('cant-choose.button')} href="#form" titleFirst={true}/>

	</Container>
	<Container id="wyg">
		<SectionHeader title={$t('wyg.title')} subtitle="" />

	</Container>
	<Container id="form">
		Container
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
