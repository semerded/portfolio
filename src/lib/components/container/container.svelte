<script lang="ts">
	import './container.css';
	import { onMount } from 'svelte';
	let width = 0;

	export let center: boolean = true;
	export let minHeight: string | null = null;
	export let id: string | null = null;
	export let marginBottom: string | null = null;
	export let containerFrom: number | null = null;
	export let containerUntil: number | null = null;
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
	{id}
	class:container-wrapper={matches}
	style="{minHeight ? `min-height: ${minHeight}` : ''}; {marginBottom
		? `margin-bottom: ${marginBottom}`
		: ''}"
>
	<article class:container={matches}>
		<slot />
	</article>
</div>
