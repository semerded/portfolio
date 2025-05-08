<script lang="ts">
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import '$lib/style/routes/index.css';
	import Card from '$lib/components/card/card.svelte';
	import Fade from '$lib/fade.svelte';
	import SectionHeader from '$lib/components/section-header/section-header.svelte';
	import Profile from '$lib/profile/profile.svelte';
	import DynamicBackground from '$lib/dynamic-background.svelte';
</script>

<DynamicBackground  image="/images/index/bg.jpg"/>
<Hero
	title="Sem Van Broekhoven"
	description="Student at Thomas More - Junior Full Stack Software Developer"
	leading="<i class='fa-solid fa-location-dot'></i> Belgium"
	buttonText="View my profile"
	buttonLink="#profile-grid"
/>
<Fade startColor="#000000" endColor="var(--bg)" />
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
<div id="card-container">
	<Card
		title="PLNM"
		description="A user-friendly cross-platform planning app with
								tons of features. It includes a note page, task manager and a project manager. Everything is saved in the cloud using the users Google Drive account for maximum privacy and no costs at all."
		image="images/projects/PLNM/logo.png"
		href="/projects/PLNM"
		progLangs={['dart', 'flutter']}
	/>
	<Card
		title="Motra"
		description="  A graphics library in python written on top of
								the brand new C based SDL3 library. Pre-made
								widgets with a lot of customization make
								development easier."
		image="images/projects/Motra/logo.png"
		href="/projects"
		progLangs={['py', 'c']}
	/>
	<Card
		title="Insanthon"
		description="A picture based story game with a long playthrough and multiple endings."
		image="images/projects/Insanthon/logo.png"
		href="/projects/Insanthon"
		progLangs={['py']}
	/>
</div>
