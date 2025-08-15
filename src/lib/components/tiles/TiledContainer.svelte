<script lang="ts">
	import { onMount } from 'svelte';

	export let wrapAt: number | null = 468;
	export let wrapFrom: number | null = null;
	export let wrap: boolean = false;
	export let paddingY: string = '0';
	let isWrapping = false;

	let container: HTMLElement;

	function updateWrap() {
		console.log('Width: ', window.innerWidth, wrapAt);
		if (container!) {
			if (wrap) {
				isWrapping = wrap;
			} else if (wrapFrom !== null) {
				isWrapping = container.clientWidth > wrapFrom;
			} else if (wrapAt !== null) {
				isWrapping = container.clientWidth < wrapAt;
			}
		}
	}

	onMount(() => {
		updateWrap();
		window.addEventListener('resize', updateWrap);
		return () => window.removeEventListener('resize', updateWrap);
	});
</script>

<section
	bind:this={container}
	class="tiled-container {$$restProps.class}"
	id="{$$restProps.id}"
	style="flex-wrap: {isWrapping ? 'wrap' : 'nowrap'}; padding: {paddingY} 0; {$$restProps.style}"
>
	<slot />
</section>

<style>
	.tiled-container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* gap: 1rem; */
		width: 100%;
		height: 100%;
	}
</style>
