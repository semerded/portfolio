<script lang="ts">

	export let startColor: string;
	export let endColor: string;

	let style = '';

	if (startColor && endColor) {
		style = `--start-color: ${startColor}; --end-color: ${endColor}`;
	}
</script>

<div class="fade" {style}></div>

<style>
	:root {
		--start-color: var(--bg);
		--end-color: var(--bg);
	}

	.fade {
		width: 100%;
		height: 200px;

		background: linear-gradient(var(--start-color), transparent);
	}
</style>
