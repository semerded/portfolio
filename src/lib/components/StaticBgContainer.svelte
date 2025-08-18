<script lang="ts">
	import { onMount } from 'svelte';

	export let imageUrl: string;
	export let paddingY: string = '4rem';

	let observer: IntersectionObserver;
	let visible: boolean = true;
	let slitContainer: HTMLElement;

	onMount(() => {
		observer = new IntersectionObserver((entries) => {
			visible = entries[0].isIntersecting;
		});
		observer.observe(slitContainer);
		return () => observer.disconnect();
	});
</script>

<div
	id={$$restProps.id}
	bind:this={slitContainer}
	class="static-bg-container {$$restProps.class}"
	style="padding-top: {paddingY}; padding-bottom: {paddingY};"
>
	{#if visible}
		<div class="image-container">
			<img src={imageUrl} alt="static background" />
		</div>
	{/if}
	<slot />
</div>

<style>
	.static-bg-container {
		position: relative;
		top: 2rem;
		text-align: center;

		.image-container {
			position: fixed;
			inset: 0;
			z-index: -2;
			/* background: black; */

			&::after {
				content: '';
				position: absolute;
				inset: 0;
				z-index: 1;
				background: var(--gradient);
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
