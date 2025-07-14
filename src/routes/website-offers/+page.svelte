<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import Hero from '$lib/components/hero.svelte';
	import OfferExt from '$lib/components/offers/OfferExt.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SideBar from '$lib/components/sidebar.svelte';
	import { onMount } from 'svelte';
	import './website-offers.css';

	import { json, t } from 'svelte-i18n';

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
	buttonLink={['#offers', '#form']}
/>

<main>
	<Container id="offers">
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
		<SectionHeader title={$t('form.title')} subtitle={$t('form.subtitle')} marginTop="200px" />
		<div class="glossy-tile" id="offer-form">
			<form>
				<input type="text" placeholder={$t('form.placeholder.name')} required />
				<input type="text" placeholder={$t('form.placeholder.email')} required />
				<select name="" id="select-offer" required>
					<option value={-1} disabled selected hidden>{$t('form.placeholder.offer')}</option>
					{#each offers as offer, index}
						<option value={index}>{offer.title}</option>
					{/each}
					<option value={-2}>{$t('form.cant-decide')}</option>
				</select>
				<textarea name="" placeholder={$t('form.placeholder.message')} id=""></textarea>
			</form>
		</div>
	</Container>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
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
		justify-content: center;
		form {
			max-width: 500px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 8px;

			input,
			textarea {
				padding: 8px 4px;
				background-color: transparent;
				border: 2px solid var(--secondary);
				border-radius: 8px;
				font-size: 1.1rem;
				color: var(--text);
			}

			input::placeholder,
			textarea::placeholder {
				color: lightgray;
				font-style: italic;
			}

			input:focus,
			textarea:focus {
				outline: unset;
				box-shadow: 0px 0px 16px 0px var(--secondary);
			}

			input:focus[required],
			textarea:focus[required] {
				box-shadow: 0px 0px 16px 0px var(--primary);
			}

			textarea {
				min-height: 150px;
				max-height: 200px;
			}

			input[required],
			textarea[required] {
				border: 2px solid var(--primary);
			}
		}
	}
</style>
