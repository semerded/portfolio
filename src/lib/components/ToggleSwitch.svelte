<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let selected: 'left' | 'right' = 'left';
	export let width = 60;
	export let height = 30;
	export let activeColor = '#ffffff';
	export let inactiveColor = '#cccccc';

	const dispatch = createEventDispatcher();

	$: switchWidth = width;
	$: switchHeight = height;
	$: indicatorSize = switchHeight ; // padding of 5px each side
	$: indicatorX = switchWidth - indicatorSize ;

	function toggle() {
		selected = selected === 'left' ? 'right' : 'left';
		dispatch('change', { selected });
	}
</script>

<button
	class="switch-container"
	style="width: {switchWidth}px; height: {switchHeight}px; background-color: {inactiveColor};"
	on:click={toggle}
>
	<div
		class="indicator"
		style="
			width: {indicatorSize}px;
			height: {indicatorSize}px;
			transform: translateX({selected === 'right' ? indicatorX : 0}px);
			background-color: color-mix(in srgb, {activeColor} 50% , transparent);
		"
	></div>
	<div class="slot-wrapper"><slot name="left" /></div>
	<div class="slot-wrapper"><slot name="right" /></div>
</button>

<style>
	.switch-container {
        all: unset;

        padding: 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 999px;
		position: relative;
		cursor: pointer;
		box-sizing: border-box;
		overflow: hidden;
		user-select: none;
	}

	.indicator {
		position: absolute;
		top: 0px;
        z-index: 2;
		border-radius: 999px;
		transition:
			transform 0.3s ease,
			background-color 0.3s;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	.slot-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
		z-index: 1;
		flex: 1;
		text-align: center;
		font-size: 1rem;
		pointer-events: none;
        padding: 2px;

        :global(*) {
            width: 100%;
            height: 100%;
        }
	}
</style>
