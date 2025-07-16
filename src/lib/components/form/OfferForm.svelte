<script lang="ts">
    export let offers: { title: string; price: string; description: string }[];

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
            placeholder={$t('offer-form.placeholder.name')}
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
            placeholder={$t('offer-form.placeholder.email')}
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
            <option value={-1} disabled selected hidden>{$t('offer-form.placeholder.offer')}</option>
            {#each offers as offer, index}
                <option value={index}>{offer.title}</option>
            {/each}
            <option value={-2}>{$t('offer-form.cant-decide')}</option>
        </select>
        <i
            class="fa-solid form-checkmark"
            class:fa-check-circle={validFormPart.offer}
            class:fa-flip={validFormPart.offer}
            class:fa-circle-xmark={!validFormPart.offer}
        ></i>
    </div>

    <div>
        <textarea name="" placeholder={$t('offer-form.placeholder.message')} id="form-message"
        ></textarea>
    </div>

    <div>
        <button
            class="button"
            disabled={!validForm}
            on:click={() => {
                console.log('send data');
            }}>{$t('offer-form.button')}</button
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

			option {
				background-color: var(--card);

				&:active {
					background-color: var(--secondary);
				}
			}
		}
</style>