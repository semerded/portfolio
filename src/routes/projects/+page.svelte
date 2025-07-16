<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import Hero from '$lib/components/hero.svelte';
	import ProgLang from '$lib/components/prog-lang.svelte';

	import { t, json } from 'svelte-i18n';

	$: projects = $json('projects') as {
		title: string;
		img: string;
		description: string;
		proglang: string[];
	}[];
</script>

<Hero title="My Projects" />

<Container>
	<main class="tiled-container">
		{#each projects as project}
			<div class="tiled-item glossy-tile project">
				<img src={project.img} alt={project.title} />
				<div class="prog-lang">
					{#each project.proglang as lang}
						<ProgLang name={lang} />
					{/each}
				</div>
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
			aspect-ratio: 1/1;
			object-fit: cover;
			overflow: hidden;
		}

		.prog-lang {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}

        div {
            padding: 0px 8px;

			h3 {
				margin: 8px 0px;
			}
        }
	}
</style>
