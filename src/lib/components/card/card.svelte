<script lang="ts">
	import './card.css';
	export let href: string | null = null;
	export let maxWidth = '300px';
	export let image: string | null = null;
	export let icon = 'fa-star';
	export let title = '';
	export let description = '';
	export let price: string | null = null;
	export let textPosition = 'flex-end';

	// Decide the HTML tag
	const tag = href ? 'a' : 'div';
</script>

<svelte:element this={tag} href={href} class="card {$$restProps.class}" id={$$restProps.id} style="max-width: {maxWidth}; {href ? 'cursor: pointer;' : ''} {$$props.style}">
	<div class="card-icon">
		{#if image}
			<img src={image} alt={title} style="max-width: {maxWidth};" />
		{:else}
			<i style="--size: calc({maxWidth} / 1.3);" class="fa-solid {icon}"></i>
		{/if}
	</div>

	<div style="justify-content: {textPosition};" class="card-content">
		{#if price}
			<p class="price">{price}</p>
		{/if}
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</svelte:element>
