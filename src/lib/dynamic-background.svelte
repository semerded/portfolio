<script lang="ts">
	export let image: string;
    export let alt: string = "...";
	import { scrollRange } from '$lib/actions/change_background_color_linear';
</script>

<div class="dynamic-background">
	<img
		src={image}
		alt={alt}
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--bg-opacity',
			min: 0.5,
			max: 0.80
		}}
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--bg-scale',
			min: 1,
			max: 1.2
		}}
	/>
	<span></span>
</div>

<style>
	:root {
		--bg-opacity: 0.6;
		--bg-scale: 1;
	}

	.dynamic-background {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(var(--bg-scale));
        }

        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, var(--bg-opacity));
        }
	}
</style>
