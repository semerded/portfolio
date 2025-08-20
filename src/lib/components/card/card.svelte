<script lang="ts">
	import './card.css';

	export let title: string;
	export let description: string;
	export let icon: string = "fa-ellipsis";
	export let image: string = "";
	export let maxWidth: string = '400px';
	export let textPosition: string = 'end';
	export let price: string | null = null;
</script>

<div class="card" style="max-width: {maxWidth}">
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
</div>
