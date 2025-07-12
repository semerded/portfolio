<script lang="ts">
	import { offerStep } from '$stores/offer.store';

    const buttons = document.querySelectorAll('.offer-progress-bar button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

	function changeOfferStep(step: number) {
		if (step !== $offerStep) {
			offerStep.set(step);
		}
	}
</script>

<div class="offer-progress-bar">
	<button   on:click={() => changeOfferStep(0)}> 1 </button>
	<button on:click={() => changeOfferStep(1)}> 2 </button>
	<button on:click={() => changeOfferStep(2)}> 3 </button>
</div>

<style>
	.offer-progress-bar {
		position: fixed;
		width: 100%;
		height: 30px;
		z-index: 15;
		background-color: var(--card);
		top: var(--navbar-height);
		display: flex;
		justify-content: center;
	}
</style>
