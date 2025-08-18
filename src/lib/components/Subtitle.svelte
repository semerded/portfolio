<script lang="ts">
	export let color: string = 'var(--bg)';
	export let text: string = '';

	let selectionBg: string;
	if (color === 'var(--primary)') {
		selectionBg = "var(--secondary)";
	} else {
		selectionBg = "var(--primary)";
	}

</script>

<div style="--bg: {color};  " class="subtitle slanted">
	<h2 style="--selection-bg: {selectionBg}">{text}</h2>
</div>

<style>
	.subtitle {
		text-align: center;
		width: 100%;
		padding: 4rem 1rem;
		background: var(--bg);
		h2::selection {
			background: var(--selection-bg);
		}
	}
</style>
