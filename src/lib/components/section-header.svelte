<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let buttonText: string | null = null;
	export let href: string | null = null;
</script>

<div class="section-header glossy-tile">
	<div class="button"></div>
	<div class="section-header-text">
		<h3 class="section-header-subtitle">{subtitle}</h3>
		<h2 class="section-header-title">{title}</h2>
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

		a {
			transition: 500ms;
			background-color: var(--primary);
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 8px;
			color: white;
			text-decoration: none;

			&:hover {
				transition: 500ms;
				background-color: var(--secondary);
			}
		}
	}
</style>
