<script lang="ts">
	import './container.css';

	export let center: boolean = true;
	export let minHeight: string | null = null;
	export let id: string | null = null;

	// export let padding: string = ""
</script>

<div id="{id}" class="container-wrapper" style={minHeight ? `min-height: ${minHeight}` : ''}>
	<article class="container">
		<slot />
	</article>
</div>



