<script lang="ts">
	import { onMount } from 'svelte';
	let showButton: boolean = false;
	let firstLoad: boolean = true;

	function backToTop() {
		window.scrollTo(0, 0);
	}

	function isIntersecting(el1: HTMLElement, el2: HTMLElement) {
		const r1 = el1.getBoundingClientRect();
		const r2 = el2.getBoundingClientRect();

		return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
	}

	let backToTopButton: HTMLElement;
	let altBgColor: boolean = false;

	onMount(() => {
		document.addEventListener('scroll', () => {
			altBgColor = false;
			showButton = window.scrollY > 20;
			if (showButton && firstLoad) {
				document.getElementById('back-to-top')!.style.display = 'flex';
				firstLoad = false;
			}

			if (showButton) {
				document.getElementById('back-to-top')!.style.display = 'flex';

				document.querySelectorAll('.subtitle-primary-color').forEach((subtitle) => {
					if (isIntersecting(subtitle as HTMLElement, backToTopButton)) {
						altBgColor = true;
					} else if (!altBgColor) {
						altBgColor = false;
					}
				});
			}
		});
	});
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
	id="back-to-top"
	bind:this={backToTopButton}
	on:click={backToTop}
	class:show_back_to_top_button={showButton}
	class:hide_back_to_top_button={!showButton}
	class:alt-bg-color={altBgColor}
	>
	<i class="fa-solid fa-angles-up"></i>
</button>

<style>
	#back-to-top {
		--bg-color: var(--primary);

		&.alt-bg-color {
			--bg-color: var(--secondary);
		}
		all: unset;
		cursor: pointer;
		color: black;
		position: fixed;
		display: none;
		right: 24px;
		bottom: 24px;
		width: 40px;
		height: 40px;
		border: none;
		z-index: 15;

		border-radius: 100%;
		box-shadow: 0px 0px 24px 0px var(--bg-color);
		transition: 300ms;
		background-color: var(--bg-color);

		justify-content: center;
		align-items: center;

		&.show_back_to_top_button {
			animation: show_back_to_top_button 800ms forwards;
		}

		&.hide_back_to_top_button {
			animation: hide_back_to_top_button 800ms forwards;
		}

		i {
			font-size: 1.5rem;
			font-weight: bold;
		}

		&:hover {
			box-shadow: 0px 0px 28px 10px var(--bg-color);
			transition: 400ms;
			i {
				animation: hover_animation 1000ms infinite;
			}
		}
	}

	@keyframes show_back_to_top_button {
		from {
			transform: translateY(100px) rotateZ(180deg);
		}

		to {
			transform: rotateZ(0deg);
		}
	}

	@keyframes hide_back_to_top_button {
		from {
			transform: rotateZ(0deg);
		}

		to {
			transform: translateY(100px) rotateZ(180deg);
		}
	}

	@keyframes hover_animation {
		0% {
			transform: translateY(0px);
		}

		15% {
			transform: translateY(-5px);
		}

		30% {
			transform: translateY(0px);
		}

		45% {
			transform: translateY(-5px);
		}

		60% {
			transform: translateY(0px);
		}
	}
</style>
