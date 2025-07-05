<script lang="ts">
	import { toggleTheme } from '../../stores/light-dark-mode.store';
	import ToggleSwitch from './ToggleSwitch.svelte';
    

	let timeOutPointer: number | null = null;
	function toggleThemeGradually() {
        document.body.classList.add('theme-transition');
		if (timeOutPointer) {
            clearTimeout(timeOutPointer);
		}
        
		setTimeout(() => {
            timeOutPointer = null;
			document.body.classList.remove('theme-transition');
		}, 500);
        toggleTheme();
	}
</script>


<ToggleSwitch on:change={toggleThemeGradually} >
	<i slot="left" class="fa-solid fa-moon"></i>
	<i slot="right" class="fa-solid fa-sun"></i>


</ToggleSwitch>

