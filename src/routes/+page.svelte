<script lang="ts">
	import '$lib/style/routes/index.css';
	import { t } from 'svelte-i18n';

	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Profile from '$lib/profile/profile.svelte';
	import DynamicBackground from '$lib/dynamic-background.svelte';
	import { darkMode } from '$lib/actions/light-dark-mode.store';
	import SideBar from '$lib/components/sidebar.svelte';
	import Offer from '$lib/components/offer.svelte';
</script>

<SideBar
	links={[
		{ name: 'Welcome', link: '#welcome' },
		{ name: 'My Profile', link: '#my-profile' },
		{ name: 'My projects', link: '#project-container' }
	]}
/>

{#if $darkMode}
	<DynamicBackground image="/images/index/bg-dark.jpg" />
{:else}
	<DynamicBackground image="/images/index/bg-light.jpg" />
{/if}
<Hero
	title="Sem Van Broekhoven"
	description={$t('hero.subtitle')}
	leading="<i class='fa-solid fa-location-dot'></i> {$t('hero.country')}"
	buttonText="{$t('hero.button')}"
	buttonLink="#my-profile"
	id="welcome"
/>
<Profile />
<Container>
	<div class="tiled-container">
		<Offer
			title="Single Page Website"
			price="Starting from €100"
			icon="single-page-website.svg"
			features={['Responsive design', 'Easy navigable']}
		/>
		<Offer
			title="Upgrade a Website"
			price="Starting from €150"
			icon="upgrade-website.svg"
			features={['Responsive design', 'Rebrand & modernization']}
		/>
		<Offer 
			title="Custom Website"
			price="Custom price"
			icon="custom-website.svg"
			features={['Custom design', 'Custom features', 'SEO optimized']}
		 />
	</div>
</Container>
<Container>
	<div id="project-container">
		<Card
			title="PLNM"
			description="A user-friendly cross-platform planning app with
									tons of features. It includes a note page, task manager and a project manager. Everything is saved in the cloud using the users Google Drive account for maximum privacy and no costs at all."
			image="images/projects/PLNM/logo.png"
			href="/projects/PLNM"
			progLangs={['dart', 'flutter']}
		/>
		<Card
			title="Pyrogine"
			description="A highly optimized and fast 2D game engine written in Python. It features a high-level API for creating apps and games with minimal code while being highly performant."
			image="images/projects/Pyrogine/logo.png"
			href="/projects"
			progLangs={['py', 'openGL']}
		/>
		<Card
			title="Insanthon"
			description="A picture based story game with a long playthrough and multiple endings."
			image="images/projects/Insanthon/logo.png"
			href="/projects/Insanthon"
			progLangs={['py']}
		/>
	</div>
</Container>
