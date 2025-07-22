<script lang="ts">
	import './navbar.css';
	import './hamburger_icon.css';
	import { page } from '$app/state';
	import LightDarkModeSwitch from '$lib/components/light-dark-mode-switch.svelte';
	import ToggleLanguage from '../ToggleLanguage.svelte';
	import { _ } from 'svelte-i18n';

	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let showHamburgerOption: boolean;
	let hamburgerMenuVisible: boolean;

	onMount(() => {
		function updateHamburgerMenu() {
			showHamburgerOption = window.innerWidth <= 820;
		}
		window.addEventListener('resize', updateHamburgerMenu);
		updateHamburgerMenu();

		onDestroy(() => {
			window.removeEventListener('resize', updateHamburgerMenu);
		});

		
	});

	$: if (browser) {
	if (hamburgerMenuVisible) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
}
</script>


<nav class="navbar">
	<a href="/"><img src="/logos/logo.webp" alt="logo" /></a>
	{#if showHamburgerOption}
		<div class="hamburger-menu-button">
			<input
				class="hamburger-checkbox visually-hidden"
				id="hamburger-checkbox"
				type="checkbox"
				bind:checked={hamburgerMenuVisible}
			/>
			<label for="hamburger-checkbox" style="cursor: pointer;">
				<div class="hamburger hamburger4">
					<span class="bar bar1"></span>
					<span class="bar bar2"></span>
					<span class="bar bar3"></span>
					<span class="bar bar4"></span>
					<span class="bar bar5"></span>
				</div>
			</label>
		</div>

		<!-- {#if hamburgerMenuVisible}
		<div class="hamburger-menu">
			
		</div>
		{/if} -->
	{/if}
	{#if !showHamburgerOption || (showHamburgerOption && hamburgerMenuVisible)}
		<div
			class="navbar-buttons-cosmetics"
			class:navbar-buttons={!showHamburgerOption && !hamburgerMenuVisible}
			class:hamburger-menu={showHamburgerOption && hamburgerMenuVisible}
		>
			<a href="/website-offers"
				><span class:nav-active={page.url.pathname.toString().includes('/website-offers')}
					>{$_('navbar.offers')}</span
				></a
			>
			<a href="/about"
				><span class:nav-active={page.url.pathname.toString().includes('/about')}
					>{$_('navbar.about')}</span
				></a
			>
			<a href="/projects"
				><span class:nav-active={page.url.pathname.toString().includes('/projects')}
					>{$_('navbar.projects')}</span
				></a
			>
			<a href="/contact"
				><span class:nav-active={page.url.pathname.toString().includes('/contact')}
					>{$_('navbar.contact')}</span
				></a
			>
			<div>
				<LightDarkModeSwitch></LightDarkModeSwitch>
				<ToggleLanguage></ToggleLanguage>
			</div>
		</div>
	{/if}
</nav>
