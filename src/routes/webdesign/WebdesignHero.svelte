<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import TiledContainer from '$lib/components/tiles/TiledContainer.svelte';
	import { t } from 'svelte-i18n';
</script>

<Container marginTop="var(--navbar-height)">
	<TiledContainer wrapAt={768} wrapOnDeviceWidth={true} id={$$restProps.id} class="webdesign-hero {$$restProps.class}">
		<div id="hero-text">
			<h1>
				{$t('webdesign-hero.title')}&nbsp;

				<span>{$t('webdesign-hero.title-highlight')} &nbsp;&nbsp;&nbsp;</span>
			</h1>
		</div>
		<div id="hero-image">
			<img src="/images/webdesign/hero.png" alt="web showcase" />
		</div>
	</TiledContainer>
</Container>

<style>
	:global(.webdesign-hero) {
		height: 70vh !important;
		width: 100%;

		div#hero-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			align-items: center;
			width: 100%;
            padding: 16px 4px;

			h1 {
				height: auto;
				width: auto;
				display: flex;
				flex-direction: column;
                font-size: 2rem;
                text-wrap: none;
			}
			span {
				color: var(--primary);
				font-size: 8rem;
				line-height: 6rem;
				border-bottom: 4px solid var(--primary);
			}
		}

		div#hero-image {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
</style>
