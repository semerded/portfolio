<script lang="ts">
	export let color: string = 'var(--bg)';
	export let text: string = '';
	export let yCorrection: string = '0';
</script>

<div
	style="--bg: {color}; top: {yCorrection};"
	class="subtitle slanted {color === 'var(--primary)' ? 'subtitle-primary-color' : ''}"
>
	<h2>{text}</h2>
</div>

<style>
	.subtitle {
		text-align: center;
		width: 100%;
		padding: 4rem 1rem;
		position: relative;
		background: var(--bg);
	}

	.subtitle-primary-color {
		h2::selection {
			background: var(--secondary);
		}
	}
</style>
