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
	<Hero
		title="Sem Van Broekhoven"
		image="images/index/hero.png"
		description={$t('hero.subtitle')}
		leading="<i class='fa-solid fa-location-dot'></i> {$t('hero.country')}"
		buttonText={[$t('hero.button'), $t('hero.offer-button')]}
		buttonLink={['#my-profile', '/website-offers']}
		id="welcome"
	/>

	<Container>
		<TiledContainer>
			<Tile>
				<h2>
					A website is the face of your business. <br />
					I can help you design it.
				</h2>
			</Tile>
			<Tile>
				<p>
				I offer an affordable and high quality website for your business. If you need a website from
				scratch or you are not happy with your current website, I will make sure that you get a high
				quality website that fits your needs and represents your business in the best possible way.
			</p>
			</Tile>
		</TiledContainer>

		<h2>Q&A</h2>
	</Container>

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
		<div class="tiled-container attention-scroll-track">
			{#each offers as offer, index}
				<OfferTile
					title={offer.title}
					price={offer.price}
					features={offer.features}
					benefits={offer.benefits}
					{index}
				/>
			{/each}
		</div>
		<p style="color: white;">* {$t('website-offers.additional')}</p>
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}

	.bg-credits {
		position: fixed;
		bottom: 10px;
		left: 10px;
		color: #fff;
		font-size: 10px;
		z-index: 100;
	}

	@media screen and (max-width: 650px) {
		main {
			:global(#project-container) {
				padding: 8px 0;
			}

			:global(#profile-container) {
				padding: 8px 0;

				:global(.glossy-tile) {
					padding: 8px 0;
				}
			}

			:global(#offers) {
				.tiled-container {
					flex-wrap: nowrap;
					overflow-x: scroll;
					justify-content: unset;

					:global(> *) {
						margin: 0 8px;
					}
				}

				p {
					text-align: center;
				}
			}
		}
	}
</style>
