<script lang="ts" context="module">
	// Action to insert the cloned element
	function element(node: HTMLElement, content: HTMLElement) {
		node.appendChild(content);
		return {
			destroy() {
				node.removeChild(content);
			}
		};
	}
</script>

<script lang="ts">
	import '../style/colors.css';
	import '../style/vars.css';
	import '../style/main.css';

	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import BackToTop from '$lib/components/back-to-top.svelte';

	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';

	import { navRoutes } from '$lib/routes';
	import DynamicBackground from '$lib/components/dynamic-background.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	// Configurable transition speed (in milliseconds)
	const transitionSpeed = 200; // Change this value to adjust speed

	let direction: 'left' | 'right' = 'right';
	let transitioning = false;
	let oldContent: HTMLElement | null = null;
	let currentPath = $page.url.pathname;

	beforeNavigate(({ from }) => {
		if (from) {
			oldContent = document.getElementById('current-content')?.cloneNode(true) as HTMLElement;
			if (oldContent) {
				oldContent.id = 'old-content';
				transitioning = true;
			}
		}
	});

	$: {
		if ($page.url.pathname !== currentPath) {
			const currentIndex = Object.keys(navRoutes).indexOf($page.url.pathname);
			const prevIndex = Object.keys(navRoutes).indexOf(currentPath);
			direction = currentIndex > prevIndex ? 'left' : 'right';
			currentPath = $page.url.pathname;

			setTimeout(() => {
				transitioning = false;
				oldContent = null;
			}, transitionSpeed);
		} else {
			transitioning = false;
		}
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
	<meta name="theme-color" content="#132013" />
</svelte:head>

<Navbar />
<BackToTop />

<div class="transition-container" style="{transitioning ? 'overflow: hidden;' : ''}">
	<!-- Old content layer -->
	{#if transitioning && oldContent}
		<div
			class="old-page"
			style="animation-duration: {transitionSpeed}ms"
			use:element={oldContent}
		></div>
	{/if}

	<!-- New content layer -->
	<div
		id="current-content"
		class:new-page={transitioning}
		class:slide-in-left={transitioning && direction === 'left'}
		class:slide-in-right={transitioning && direction === 'right'}
		style="animation-duration: {transitionSpeed}ms"
	>
		<slot />
	</div>
</div>

<Footer />

<style>
	.transition-container {
		position: relative;
		width: 100%;
		min-height: 100vh;
	}

	.old-page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		animation-name: fade-out;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}

	.new-page {
		position: relative;
		z-index: 2;
	}

	.slide-in-left {
		animation-name: slide-in-left, fade-in;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}

	.slide-in-right {
		animation-name: slide-in-right, fade-in;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}

	@keyframes slide-in-left {
		from {
			transform: translateX(30%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes slide-in-right {
		from {
			transform: translateX(-30%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
