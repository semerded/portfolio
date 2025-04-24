<script lang="ts">
	import './hero.css';

	import { scrollRange } from '$lib/actions/change_background_color_linear';

	export let title: string;
	export let description: string = '';
	export let leading: string = '';
	export let image: string;
	export let imageStyle: string = "";

</script>

<div class="hero-container">
	<img
		src={image}
		alt="hero for {title}"
		style={imageStyle}
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--backgroundColorAlpha',
			min: 0.5,
			max: 1.005
		}}
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--backgroundYPosition',
			min: 1,
			max: 1.1
			// valueCSSunit: 'px'
		}}
	/>
	<div id="hero-text">
		{#if leading}
			<h3>{@html leading}</h3>
		{/if}
		<h1 class="unselectable">{title}</h1>
		{#if description}
			<h2>{description}</h2>
		{/if}
	</div>
</div>
