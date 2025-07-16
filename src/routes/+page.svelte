<script lang="ts">
	import './index.css';
	import { t, json } from 'svelte-i18n';

	import Hero from '$lib/components/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Profile from '$lib/components/profile/profile.svelte';
	import SideBar from '$lib/components/sidebar.svelte';
	import OfferTile from '$lib/components/offers/OfferTile.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	$: offers = $json('website-offers.offers') as {
		title: string;
		price: string;
		features: string[];
		benefits: string[];
	}[];

	$: projectsHighlight = $json('projects-highlight.content') as {
		title: string;
		description: string;
		img: string;
		proglang: string[];
	}[];
	

</script>

<SideBar
	links={[
		{ name: 'Welcome', link: '#welcome' },
		{ name: 'My Profile', link: '#my-profile' },
		{ name: 'My projects', link: '#my-projects' },
		{ name: 'Website Offers', link: '#offers' },
		{ name: 'Quality of work', link: '#qos' }
	]}
/>


<main>
	<Hero
	title="Sem Van Broekhoven"
	description={$t('hero.subtitle')}
	leading="<i class='fa-solid fa-location-dot'></i> {$t('hero.country')}"
	buttonText={[$t('hero.button'), $t('hero.offer-button')]}
	buttonLink={["#my-profile", "/website-offers"]}

	id="welcome"
/>
<Profile />
<Container minHeight="100svh" id="my-projects">
	<SectionHeader
		title={$t('projects-highlight.title')}
		subtitle={$t('projects-highlight.subtitle')}
		buttonText={$t('projects-highlight.button')}
		href="/projects"
	/>
	<div id="project-container">
		{#each projectsHighlight as project}
			<Card
				title={project.title}
				description={project.description}
				image={project.img}
				href="/projects/{project.title}"
				progLangs={project.proglang}
			/>
		{/each}
	</div>
</Container>
<Container id="offers" marginBottom="5rem" containerFrom={768}>
	<SectionHeader
		title={$t('website-offers.title')}
		subtitle={$t('website-offers.subtitle')}
		buttonText={$t('website-offers.button')}
		href="/website-offers"
	/>
	<div class="tiled-container">
		{#each offers as offer, index}
			<OfferTile
				title={offer.title}
				price={offer.price}
				features={offer.features}
				benefits={offer.benefits}
				{index}
			/>
		{/each}
		<p style="color: white;">* {$t('website-offers.additional')}</p>
	</div>
</Container>

</main>

<style>
	main {
			position: relative;
		z-index: 1;
	}
</style>
