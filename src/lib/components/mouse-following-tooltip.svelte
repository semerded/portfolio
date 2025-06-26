<script lang="ts">
	export let x: number = 0;
	export let y: number = 0;
	export let visible: boolean = false;
	export let tooltipText: string;
</script>

{#if visible}
	<div class="tooltip" style="top: {y}px; left: {x}px;">
		{tooltipText}
	</div>
{/if}

<style>
	.tooltip {
		position: fixed;
		background: var(--secondary);
		color: black;
		padding: 0.5rem;
		border-radius: 4px;
		pointer-events: none;
		transform: translate(10px, 10px);
		font-size: 0.875rem;
		white-space: nowrap;
		font-size: 0.8rem;
		font-weight: 550;
		z-index: 3;
	}
</style>
