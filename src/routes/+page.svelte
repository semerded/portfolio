<script lang="ts">
	import './index.css';
	import { t, json } from 'svelte-i18n';

	import Hero from '$lib/components/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Profile from '$lib/components/profile/profile.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import { darkMode } from '$lib/store/light-dark-mode.store';
	import SideBar from '$lib/components/sidebar.svelte';
	import Offer from '$lib/components/offer.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';

	$: offers = $json('website-offers.offers') as {
		title: string;
		price: string;
		features: string[];
		benefits: string[];
	}[];
	$: qosProvide = $json('qos.provide.content') as string[];
	$: qosAdditional = $json('qos.additional.content') as string[];
	$: qosExpect = $json('qos.expect.content') as string[];
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

{#if $darkMode}
	<DynamicBackground image="/images/index/bg-dark.jpg" />
{:else}
	<DynamicBackground image="/images/index/bg-light.jpg" />
{/if}
<main>
	<Hero
	title="Sem Van Broekhoven"
	description={$t('hero.subtitle')}
	leading="<i class='fa-solid fa-location-dot'></i> {$t('hero.country')}"
	buttonText={$t('hero.button')}
	buttonLink="#my-profile"
	id="welcome"
/>
<Profile />
<Container minHeight="100svh" id="my-projects">
	<SectionHeader
		title={$t('projects.title')}
		subtitle={$t('projects.subtitle')}
		buttonText={$t('projects.button')}
		href="/projects"
	/>
	<div id="project-container">
		<Card
			title="PLNM"
			description={$t('projects.PLNM')}
			image="images/projects/PLNM/logo.png"
			href="/projects/PLNM"
			progLangs={['dart', 'flutter']}
		/>
		<Card
			title="Pyrogine"
			description={$t('projects.Pyrogine')}
			image="images/projects/Pyrogine/logo.png"
			href="/projects"
			progLangs={['py', 'openGL']}
		/>
		<Card
			title="Insanthon"
			description={$t('projects.Insanthon')}
			image="images/projects/Insanthon/logo.png"
			href="/projects/Insanthon"
			progLangs={['py']}
		/>
	</div>
</Container>
<Container id="offers" marginBottom="5rem" containerFrom={768}>
	<SectionHeader
		title="Website Offers"
		subtitle="Let me create a website for you!"
		buttonText="More information"
		href="/website-offers"
	/>
	<div class="tiled-container">
		{#each offers as offer}
			<Offer
				title={offer.title}
				price={offer.price}
				features={offer.features}
				benefits={offer.benefits}
			/>
		{/each}
		<p style="color: white;">* {$t('website-offers.additional')}</p>
	</div>
</Container>
<Container id="qos">
	<SectionHeader
		title="What to expect?"
		subtitle="My work is guaranteed to be of the highest quality"
	/>
	<div class="tiled-container">
		<div class="glossy-tile">
			<h3>{$t('qos.expect.title')}</h3>
			<ul>
				{#each qosExpect as content}
					<li>{content}</li>
				{/each}
			</ul>
			<h3>{$t('qos.provide.title')}</h3>
			<ul>
				{#each qosProvide as content}
					<li>{content}</li>
				{/each}
			</ul>
			<img class="qos-icon" src="/icons/certified.svg" alt="certified icon" />
		</div>
		<div class="glossy-tile">
			<h3>{$t('qos.additional.title')}</h3>
			<ul>
				{#each qosAdditional as content}
					<li>{content}</li>
				{/each}
			</ul>
			<blockquote>{$t('qos.additional.info')}</blockquote>
			<a class="button" href="/additional-packages">{$t('qos.additional.button')}</a>
		</div>
	</div>
</Container>
</main>

<style>
	main {
			position: relative;
		z-index: 1;
	}
</style>
