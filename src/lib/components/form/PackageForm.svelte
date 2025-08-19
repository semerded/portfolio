<script lang="ts">
	export let offers: string[];

	import { t } from 'svelte-i18n';

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

<form>
	<div>
		<input
			type="text"
			bind:value={name}
			placeholder={$t('package-form.placeholder.name')}
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
			placeholder={$t('package-form.placeholder.email')}
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
			<option value={-1} disabled selected hidden>{$t('package-form.placeholder.package')}</option>
			{#each offers as title, index}
				<option value={index}>{title}</option>
			{/each}
			<option value={-2}>{$t('package-form.cant-decide')}</option>
		</select>
		<i
			class="fa-solid form-checkmark"
			class:fa-check-circle={validFormPart.offer}
			class:fa-flip={validFormPart.offer}
			class:fa-circle-xmark={!validFormPart.offer}
		></i>
	</div>

	<div>
		<textarea name="" placeholder={$t('package-form.placeholder.message')} id="form-message"
		></textarea>
	</div>

	<div>
		<button
			class="button"
			disabled={!validForm}
			on:click={() => {
				console.log('send data');
			}}>{$t('package-form.button')}</button
		>
	</div>
</form>

<style>
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
				right: 2px;
				color: red;

				&.fa-check-circle {
					color: yellowgreen;
				}
			}
		}

		button {
			width: 100%;
			font-weight: 600;
			margin: 0 28px;

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
			font-family: 'Lato', sans-serif;
			width: 100%;
			padding: 8px 4px;
			background-color: transparent;
			border-radius: 8px;
			margin: 0 32px;
			font-size: 1.1rem;
			color: var(--text);
			border: 1px solid rgba(255, 255, 255, 0.2);

			&::placeholder,
			&.placeholder {
				color: var(--text-placeholder);
				font-style: italic;
			}

			&:focus {
				outline: unset;
				border: 1px solid var(--secondary);

				&[required] {
					border: 1px solid var(--primary);
				}
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
</style>
