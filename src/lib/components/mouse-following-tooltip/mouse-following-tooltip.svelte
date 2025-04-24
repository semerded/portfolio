<script lang="ts">
	import './mouse-following-tooltip.css';
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
