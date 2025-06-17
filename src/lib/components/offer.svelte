<script lang="ts">
	export let title: string;
	export let price: string;
	export let icon: string;
	export let features: string[];
</script>

<div class="offer">
	<h2>{title}</h2>
	<span class="price">{price}</span>
	<div class="features">
        <h3>Included features</h3>
		{#each features as feature}
			<p>
				<i class="fa-solid fa-circle-check"> </i>
				{feature}
			</p>
		{/each}
	</div>
	<span class="icon-holder">
		<img src="/icons/offers/{icon}" alt="icon" />
	</span>
</div>

<style>
	.offer {
		overflow: hidden;
		position: relative;
		width: 400px;
		height: 600px;
		background-color: color-mix(in srgb, var(--bg) 40%, transparent);
		backdrop-filter: blur(5px);
		border-radius: 8px;
		padding: 16px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 2px 2px 24px 0px color-mix(in srgb, var(--box-shadow) 30%, transparent);

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

		.features {
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
			height: 300px;
			border-radius: 8px;
			border: 3px solid var(--text);

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

			.price {
				transition: transform 500ms;
				transform: translateY(8px);
			}
		}
	}
</style>
