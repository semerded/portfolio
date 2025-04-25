<script lang="ts">
	import './navbar.css';
	import { page } from '$app/state';
</script>   

<nav>
	<a href="/"><img src="/logos/logo.webp" alt="logo" /></a>
	<div>
		<a href="/about"><span class:nav-active={page.url.pathname.toString().includes('/about')}>About me</span></a>
		<a href="/projects"><span class:nav-active={page.url.pathname.toString().includes('/projects')}>My projects</span></a>
		<a href="/contact"><span class:nav-active={page.url.pathname.toString().includes('/contact')}>Contact</span></a>
	</div>
</nav>
