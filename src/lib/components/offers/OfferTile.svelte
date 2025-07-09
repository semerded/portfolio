<script lang="ts">
	export let title: string;
	export let price: string;
	export let features: string[];
	export let benefits: string[];
	export let index: number;
	import { _ } from "svelte-i18n";


	let ids: string[] = [
		'single-page-website',
		'dynamic-single-page-website',
		'upgrade-a-website',
		'multi-page-website',
		'dynamic-multi-page-website',
		'custom-website'
	]
</script>

<a class="offer glossy-tile" href="/website-offers#{ids[index]}">
	<h2>{title}</h2>
	<span class="price">{price}</span>
	<div class="features">
		<h3>{$_('website-offers.offer-structure.features')}</h3>
		{#each features as feature, i (i)}
			<p>
				<i class="fa-solid fa-circle-check"> </i>
				{feature}
			</p>
		{/each}
	</div>
	<div class="benefits">
		<h3>{$_('website-offers.offer-structure.benefits')}</h3>
		{#each benefits as benefit, i (i)}
			<p>
				<i class="fa-solid fa-circle-check"> </i>
				{benefit}
			</p>
		{/each}
	</div>
	<span class="icon-holder">
		<img src="/icons/offers/{ids[index]}.svg" alt="icon" />
	</span>
</a>

<style>
	a.offer {
		text-decoration: none;
		color: var(--text);
		margin: 8px;

		overflow: hidden;
		position: relative;
		width: 30%;
		min-width: 300px;
		height: 600px;

		padding: 16px;

		h2 {
			margin: 16px 0px;
		}

		.price {
			transition: transform 500ms;
			display: block;
			background-color: var(--secondary);
			width: fit-content;
			padding: 8px;
			border-radius: 8px;
			transform: translateY(0px);
		}

		.features,
		.benefits {
			margin-top: 16px;

			h3 {
				margin: 8px 0px;
			}

			p {
				margin: 8px 0px;
				margin-left: 8px;

				i {
					transition: 500ms;
				}
			}
		}

		.icon-holder {
			transition: 500ms;

			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: 0px;
			right: 0px;
			width: 200px;
			height: 200px;
			border-radius: 8px;
			border: 3px solid white;

			transform: rotateZ(-20deg) translate(30px, 30px);

			img {
				transition: filter 300ms;

				width: 200px;
				height: 200px;
				filter: invert(95%);
			}
		}

		&:hover {
			transition: box-shadow 500ms;

			.icon-holder {
				transition: 500ms;
				transform: rotateZ(-20deg) translate(30px, 30px) scale(1.1);
				/* transform: rotateZ(-5deg) translate(10px, 30px); */
				border: 3px solid var(--primary);
				background-color: var(--primary);

				img {
					transition: filter 300ms;

					filter: invert(0%);
				}
			}

			.features {
				p {
					i {
						transition: 500ms;
						color: var(--secondary);
					}
				}
			}

			.benefits {
				p {
					i {
						transition: 500ms;
						color: var(--primary);
					}
				}
			}

			.price {
				transition: transform 500ms;
				transform: translateY(8px);
			}
		}
	}
</style>
