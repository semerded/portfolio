<script lang="ts">
	import { scrollRange } from '$lib/actions/change_background_color_linear';
	import Button from '$lib/components/button.svelte';
	import { onMount } from 'svelte';

	export let id: string | null = null;
	export let title: string;
	export let description: string = '';
	export let leading: string = '';
	export let image: string = '';
	export let imageStyle: string = '';
	export let buttonText: string[] = [];
	export let buttonLink: string[] = [];
	export let primaryButton: number = 0;
	export let height: string = '100lvh';

	let foreignLink: boolean[] = [];
	buttonLink.forEach((link) => {
		if (link.startsWith('http')) {
			foreignLink.push(true);
		} else {
			foreignLink.push(false);
		}
	});

	if (buttonText.length !== buttonLink.length) {
		throw new Error('buttonText and buttonLink must be the same length');
	}
</script>

<div class="hero-container" {id} style="--height: calc({height} + 20lvh)">
	{#if image}
		<div class="image-container">
			<img
				src={image}
				alt="hero for {title}"
				class="unselectable"
				style="{imageStyle}"
				use:scrollRange={{
					start: 0,
					end: height,
					property: '--backgroundColorAlpha',
					min: 0.8,
					max: 0
				}}
				use:scrollRange={{
					start: 0,
					end: height,
					property: '--backgroundYPosition',
					min: 1,
					max: 1.3
					// valueCSSunit: 'px'
				}}
			/>
		</div>
		<div class="image-fade"></div>
	{/if}
	<div class="hero-text">
		{#if leading}
			<h3>{@html leading}</h3>
		{/if}
		<h1 class="unselectable">{title}</h1>
		{#if description}
			<h2>{description}</h2>
		{/if}
		<div class="button-container">
			{#each buttonText as buttonText, index}
				{#if index === primaryButton}
					<Button href={buttonLink[index]} primary={true} newTab={foreignLink[index]}
						>{buttonText}</Button
					>
				{:else}
					<Button href={buttonLink[index]}>{buttonText}</Button>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	:root {
		--image-fit: cover;
	}

	.hero-container {
		height: var(--height);
		width: 100%;
		position: relative;

		.image-container {
			overflow: hidden;
			position: sticky;
			top: 0;
			height: calc(var(--height) - 20lvh);
			width: 100%;

			img {
				object-fit: var(--image-fit);
				width: 100%;
				height: 100%;
				padding-top: var(--navbar-height);
				opacity: var(--backgroundColorAlpha);
				object-position: top center;
				transform: scale(var(--backgroundYPosition));
				transition: 50ms;
				display: flex;
			}
		}

		.image-fade {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 20lvh;
			background: linear-gradient(to bottom, transparent, var(--bg));
		}

		.hero-text {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: calc(50lvh - var(--navbar-height));
			right: 42%;
			text-align: center;
			width: fit-content;
			height: 100%;

			h1 {
				font-size: 4rem;
				color: var(--primary);
			}

			h2 {
				font-size: 2rem;
				color: var(--secondary);
			}

			.button-container {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.hero-container {
			.hero-text {
				h1 {
					font-size: 8svw;
				}
				h2 {
					font-size: 3svw;
				}
			}
		}
	}
</style>
