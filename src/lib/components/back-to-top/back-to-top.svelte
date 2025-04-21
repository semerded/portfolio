<script lang="ts">
	import './back-to-top.css';

	import { onMount } from 'svelte';

	function backToTop() {
		window.scrollTo(0, 0);
	}

	var firstAppearance = true;

	onMount(() => {
		document.addEventListener('scroll', function () {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				if (firstAppearance) {
					document.getElementById('back-to-top')!.style.display = 'flex';
					firstAppearance = false;
				}
				document.getElementById('back-to-top')!.setAttribute('status', 'show_back_to_top_button');
			} else {
				// document.getElementById('back-to-top')!.style.display = 'none';
				document.getElementById('back-to-top')!.setAttribute('status', 'hide_back_to_top_button');
			}
		});
	});
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button id="back-to-top" on:click={backToTop}> 
	<i class="fa-solid fa-angles-up"></i> 
</button>
