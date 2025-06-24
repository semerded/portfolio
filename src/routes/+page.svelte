<script lang="ts">
	import '$lib/style/routes/index.css';
	import { t, json } from 'svelte-i18n';

	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import Card from '$lib/components/card/card.svelte';
	import Profile from '$lib/profile/profile.svelte';
	import DynamicBackground from '$lib/dynamic-background.svelte';
	import { darkMode } from '$lib/actions/light-dark-mode.store';
	import SideBar from '$lib/components/sidebar.svelte';
	import Offer from '$lib/components/offer.svelte';
	import SectionHeader from '$lib/components/section-header.svelte';

	$: qosInclude = $json('qos.included.content') as string[];
	$: qosProvide = $json('qos.provide.content') as string[];
	$: qosAdditional = $json('qos.additional.content') as string[];
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
<Container id="offers" marginBottom="5rem">
	<SectionHeader
		title="Website Offers"
		subtitle="Let me create a website for you!"
		buttonText="More information"
		href="/projects"
	/>
	<div class="tilled-container">
		<Offer
			title="Single Page Website"
			price="Starting from €75"
			icon="single-page-website.svg"
			features={['Responsive design', 'Fast loading design', 'Free & Lightweight deployment*']}
			benefits={[
				'Direct call to action',
				'Search engine optimized',
				'Easy navigable',
				'Low maintenance',
				'Simple and effective',
				'No security threats'
			]}
		/>
		<Offer
			title="Dynamic Single Page Website"
			price="Starting from €150"
			icon="dynamic-single-page-website.svg"
			features={[
				'Responsive design',
				'Fast loading design',
				'Free & Lightweight deployment*',
				'Dynamic content',
				'Custom database and API',
				'Contact form'
			]}
			benefits={[
				'Direct call to action',
				'Easily and dynamically show content',
				'Search engine optimized',
				'Easy navigable',
				'Low maintenance',
				'Simple and effective'
			]}
		/>
		<Offer
			title="Upgrade a Website"
			price="Custom price"
			icon="upgrade-website.svg"
			features={[
				'Responsive design',
				'Modernization of the layout',
				'Improved performance',
				'Search engine optimization'
			]}
			benefits={[
				'Improved user experience',
				'Mobile reach',
				'Improved security',
				'Brand trust & credibility'
			]}
		/>
		<Offer
			title="Multi-page Website"
			price="Starting from €200"
			icon="multi-page-website.svg"
			features={['Responsive design', 'Dynamic navigation']}
			benefits={['Direct call to action', 'Search engine optimized']}
		/>
		<Offer
			title="Dynamic Multi-page Website"
			price="Starting from €250"
			icon="dynamic-multi-page-website.svg"
			features={['Responsive design', 'Dynamic navigation', 'Database connectable', 'Custom API']}
			benefits={['Direct call to action', 'Search engine optimized']}
		/>
		<Offer
			title="Custom Website"
			price="Custom price"
			icon="custom-website.svg"
			features={['Custom design', 'Custom features', 'SEO optimized']}
			benefits={['Tailored to your needs', 'No fixed price']}
		/>
		<p style="color: white;">* Only available for small/medium scale websites</p>
	</div>
</Container>
<Container id="qos">
	<SectionHeader
		title="Additional info"
		subtitle="My work is guaranteed to be of the highest quality"
	/>
	<div class="glossy-tile">
		<h3>{$t('qos.included.title')}</h3>
		<ul>
			{#each qosInclude as content}
				<li>{content}</li>
			{/each}
		</ul>
		<h3>{$t('qos.provide.title')}</h3>
		<ul>
			{#each qosProvide as content}
				<li>{content}</li>
			{/each}
		</ul>
		<h3>{$t('qos.additional.title')}</h3>
		<i>{$t('qos.additional.info')}</i>
		<ul>
			{#each qosAdditional as content}
				<li>{content}</li>
			{/each}
		</ul>
		<img id="qos-icon" src="/icons/certified.svg" alt="certified icon">
	</div>
</Container>
