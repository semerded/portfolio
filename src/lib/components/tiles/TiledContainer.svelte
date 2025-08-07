<script lang="ts">
	import { onMount } from 'svelte';

	export let wrapAt: number = 468;
	let wrap = false;

    let container: HTMLElement;

	function updateWrap() {
         console.log("Width: ", window.innerWidth, wrapAt);
         if(container!) {

             wrap = (container.clientWidth < wrapAt);
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

	class="tiled-container"
	style="flex-wrap: {wrap ? 'wrap' : 'nowrap'}"
>
	<slot />
</section>

<style>
	.tiled-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 100%;
	}
</style>
