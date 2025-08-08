<script lang="ts">
	export let id: string | null = null;
	export let alignX: AlignX = 'left';
	export let alignY: AlignY = 'top';
	export let paddingX: string = '0';
	export let paddingY: string = '0';
	export let minHeight: string | null = null;
	export let backgroundColor: string | null = null;
</script>

<div
	class="tile"
	id={id ?? undefined}
	style="
		justify-content: {alignY};
		align-items: {alignX};
		--background: {backgroundColor ?? 'unset'};
		min-height: {minHeight ?? 'unset'};
		padding: {paddingY} {paddingX};
	"
>
	<slot />
</div>

<style>
	.tile {
		display: flex;
		flex-direction: column;
		background: var(--background);
		width: 100%;
		height: 100%;
	}
</style>
