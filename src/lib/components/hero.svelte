<script lang="ts">

	import { scrollRange } from '$lib/actions/change_background_color_linear';
	import Button from '$lib/components/button.svelte';

	export let id: string | null = null;
	export let title: string;
	export let description: string = '';
	export let leading: string = '';
	export let image: string = '';
	export let imageStyle: string = '';
	export let buttonText: string = '';
	export let buttonLink: string = '';
</script>

<div class="hero-container" {id}>
	{#if image}
		<img
			src={image}
			alt="hero for {title}"
			style={imageStyle}
			class="unselectable"
			use:scrollRange={{
				start: 0,
				end: '100svh',
				property: '--backgroundColorAlpha',
				min: 0.5,
				max: 1.005
			}}
			use:scrollRange={{
				start: 0,
				end: '100svh',
				property: '--backgroundYPosition',
				min: 1,
				max: 1.1
				// valueCSSunit: 'px'
			}}
		/>
	{/if}
	<div id="hero-text">
		{#if leading}
			<h3>{@html leading}</h3>
		{/if}
		<h1 class="unselectable">{title}</h1>
		{#if description}
			<h2>{description}</h2>
		{/if}
		{#if buttonText && buttonLink}
			<Button href="{buttonLink}" primary={true}>{buttonText}</Button>
		{/if}
	</div>
</div>

<style>
	:root {
		--image-fit: cover;
	}

	.hero-container {
		width: 100%;
		height: 100lvh;
		position: relative;
		overflow: hidden;

		img {
			object-fit: var(--image-fit);
			width: 100%;
			height: 100%;
			transform: scale(var(--backgroundYPosition));
			transition: 50ms;
			position: fixed;
		}

		#hero-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			text-align: center;
			width: 100%;
			height: 100%;

			h1 {
				font-size: 4rem;
				color: var(--primary);
			}

			h2 {
				font-size: 2rem;
				color: var(--secondary);
			}
		}
	}

	@media screen and (max-width: 768px) {
		.hero-container {
			#hero-text {
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
