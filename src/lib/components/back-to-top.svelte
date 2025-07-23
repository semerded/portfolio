<script lang="ts">
	import { onMount } from 'svelte';
	let showButton: boolean = false;
	let firstLoad: boolean = true;

	function backToTop() {
		window.scrollTo(0, 0);
	}

	onMount(() => {
		document.addEventListener('scroll', () => {
			showButton = window.scrollY > 20;
			if (showButton && firstLoad) {
				document.getElementById('back-to-top')!.style.display = 'flex';
				firstLoad = false;
			} 
		});
	});
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
	id="back-to-top"
	on:click={backToTop}
	class:show_back_to_top_button={showButton}
	class:hide_back_to_top_button={!showButton}
>
	<i class="fa-solid fa-angles-up"></i>
</button>

<style>
	#back-to-top {
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
		box-shadow: 0px 0px 24px 0px var(--primary);
		transition: 300ms;

		justify-content: center;
		align-items: center;
		background-color: var(--primary);

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
			box-shadow: 0px 0px 28px 10px var(--primary);
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
