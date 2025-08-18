<script lang="ts">
	export let color: string = 'var(--bg)';
	export let text: string = '';
</script>

<div
	style="--bg: {color};  "
	class="subtitle slanted {color === 'var(--primary)' ? 'subtitle-primary-color' : ''}"
>
	<h2>{text}</h2>
</div>

<style>
	.subtitle {
		text-align: center;
		width: 100%;
		padding: 4rem 1rem;
		background: var(--bg);
	}

	.subtitle-primary-color {
		h2::selection {
			background: var(--secondary);
		}
	}
</style>
