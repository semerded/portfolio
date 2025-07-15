<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
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

	let name = '';
	let email = '';
	let offer = -1;
	let validFormPart = { name: false, email: false, offer: false };
	$: validForm = Object.values(validFormPart).every(Boolean);

	function validateName(val: string) {
		validFormPart.name = val.trim().length > 1;
	}

	function validateEmail(val: string) {
		// Simple email regex
		validFormPart.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
	}

	function validateOffer(index: number) {
		validFormPart.offer = index !== -1 && index < offers.length;
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
			<div>
				<p class="bold">{$t('form.bold-description')}</p>
				<p>{$t('form.description')}</p>
				<p>{$t('form.optional')}</p>
				<p>{$t('form.note')}</p>
			</div>
			<form>
				<div>
					<input
						type="text"
						bind:value={name}
						placeholder={$t('form.placeholder.name')}
						required
						on:input={() => validateName(name)}
					/>
					<i
						class="fa-solid form-checkmark"
						class:fa-check-circle={validFormPart.name}
						class:fa-flip={validFormPart.name}
						class:fa-circle-xmark={!validFormPart.name}
					></i>
				</div>

				<div>
					<input
						type="text"
						bind:value={email}
						placeholder={$t('form.placeholder.email')}
						required
						on:input={() => validateEmail(email)}
					/>
					<i
						class="fa-solid form-checkmark"
						class:fa-check-circle={validFormPart.email}
						class:fa-flip={validFormPart.email}
						class:fa-circle-xmark={!validFormPart.email}
					></i>
				</div>

				<div>
					<select
						name=""
						id="select-offer"
						required
						class:placeholder={offer == -1}

						bind:value={offer}
						on:change={() => validateOffer(offer)}
					>
						<option value={-1} disabled selected hidden>{$t('form.placeholder.offer')}</option>
						{#each offers as offer, index}
							<option value={index}>{offer.title}</option>
						{/each}
						<option value={-2}>{$t('form.cant-decide')}</option>
					</select>
					<i
						class="fa-solid form-checkmark"
						class:fa-check-circle={validFormPart.offer}
						class:fa-flip={validFormPart.offer}
						class:fa-circle-xmark={!validFormPart.offer}
					></i>
				</div>

				<div>
					<textarea name="" placeholder={$t('form.placeholder.message')} id="form-message"
					></textarea>
				</div>

				<div>
					<button
						class="button"
						disabled={!validForm}
						on:click={() => {
							console.log('send data');
						}}>{$t('form.button')}</button
					>
				</div>
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

		form {
			max-width: 500px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 8px;

			div {
				position: relative;
				display: flex;
				align-items: center;

				i {
					--size: 24px;
					--fa-animation-iteration-count: 1;
					position: absolute;
					font-size: var(--size);
					right: calc((var(--size) + 4px) * -1);
					color: red;

					&.fa-check-circle {
						color: yellowgreen;
					}
				}
			}

			button {
				width: 100%;
				font-weight: 600;
				&:disabled {
					opacity: 0.5;
					color: black;
					background-color: lightgray;
					cursor: not-allowed;
				}
			}

			input,
			textarea,
			select {
				width: 100%;
				padding: 8px 4px;
				background-color: transparent;
				border: 2px solid var(--secondary);
				border-radius: 8px;
				font-size: 1.1rem;
				color: var(--text);

				&::placeholder, &.placeholder {
					color: rgb(184, 180, 180);
					font-style: italic;
				}

				&:focus {
					outline: unset;
					box-shadow: 0px 0px 16px 0px var(--secondary);

					&[required] {
						box-shadow: 0px 0px 16px 0px var(--primary);
					}
				}

				&[required] {
					border: 2px solid var(--primary);
				}
			}

			textarea {
				resize: vertical;
				min-height: 150px;
				max-height: 200px;
			}

			option {
				background-color: var(--card);

				&:active {
					background-color: var(--secondary);
				}
			}
		}
	}
</style>
