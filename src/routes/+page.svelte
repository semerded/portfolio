<script lang="ts">
	import { scrollRange } from '$lib/actions/change_background_color_linear';
	import Container from '$lib/components/container/container.svelte';
	import '$lib/style/routes/index.css';
	import Card from '$lib/components/card/card.svelte';
</script>

<div class="hero-container">
	<img
		src="images/index/hero.jpg"
		alt="hero"
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--backgroundColorAlpha',
			min: 0.5,
			max: 1.005
		}}
		use:scrollRange={{
			start: 0,
			end: '100svh',
			property: '--backgroundYPosition',
			min: 1,
			max: 1.1
			// valueCSSunit: 'px'
		}}
	/>
	<div id="hero-text">
		<h1 class="unselectable">Sem Van Broekhoven</h1>
		<h2>Student at Thomas More - Junior Full Stack Software Developer</h2>
	</div>
</div>
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
		<h2>I've worked a vast variety of projects</h2>
	</div>
	<div id="card-container">
		<Card
			title="PLNM"
			description="A user-friendly cross-platform planning app with
                                    tons of features. It includes a note page, task manager and a project manager. Everything is saved in the cloud using the users Google Drive account for maximum privacy and no costs at all." 
			image="images/projects/PLNM/logo.png"
			href="/projects"
			progLangs={["dart", "flutter"]}
		/>
		<Card
			title="Motra"
			description="  A graphics library in python written on top of
                                    the brand new C based SDL3 library. Pre-made
                                    widgets with a lot of customization make
                                    development easier."
			image="images/projects/Motra/logo.png"
			href="/projects"
			progLangs={["py", "c"]}
			/>
		<Card 
		title="Insanthon"
		description="A picture based story game with a long playthrough and multiple endings."
		image="images/projects/insanthon/logo.png"
		href="/projects"
		progLangs={["py"]}
		/>
	</div>
</Container>
