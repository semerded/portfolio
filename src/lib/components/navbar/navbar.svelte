<script lang="ts">
	import './navbar.css';
	import { page } from '$app/state';
	import LightDarkModeSwitch from '$lib/light-dark-mode-switch.svelte';
</script>   

<nav class="navbar">
	<a href="/"><img src="/logos/logo.webp" alt="logo" /></a>
	<div>
		<a href="/about"><span class:nav-active={page.url.pathname.toString().includes('/about')}>About me</span></a>
		<a href="/projects"><span class:nav-active={page.url.pathname.toString().includes('/projects')}>My projects</span></a>
		<a href="/contact"><span class:nav-active={page.url.pathname.toString().includes('/contact')}>Contact</span></a>
		<LightDarkModeSwitch></LightDarkModeSwitch>
	</div>
</nav>
