<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OfferExt from '$lib/components/offers/OfferExt.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SideBar from '$lib/components/sidebar.svelte';
	import { onMount } from 'svelte';
	import './website-offers.css';

	import { json, t } from 'svelte-i18n';
	import OfferForm from '$lib/components/form/OfferForm.svelte';

	$: offers = $json('offers') as {
		title: string;
		price: string;
		description: string;
		perfectFor: string;
		why: { [key: string]: string };
		slot: string;
	}[];

	$: wygProvide = $json('wyg.provide.content') as string[];
	$: wygAdditional = $json('wyg.additional.content') as string[];
	$: wygExpect = $json('wyg.expect.content') as string[];

	let selectOffer: HTMLSelectElement | null = null;

	onMount(() => {
		selectOffer = document.getElementById('select-offer') as HTMLSelectElement;
	});
	function setOffer(index: number) {
		if (selectOffer && index >= 0 && index < selectOffer.options.length) {
			selectOffer.selectedIndex = index;
		} else {
			throw new RangeError('selected offer is not in the range of the options: ' + index);
		}
	}
</script>

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
	buttonLink={['#offers', '#form']}
/>

<main>
	<Container id="offers">
		<div id="offer-container">
			{#each offers as offer, index}
				<OfferExt
					{...offer}
					{index}
					buttonCallback={() => {
						document.getElementById('form')!.scrollIntoView();
						setOffer(index + 1);
					}}
				/>
			{/each}
		</div>

		<div class="glossy-tile" id="cant-choose">
			<h2>{$t('cant-choose.title')}</h2>
			<h3>{$t('cant-choose.subtitle')}</h3>

			<button
				class="button"
				on:click={() => {
					document.getElementById('form')!.scrollIntoView();
					setOffer(selectOffer!.options.length - 1);
				}}>{$t('cant-choose.button')}</button
			>
		</div>
		<p class="price-info">* {$t('price-info')}</p>
	</Container>

	<Container id="wyg">
		<SectionHeader title={$t('wyg.title')} subtitle={$t('wyg.subtitle')} marginTop="200px" />
		<div class="tiled-container">
			<div class="glossy-tile">
				<h3>{$t('wyg.expect.title')}</h3>
				<ul>
					{#each wygExpect as content}
						<li>{content}</li>
					{/each}
				</ul>
				<h3>{$t('wyg.provide.title')}</h3>
				<ul>
					{#each wygProvide as content}
						<li>{content}</li>
					{/each}
				</ul>
				<img class="wyg-icon" src="/icons/certified.svg" alt="certified icon" />
			</div>
			<div class="glossy-tile wyg-additional">
				<div>
					<h3>{$t('wyg.additional.title')}</h3>
					<ul>
						{#each wygAdditional as content}
							<li>{content}</li>
						{/each}
					</ul>
				</div>
				<i>{$t('wyg.additional.info')}</i>
				<div>
					<a class="button" href="/additional-packages">{$t('wyg.additional.button')}</a>
				</div>
			</div>
		</div>
	</Container>
	<Container id="form">
		<SectionHeader
			title={$t('offer-form.title')}
			subtitle={$t('offer-form.subtitle')}
			marginTop="200px"
		/>
		<div class="glossy-tile" id="offer-form">
			<div>
				<p class="bold">{$t('offer-form.bold-description')}</p>
				<p>{$t('offer-form.description')}</p>
				<p>{$t('offer-form.optional')}</p>
				<p>{$t('offer-form.note')}</p>
			</div>

			<OfferForm {offers} />
		</div>
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;

		p.price-info {
			margin: auto;
			text-align: center;
			width: min(100%, 800px);
		}
	}

	.wyg-additional {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	#cant-choose {
		display: flex;
		flex-direction: column;
		align-items: center;

		h3 {
			padding: 8px;
		}

		button {
			padding: 8px 16px;
			z-index: 2;
		}
	}

	#offer-form {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;
		> div {
			max-width: 500px;
			width: 100%;
			padding: 16px;

			p {
				padding: 8px 0;
			}
		}
	}

	@media screen and (max-width: 768px) {
		main {
			#offer-container {
				display: flex;
				overflow-x: scroll;

			}

			#cant-choose {
				margin: 8px 0;
				padding: 8px;

				h3 {
					font-size: 1rem;
				}
			}
		}
	}
</style>
