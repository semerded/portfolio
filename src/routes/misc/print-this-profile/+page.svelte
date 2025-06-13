<script lang="ts">
	import Profile from '$lib/profile/profile.svelte';
</script>

<Profile />

<style>
    
	@media print {
        :global(.container-wrapper) {
        display: block;
    }
        :global(:root) {
            --navbar-height: 0px;
        }
		:global(body) {
			background-color: white;
		}
		:global(nav) {
			display: none !important;
		}
      
	}
</style>
