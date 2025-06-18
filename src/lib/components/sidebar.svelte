<script lang="ts">
	import { onMount } from 'svelte';

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

	function caretClick(direction: string) {
		if (direction == "up") {
			activeIndex = Math.max(0, activeIndex - 1);
		} else {
			activeIndex = Math.min(links.length - 1, activeIndex + 1);
		}
		location.href = links[activeIndex].link;
	}
</script>

<nav class="sidebar">
	<button on:click={() => caretClick("up")}>&#11165;</button>
	{#each links as link, index}
		<a class:active={index === activeIndex} href={link.link}
			><span class="icon">&#9733;</span><span class="name">{link.name}</span></a
		><br />
	{/each}
	<button on:click={() => caretClick("down")}>&#11167;</button>
</nav>

<style>


	nav.sidebar {
		position: fixed;
		height: calc(100svh - calc(var(--navbar-height)) * 3);
		top: calc(var(--navbar-height) * 2);
		left: 0px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		width: 2rem;
		z-index: 9;
		transition: 500ms;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		text-decoration: 0;

		backdrop-filter: blur(3px);
		background-color: color-mix(in srgb, var(--bg) 0%, transparent);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-left: 0px;

		button {
			all: unset;
			color: white;
			margin: 8px 0;
			margin-left: 0.5rem;
			
			&:hover {
				cursor: pointer;
				color: var(--primary);
			}
		}

		a {
			padding-left: 0.5rem;
			text-decoration: none;
			display: flex;
			align-items: center;
			width: 100%;
			flex-wrap: nowrap;

			&.active > span {
				color: var(--primary);
			}

			span {
				transition: 500ms;

				color: white;
				width: 100%;
				width: 0px;
				display: flex;
				flex-wrap: nowrap;
				white-space: nowrap;

				&.name {
					display: none;
					opacity: 0;
					width: 100%;
					padding-left: 1rem;
				}
				&.icon {
					width: 1rem;
					text-align: center;
				}
			}
		}

		&:hover {
			a {
				span {
					opacity: 1;
					transition: 500ms;

					&.name {
						display: block;
					}
				}
			}
			transition: 500ms;
		}
	}
</style>
