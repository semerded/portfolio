<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import Hero from '$lib/components/hero.svelte';

	import { t, json } from 'svelte-i18n';

	$: projects = $json('projects') as {
		title: string;
		img: string;
		description: string;
	}[];
</script>

<Hero title="My Projects" />

<Container>
	<main class="tiled-container">
		{#each projects as project}
			<div class="tiled-item glossy-tile project">
				<img src={project.img} alt={project.title} />
				<div>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
				</div>
			</div>
		{/each}
	</main>
</Container>

<style>
	.project {
		max-width: 300px;
		padding: 0;
		img {
			width: 100%;
		}

        div {
            padding: 8px;
        }
	}
</style>
