<script lang="ts">
	export let imageUrl: string;
</script>

<div id={$$restProps.id} class="static-bg-container {$$restProps.class}">
	<div class="image-container">
		<img src={imageUrl} alt="static background" />
	</div>
	<slot />
</div>

<style>
	.static-bg-container {
		position: relative;

		.image-container {
			position: fixed;
			inset: 0;
			z-index: -1;

			-webkit-mask: polygon(0 0, 100% 0, 100% 80%, 0 100%); /* visible area */
			-webkit-mask-repeat: no-repeat;
			-webkit-mask-size: cover;
			mask: polygon(0 0, 100% 0, 100% 80%, 0 100%);

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
