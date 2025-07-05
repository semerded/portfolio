<script lang="ts">
	import './navbar.css';
	import { page } from '$app/state';
	import LightDarkModeSwitch from '$lib/components/light-dark-mode-switch.svelte';
	import ToggleLanguage from '../ToggleLanguage.svelte';
</script>   

<nav class="navbar">
	<a href="/"><img src="/logos/logo.webp" alt="logo" /></a>
	<div>
		<a href="/website-offers"><span class:nav-active={page.url.pathname.toString().includes('/website-offers')}>Offers</span></a>
		<a href="/about"><span class:nav-active={page.url.pathname.toString().includes('/about')}>About me</span></a>
		<a href="/projects"><span class:nav-active={page.url.pathname.toString().includes('/projects')}>My projects</span></a>
		<a href="/contact"><span class:nav-active={page.url.pathname.toString().includes('/contact')}>Contact</span></a>
		<div>
			<LightDarkModeSwitch></LightDarkModeSwitch>
			<ToggleLanguage></ToggleLanguage>
		</div>
	</div>
</nav>
