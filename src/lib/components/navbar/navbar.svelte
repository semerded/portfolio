<script lang="ts">
    import "./navbar.css";

    import { onMount } from "svelte";

    let currentPath = ''

    onMount(() => {
        currentPath = window.location.pathname
    })

    function isActive(path: string) {
        return currentPath === path ? 'nav-active' : ''
    }
</script>

<nav>

    <a href="/"><img src="/logo.webp" alt="logo"></a>
    <div>
        <a href="/about" class="{isActive('/about')}">About me</a>
        <a href="/projects" class="{isActive('/projects')}">My projects</a>
        <a href="/contact" class="{isActive('/contact')}">Contact</a>

    </div>
</nav>