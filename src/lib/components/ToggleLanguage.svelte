<script lang="ts">
	import ToggleSwitch from "./ToggleSwitch.svelte";
    import { lang } from "$stores/lang.store";
    
</script>

<ToggleSwitch on:change={() => lang.set($lang === 'en' ? 'nl' : 'en')} >
    <img slot="left" src="/icons/flags/en.webp" alt="English" />
    <img slot="right" src="/icons/flags/nl.webp" alt="Nederlands" />
</ToggleSwitch>