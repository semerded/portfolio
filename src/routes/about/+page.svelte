<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
</script>

<Container>
	<div class="hero glossy-tile">
		<div>
			<h1>Hi! I'm Sem</h1>
			<h2>Software Developer & Tech Enthusiast</h2>
		</div>
		<div>
			<div class="image-container unselectable"><img src="/images/about/me.jpg" alt="me" /></div>
		</div>
	</div>
</Container>

<style>
	.hero {
		display: flex;
		margin: 20lvh 0;
        
		height: 60lvh;
		justify-content: center;
		align-items: center;

		> div {
			width: fit-content;
			height: 100%;
			padding: 2rem 0.5rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			/* align-items: start; */

			text-align: end;

			&:first-child {
				align-self: flex-end;
			}

			h1 {
				/* width: fit-content; */
				font-size: 4rem;
				color: var(--primary);
			}

			h2 {
				color: var(--secondary);
			}

			div.image-container {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: relative;
				pointer-events: all;
                border-radius: 9999px;

				img {
					transition: transform 500ms;

					height: 100%;
					object-fit: cover;
					border-radius: 9999px;
					transform: scale(1);

                    &:hover {
					transition: transform 500ms;
					transform: scale(1.1);
				}
				}
				
			}
		}
	}
</style>
