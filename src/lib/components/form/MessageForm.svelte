<script lang="ts">
	import { t } from 'svelte-i18n';

	let name = '';
	let email = '';
	let concept = '';
	let message = '';
	let validFormPart = { name: false, email: false, concept: false, message: false };
	$: validForm = Object.values(validFormPart).every(Boolean);

	function validateName(val: string) {
		validFormPart.name = val.trim().length > 1;
	}

	function validateEmail(val: string) {
		// Simple email regex
		validFormPart.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
	}

	function validateConcept(val: string) {
		validFormPart.concept = val.trim().length > 1;
	}

	function validateMessage(val: string) {
		validFormPart.message = val.trim().length > 10;
	}
</script>

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
		<input
			type="text"
			bind:value={concept}
			placeholder={$t('form.placeholder.concept')}
			required
			on:input={() => validateConcept(concept)}
		/>
		<i
			class="fa-solid form-checkmark"
			class:fa-check-circle={validFormPart.concept}
			class:fa-flip={validFormPart.concept}
			class:fa-circle-xmark={!validFormPart.concept}
		></i>
	</div>

	<div>
		<textarea
			bind:value={message}
			placeholder={$t('form.placeholder.message')}
			required
			on:input={() => validateMessage(message)}
		></textarea>
		<i
			class="fa-solid form-checkmark"
			class:fa-check-circle={validFormPart.message}
			class:fa-flip={validFormPart.message}
			class:fa-circle-xmark={!validFormPart.message}
		></i>
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
				right: calc((4px) * -1);
				color: red;

				&.fa-check-circle {
					color: yellowgreen;
				}
			}
		}

		button {
			width: 100%;
			margin: 0 24px;
			font-weight: 600;
			&:disabled {
				opacity: 0.5;
				color: black;
				background-color: lightgray;
				cursor: not-allowed;
			}
		}

		input,
		textarea {
			width: 100%;
			padding: 8px 4px;
			background-color: transparent;
			border: 2px solid var(--secondary);
			border-radius: 8px;
			font-size: 1.1rem;
			margin: 0 24px;
			color: var(--text);

			&::placeholder {
				color: var(--text-placeholder);
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
	}
</style>
