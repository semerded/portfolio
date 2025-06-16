<script lang="ts">
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import '$lib/style/routes/index.css';
	import Card from '$lib/components/card/card.svelte';
	import Fade from '$lib/fade.svelte';
	import SectionHeader from '$lib/components/section-header/section-header.svelte';
	import Profile from '$lib/profile/profile.svelte';
	import DynamicBackground from '$lib/dynamic-background.svelte';
	import { darkMode } from '$lib/actions/light-dark-mode.store';
	import SideBar from '$lib/components/sidebar.svelte';
</script>

<SideBar links={[{ name: 'Welcome', link: '#welcome' }, { name: 'My Profile', link: '#my-profile' }, { name: 'My projects', link: '#project-container'}]} />

{#if $darkMode}
	<DynamicBackground image="/images/index/bg-dark.jpg" />
{:else}
	<DynamicBackground image="/images/index/bg-light.jpg" />
{/if}
<Hero
	title="Sem Van Broekhoven"
	description="Student at Thomas More - Junior Full Stack Software Developer"
	leading="<i class='fa-solid fa-location-dot'></i> Belgium"
	buttonText="View my profile"
	buttonLink="#my-profile"
	id="welcome"
/>
<Profile />
<Container>
	<!-- <div id="background"></div> -->
	<h2 id="about-me">
		Hello 👋! I am Sem and I am <span>studying</span> my first year of
		<span>'Applied Computer Science'</span>
		at Thomas More University Of Applied Sciences in Geel. My <span>passion for technology</span>
		drives me to
		<span> experiment with programming languages </span>
		such as Dart (with Flutter Framework), Python, HTML, JavaScript, SQL and Java. I'm always open to
		learn new ways to <span>improve my skills</span>. Besides my love for programming, I am also
		passionate about <span>photography</span> and <span>music</span>.
	</h2>
</Container>
<SectionHeader title="Project Highlights" subtitle="Just the tip of the iceberg" />
<div id="project-container">
	<Card
		title="PLNM"
		description="A user-friendly cross-platform planning app with
								tons of features. It includes a note page, task manager and a project manager. Everything is saved in the cloud using the users Google Drive account for maximum privacy and no costs at all."
		image="images/projects/PLNM/logo.png"
		href="/projects/PLNM"
		progLangs={['dart', 'flutter']}
	/>
	<Card
		title="Pyrogine"
		description="A highly optimized and fast 2D game engine written in Python. It features a high-level API for creating apps and games with minimal code while being highly performant."
		image="images/projects/Pyrogine/logo.png"
		href="/projects"
		progLangs={['py', 'openGL']}
	/>
	<Card
		title="Insanthon"
		description="A picture based story game with a long playthrough and multiple endings."
		image="images/projects/Insanthon/logo.png"
		href="/projects/Insanthon"
		progLangs={['py']}
	/>
</div>
