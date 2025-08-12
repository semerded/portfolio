<script lang="ts">
	export let color: string = 'var(--bg)';
	export let text: string = '';
</script>

<div style="--bg: {color};" class="subtitle">
	<h3>{text}</h3>
</div>

<style>
	.subtitle {
		font-size: 2rem;
		font-weight: 600;
		text-align: center;
		width: 100%;
		padding: 4rem 1rem;
		margin: 1rem 0;
		background: var(--bg);
		clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
	}
</style>
