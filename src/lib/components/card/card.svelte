<script lang="ts">
	import './card.css';

	export let title: string;
	export let description: string;
	export let image: string;
	export let href: string;
	export let progLangs: string[];

	import Tooltip from '$lib/components/mouse-following-tooltip.svelte';
	import ProgLang from '../prog-lang.svelte';

	let showTooltip = false;
	let mouseX = 0;
	let mouseY = 0;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	function handleMouseEnter() {
		showTooltip = true;
	}

	function handleMouseLeave() {
		showTooltip = false;
	}
</script>

<button
	class="card"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:mousemove={handleMouseMove}
	on:click={() => (window.location.href = href)}
>
	<div>
		<div class="card-image">
			<img src={image} alt={title} />
		</div>
		<div class="card-content">
			<h2>{title}</h2>
			<p>{description}</p>
			<div class="prog-lang-container">
				{#if progLangs.length > 0}
					{#each progLangs as progLang}
						<ProgLang name={progLang} boxShadow={true}></ProgLang>
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<Tooltip x={mouseX} y={mouseY} visible={showTooltip} tooltipText="Read more" />
</button>
