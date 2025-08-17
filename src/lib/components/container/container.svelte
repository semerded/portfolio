<script lang="ts">
	import './container.css';
	import { onMount } from 'svelte';
	let width = 0;

	export let minHeight: string | null = null;
	export let marginTop: string | null = "0";
	export let marginBottom: string | null = "0";
	export let containerFrom: number | null = null;
	export let containerUntil: number | null = null;
	export let bg: string = 'var(--bg)';
	const updateWidth = () => {
		width = window.innerWidth;
	};
	$: matches =
		(containerFrom === null || width >= containerFrom) &&
		(containerUntil === null || width <= containerUntil);

	onMount(() => {
		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	});

	// export let padding: string = ""
</script>

<div
	id={$$restProps.id}
	class:container-wrapper={matches}
	class={$$restProps.class}
	style="{minHeight ? `min-height: ${minHeight}` : ''}; margin-bottom: {marginBottom}; margin-top: {marginTop}; background: {bg}"
>
	<article class:container={matches}>
		<slot />
	</article>
</div>
