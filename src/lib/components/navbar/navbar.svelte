<script lang="ts">
	import './navbar.css';
	import { page } from '$app/state';
	import LightDarkModeSwitch from '$lib/components/light-dark-mode-switch.svelte';
	import ToggleLanguage from '../ToggleLanguage.svelte';
	import { _ } from 'svelte-i18n';
</script>   

<nav class="navbar">
	<a href="/"><img src="/logos/logo.webp" alt="logo" /></a>
	<div>
		<a href="/website-offers"><span class:nav-active={page.url.pathname.toString().includes('/website-offers')}>{$_('navbar.offers')}</span></a>
		<a href="/about"><span class:nav-active={page.url.pathname.toString().includes('/about')}>{$_('navbar.about')}</span></a>
		<a href="/projects"><span class:nav-active={page.url.pathname.toString().includes('/projects')}>{$_('navbar.projects')}</span></a>
		<a href="/contact"><span class:nav-active={page.url.pathname.toString().includes('/contact')}>{$_('navbar.contact')}</span></a>
		<div>
			<LightDarkModeSwitch></LightDarkModeSwitch>
			<ToggleLanguage></ToggleLanguage>
		</div>
	</div>
</nav>
