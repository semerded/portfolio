<script lang="ts">
	import { t } from 'svelte-i18n';
	import { accessKey, emailUrl } from '$stores/email';
	import { onMount } from 'svelte';

	onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://web3forms.com/client/script.js';
    script.async = true;
	script.defer = true;
    document.body.appendChild(script);
  });

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

	const handleSubmit = async (data: { currentTarget: HTMLFormElement | undefined }) => {
		// status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch(emailUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			// status = result.message || 'Success';
		}
	};

// 	const form = document.getElementById('messageForm') as HTMLFormElement;

// form.addEventListener('submit', function(e) {

//     const hCaptcha = form.querySelector('textarea[name=h-captcha-response]')!;

//     if (!hCaptcha) {
//         e.preventDefault();
//         alert("Please fill out captcha field")
//         return
//     }
// });

	// async function handleSubmit(event: SubmitEvent) {
	// 	event.preventDefault();
	// 	if (validForm) {
	// 		const formData = new FormData(event.target as HTMLFormElement);
	// 		try {
	// 			console.log(formData);
	// 			const res = await fetch(emailUrl, {
	// 				method: 'POST',
	// 				body: json,
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Accept: 'application/json'
	// 				}
	// 			});

	// 			if (res.ok) {
	// 				alert('Message sent successfully');
	// 			} else {
	// 				throw new Error('Failed to send message');
	// 			}
	// 		} catch (e: any) {
	// 			alert(e.message);
	// 		}
	// 	}
	// }
</script>

<form on:submit|preventDefault={handleSubmit} id="messageFrom">
	<input type="hidden" name="access_key" value="{accessKey}">
	<input type="hidden" name="subject" value="Site Message: {concept}">
	<div>
		<input
			name="name"
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
			name="email"
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
			name="concept"
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
			name="message"
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
	<div class="h-captcha" data-captcha="true" data-theme="dark"></div>
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

		.h-captcha {
			margin: 4px 24px;
			
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
