<script lang="ts">
	export let id: string | null = null;
    export let textAlign: string = 'left';
</script>

<div class="tile" style="--text-align: {textAlign};" id={id ?? undefined}>
	<slot></slot>
</div>

<style>
	.tile {
        text-align: var(--text-align);
		/* flex: 1 1 0; */
        width: 100%;
	}
</style>
