<script lang="ts">
	import { toggleTheme } from '$lib/store/light-dark-mode.store';

    

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

<button on:click={toggleThemeGradually} aria-label="Toggle dark mode">
	<i class="fa-solid fa-moon"></i>
	<i class="fa-solid fa-sun"></i>
</button>

<style>
	button {
		width: 60px;
		height: 30px;
		border: none;
		margin: 8px;
		border-radius: 8px;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
