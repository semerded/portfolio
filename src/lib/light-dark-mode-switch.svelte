<script lang="ts">
	import { toggleTheme } from '$lib/actions/light-dark-mode.store';

    let timeOutPointer: number | null = null;
    function toggleThemeGradually() {
        toggleTheme();
        document.body.style.transition = '0.5s ease-in-out';
        if (timeOutPointer) {
            clearTimeout(timeOutPointer);
        }

        setTimeout(() => {
            timeOutPointer = null
            document.body.style.transition = '';
        }, 500);
        
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
