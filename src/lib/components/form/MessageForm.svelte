<script lang="ts">
	import { t } from 'svelte-i18n';
	import { emailLink } from '$stores/email';

	let name = '';
	let email = '';
	let concept = '';
	let message = '';
	const minNameLength = 2;
	const minConceptLength = 2;
	const minMessageLength = 10;
	const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let validFormPart = { name: false, email: false, concept: false, message: false };
	$: validForm = Object.values(validFormPart).every(Boolean);

	function validateName(val: string) {
		validFormPart.name = val.trim().length >= minNameLength;
	}

	function validateEmail(val: string) {
		// Simple email regex
		validFormPart.email = emailPattern.test(val);
	}

	function validateConcept(val: string) {
		validFormPart.concept = val.trim().length >= minConceptLength;
	}

	function validateMessage(val: string) {
		validFormPart.message = val.trim().length >= minMessageLength;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (validForm) {
			const formData = new FormData(event.target as HTMLFormElement);
			try {
				console.log(emailLink);
				console.log(formData);
				const res = await fetch(emailLink, {
					method: 'POST',
					body: formData,
					headers: {
						'Content-Type': 'application/json',
						    'Access-Control-Allow-Origin':'*'
					}
				});

				if (res.ok) {
					alert('Message sent successfully');
				} else {
					throw new Error('Failed to send message');
				}
			} catch (e: any) {
				alert(e.message);
			}
		}
	}
</script>

<form on:submit={handleSubmit}>
	<div>
		<input
			type="text"
			bind:value={name}
			placeholder={$t('form.placeholder.name')}
			minlength={minNameLength}
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
			pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
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
			minlength={minConceptLength}
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
			minlength={minMessageLength}
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

	<input
		type="hidden"
		name="_autoresponse"
		value="Thank you for your message, I will get back to you as soon as possible"
	/>
	<div>
		<button type="submit" class="button" disabled={!validForm}>{$t('form.button')}</button>
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
