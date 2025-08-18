<script lang="ts">
	import { onMount } from 'svelte';
	import './card.css';

	export let title: string;
	export let description: string;
	export let icon: string;
	export let maxWidth: string = '400px';
	export let textPosition: string = 'end';

	export let price: string | null = null;
</script>

<button class="card" style="max-width: {maxWidth}">
	<div>
		<div class="card-icon">
			<i style="--size: calc({maxWidth} / 1.3);" class="fa-solid {icon}"></i>
		</div>

		<div style="justify-content: {textPosition};" class="card-content">
			{#if price}
				<p class="price">{price}</p>
			{/if}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</button>
