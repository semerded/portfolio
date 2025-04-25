<script lang="ts">
	import Hero from '$lib/components/hero/hero.svelte';
	import Container from '$lib/components/container/container.svelte';
	import '$lib/style/routes/index.css';
	import Card from '$lib/components/card/card.svelte';
	import Fade from '$lib/components/fade/fade.svelte';
</script>

<Hero
	title="Sem Van Broekhoven"
	description="Student at Thomas More - Junior Full Stack Software Developer"
	leading="<i class='fa-solid fa-location-dot'></i> Belgium"
	image="images/index/hero.jpg"
/>
<Fade startColor="#000000" endColor="var(--bg)" />
<Container>
	<div id="background"></div>
	<div>
		<h2 id="about-me">
			Hello 👋! I am Sem and I am <span>studying</span> my first year of
			<span>'Applied Computer Science'</span>
			at Thomas More University Of Applied Sciences in Geel. My <span>passion for technology</span>
			drives me to
			<span> experiment with programming languages </span>
			such as Dart (with Flutter Framework), Python, HTML, JavaScript, SQL and Java. I'm always open
			to learn new ways to <span>improve my skills</span>. Besides my love for programming, I am
			also passionate about <span>photography</span> and <span>music</span>.
		</h2>
	</div>
</Container>
<h3>I've worked a vast variety of projects</h3>

<h2>project highlight</h2>
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
