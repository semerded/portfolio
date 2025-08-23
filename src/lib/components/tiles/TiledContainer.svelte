<script lang="ts">
	import { onMount } from 'svelte';

	export let wrapAt: number | null = 468;
	export let wrapFrom: number | null = null;
	export let wrap: boolean = false;
	export let wrapOnDeviceWidth: boolean = false;
	export let paddingY: string = '0';
	export let reverse: boolean = false;
	export let gap: string = '0';

	let isWrapping = false;
	let container: HTMLElement;

	function updateWrap() {
		const width = wrapOnDeviceWidth ? window.innerWidth : container?.clientWidth ?? 0;
		if (wrap) {
			isWrapping = wrap;
		} else if (wrapFrom !== null) {
			isWrapping = width > wrapFrom;
		} else if (wrapAt !== null) {
			isWrapping = width < wrapAt;
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
	style="flex-wrap: {isWrapping ? (reverse ? 'wrap-reverse' : 'wrap') : 'nowrap'}; padding: {paddingY} 0; gap: {gap}; {$$restProps.style}"
>
	<slot />
</section>

<style>
	.tiled-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
