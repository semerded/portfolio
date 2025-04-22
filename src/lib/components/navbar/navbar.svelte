<script lang="ts">
	import './navbar.css';
	import { page } from '$app/state';
</script>   

<nav>
	<a href="/"><img src="/logo.webp" alt="logo" /></a>
	<div>
		<a href="/about"><span class:nav-active={page.url.pathname === '/about'}>About me</span></a>
		<a href="/projects"><span class:nav-active={page.url.pathname === '/projects'}>My projects</span></a>
		<a href="/contact"><span class:nav-active={page.url.pathname === '/contact'}>Contact</span></a>
	</div>
</nav>
