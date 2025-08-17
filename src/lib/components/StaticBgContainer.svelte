<script lang="ts">
	export let imageUrl: string;
	export let paddingY: string = '4rem';
</script>

<div
	id={$$restProps.id}
	class="static-bg-container {$$restProps.class}"
	style="padding-top: {paddingY}; padding-bottom: {paddingY};"
>
	<div class="image-container">
		<img src={imageUrl} alt="static background" />
	</div>
	<slot />
</div>

<style>
	.static-bg-container {
		position: relative;
		top: 2rem;
		text-align: center;

		.image-container {
			position: fixed;
			inset: 0;
			z-index: -2;
			/* background: black; */

			&::after {
				content: '';
				position: absolute;
				inset: 0;
				z-index: 1;
				background: var(--gradient);
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
