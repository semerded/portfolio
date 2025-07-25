<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let title: string;
	export let price: string;
	export let description: string;
	export let why: { [key: string]: string };
	export let perfectFor: string;
	export let slot: string;
	export let index: number;
	export let buttonCallback: () => void;

	let ids: string[] = [
		'single-page-website',
		'dynamic-single-page-website',
		'upgrade-a-website',
		'multi-page-website',
		'dynamic-multi-page-website',
		'custom-website'
	];
</script>

<section class="offerExt glossy-tile" id={ids[index]}>
	<div>
		<div class="head">
			<h3>{title}</h3>
			<span class="price">{price}</span>
		</div>
		<div class="body">
			<div class="description">
				<p>{description}</p>
				<div>
					<p>{slot}</p>
					<button on:click={() => buttonCallback()}
						><span>{$_('offer-structure.button')}</span></button
					>
				</div>
			</div>
			<img src={`/icons/offers/${ids[index]}.svg`} alt="icon" />
		</div>
	</div>
	<div>
		<h4>&#9989; {$_('offer-structure.why')} {title.toLocaleLowerCase()}</h4>
		<ul>
			{#each Object.entries(why) as [key, value]}
				<li>
					{key}<br />
					<span><span>&#8618;</span><span>{value}</span> </span>
				</li>
			{/each}
		</ul>
		<p>{perfectFor}</p>
	</div>
</section>

<style>
	.offerExt {
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 100%;

		> div {
			width: 100%;
			padding: 8px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h3 {
				font-size: 2rem;
			}

			.head {
				min-height: 2.5rem;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				flex: 0 0 auto;
				.price {
					background-color: var(--secondary);
					padding: 4px 8px;
					border-radius: 8px;
					display: inline-block;
					margin: 8px 0px;
				}
			}

			h4 {
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.body {
				flex: 1 1 0;
				display: flex;
				justify-content: space-between;

				img {
					transition:
						transform 500ms,
						opacity 500ms;
					filter: invert(100%);
					border: 1px solid black;
					position: relative;
					border-radius: 8px;
					bottom: -10%;
					/* width: 30%; */
					height: 130%;
					aspect-ratio: 9/16;
					margin-left: 8px;
					opacity: 0.2;
					transform: rotateZ(-15deg) scale(1.2);
				}

				.description {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					flex: 1 1 0;
					min-height: 0;
					width: 70%;

					button {
						all: unset;
						cursor: pointer;
						background-color: var(--primary);
						color: white;
						padding: 8px 16px;
						border-radius: 8px;
						display: inline-block;
						margin: 8px 0px;
						text-decoration: none;
						font-weight: bold;
					}
				}
			}

			ul {
				padding-inline-start: 1.5rem;
				padding-bottom: 2rem;

				li {
					> span {
						display: flex;

						> span {
							padding-right: 1ch;
						}
					}
				}
			}
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1280px) {
		/* strange glitch where "this one fits me best" button disappears */
		
	}

	@media screen and (min-width: 1024px) {
		.offerExt {
			&:hover {
			> div {
				.body {
					img {
						transition:
							transform 500ms,
							opacity 500ms;

						opacity: 1;
						transform: rotateZ(0deg) scale(1);
					}
				}
			}
		}
		}
	}

	@media screen and (max-width: 1023px) {
		.offerExt {
			grid-template-columns: repeat(1, 1fr);
			padding-bottom: 3rem !important;
			> div {
				.body {
					.description {
						width: 100%;

						button {
							position: absolute;
							bottom: 0;
							left: 24px;
						}
					}

					img {
						position: absolute;
						width: 50%;
						height: 50%;
						right: 20px;
					}
				}
			}

			li {
				span {
					display: none;
				}
			}
		}
	}

	@media screen and (max-width: 640px) {
		.offerExt {
			margin: 16px 0;
			padding: 4px;
		}
	}
</style>
