<script lang="ts">
	import { onMount } from 'svelte';
    import LinearBlur from './overlay/linear-blur.svelte';

	interface Link {
		name: string;
		link: string;
	}
	export let links: Array<Link> = [];

	let activeIndex = -1;
	let lastVisibleIndex = -1;

	onMount(() => {
		const elements: HTMLElement[] = links
			.map((link) => document.querySelector(link.link))
			.filter(Boolean) as HTMLElement[];

		const observer = new IntersectionObserver(
			(entries) => {
				let visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible.length > 0) {
					const id = visible[0].target.id;
					const index = links.findIndex((link) => link.link === `#${id}`);
					if (index !== -1) {
						activeIndex = index;
						lastVisibleIndex = index;
					}
				} else {
					// No section is currently visible — fallback to last visible
					activeIndex = lastVisibleIndex;
				}
			},
			{
				threshold: 0.5
			}
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>


<nav class="sidebar">
	{#each links as link, index}
		<a class:active={index === activeIndex} href={link.link}>°<span>{link.name}</span></a><br />
	{/each}
</nav>


<style>
	nav.sidebar {
		position: fixed;
		height: calc(100svh - calc(var(--navbar-height)) * 3);
		top: calc(var(--navbar-height) * 2);
		left: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
        /* align-items: center; */
        padding-left: 4px;
		width: 1rem;
		z-index: 9;
            transition: 500ms;
            border-radius: 8px;
            text-decoration: 0;

            backdrop-filter: blur(10px);
            background-color: color-mix(in srgb, var(--bg) 70%, transparent);
            border: 1px solid rgba(255, 255, 255, 0.2);


		a {
			&.active {
				color: var(--primary);
                transition: 500ms;
			}

            span {
                width: 0px;
                display: block;
                opacity: 0;
            }
		}

        &:hover {
            width: 150px;
            a {
                span {
                    display: inline;
                    width: 150px;
                opacity: 1;

                }
            }
            transition: 500ms;
            
        }
	}
</style>
