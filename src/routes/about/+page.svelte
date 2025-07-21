<script lang="ts">
	import Container from '$lib/components/container/container.svelte';

	import { t } from 'svelte-i18n';
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
	<article id="about-container" class="tiled-container">
		<section class="glossy-tile">
			<i class="fa-solid fa-user"></i>
			<div>
				<h3>{$t('about.title')}</h3>
				<p class="short">
					{$t('about.description')}
				</p>
				<p>
					{$t('about.hobbies')}
				</p>
			</div>
			
		</section>
		<section class="glossy-tile">
			<i class="fa-solid fa-code"></i>
			<div>
				<h3>{$t('programming.title')}</h3>
				<p class="short">
					{$t('programming.description')}
				</p>
			</div>
			
			<a class="button" href="https://wakatime.com/@sem" target="_blank">{$t('programming.button')}</a>
		</section>
		<section class="glossy-tile">
			<i class="fa-solid fa-camera"></i>
			<div>

				<h3>{$t('photography.title')}</h3>
				<p class="short">{$t('photography.description')}</p>
			</div>
			<a class="button" href="https://www.pexels.com/nl-nl/@sem-van-broekhoven-1851543463/" target="_blank">{$t('photography.button')}</a>
		</section>
	</article>
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


	article#about-container {
		section {
			width: 500px;
			min-height: 400px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h3 {
				transition: color 500ms;
				color: var(--secondary);
				padding: 8px 0;
			}
			
			i {
				transition: 500ms;
				color: var(--text);
				position: absolute;
				top: -10px;
				right: -30px;
				font-size: 12rem;
				overflow: hidden;
				transform: rotateZ(20deg);
			}

			p {
				width: 100%;
				padding: 4px 0px;
				margin-bottom: 16px;

				&.short {
					width: 280px;
				}
			}

			&:hover {
				i {
					color: var(--primary);
					transition: 500ms;
					transform: rotateZ(15deg);
				}

				h3 {
					transition: color 500ms;
					color: var(--primary);
				}
			}
		}
	}
</style>
