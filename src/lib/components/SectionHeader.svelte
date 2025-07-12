<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let buttonText: string | null = null;
	export let href: string | null = null;
	export let titleFirst: boolean = false;
</script>

<div class="section-header glossy-tile">
	<div class="button"></div>
	<div class="section-header-text">
		{#if titleFirst}
		<h2 class="section-header-title">{title}</h2>
		<h3 class="section-header-subtitle">{subtitle}</h3>
		{:else}
		<h3 class="section-header-subtitle">{subtitle}</h3>
		<h2 class="section-header-title">{title}</h2>
		{/if}
	</div>
	{#if buttonText && href}
		<a class="button" {href}>{buttonText}</a>
	{:else}
		<div class="button"></div>
	{/if}
</div>

<style>
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 16px 0;
		

		.section-header-text {
			text-align: center;
			width: 100%;

			.section-header-title {
				margin: 0px 0px;
				padding: 0;
				font-size: 4rem;
			}

			.section-header-subtitle {
				font-size: 1.2rem;
				font-weight: 500;
			}
		}

		.button {
			width: 200px;
			margin: 8px;
			padding: 8px;
		}

		
	}

	@media screen and (max-width: 1024px) {
		.section-header {
			flex-direction: column;
			div.button {
				height: 0px;
				margin: 0px;
				padding: 0px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.section-header {
			.section-header-text {
				.section-header-title {
					font-size: 8vw;
				}

				.section-header-subtitle {
					font-size: 4vw;
				}
			}
		}
		
	}
</style>
