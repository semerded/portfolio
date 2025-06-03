<script lang="ts">
	import './profile.css';
	import Container from '$lib/components/container/container.svelte';
	import ProgLang from '$lib/components/prog-lang.svelte';
	import { intersectionObserver } from '$lib/animate-on-scroll';
	import { onMount } from 'svelte';

	onMount(() => {
		intersectionObserver?.observe(document.getElementById('profile-who-image-container')!);
	});
</script>

<Container>
	<div id="profile-container">
		<div class="profile-column">
			<!-- -->
			<!-- header -->
			<!-- -->
			<div id="profile-title" class="grid-flex">
				<h3>My profile</h3>
			</div>
			<div id="profile-who" class="grid-flex">
				<!-- -->
				<!-- me -->
				<!-- -->
				<div id="profile-who-image-container" class="ob-infinite">
					<img src="/images/index/me.png" alt="thats me!" />
					<div></div>
				</div>
				<h3>Sem Van Broekhoven</h3>
				<p>Full Stack Software Developer</p>
			</div>
			<!-- -->
			<!-- about me -->
			<!-- -->
			<div id="profile-about" class="grid-flex">
				<p>
					I'm 18 years old and have found love in programming. I've been experimenting with
					technology from a young age. Currently I like to make projects with a variety of
					programming languages.
				</p>
			</div>
		</div>
		<div class="profile-column">
			<div id="profile-skills">
				<!-- -->
				<!-- skills -->
				<!-- -->
				<h3>My favorite tools</h3>
				<div class="skill-wrapper">
					<ProgLang name="py"></ProgLang>
					<ProgLang name="sql"></ProgLang>
					<ProgLang name="flutter"></ProgLang>
					<ProgLang name="dart"></ProgLang>
					<ProgLang name="svelte"></ProgLang>
					<ProgLang name="ts"></ProgLang>
				</div>

				<h3>Other tools</h3>
				<div class="skill-wrapper">
					<ProgLang name="js"></ProgLang>
					<ProgLang name="html"></ProgLang>
					<ProgLang name="css"></ProgLang>
					<ProgLang name="java"></ProgLang>
					<ProgLang name="php"></ProgLang>
					<ProgLang name="cpp"></ProgLang>
					<ProgLang name="go"></ProgLang>
					<ProgLang name="arduino"></ProgLang>
					<ProgLang name="angular"></ProgLang>
					<ProgLang name="docker"></ProgLang>
					<ProgLang name="thymeleaf"></ProgLang>
					<ProgLang name="openGL"></ProgLang>
					<ProgLang name="pygame"></ProgLang>
					<ProgLang name="vscode"></ProgLang>
					<ProgLang name="raspberrypi"></ProgLang>
				</div>
			</div>
			<!-- -->
			<!-- links -->
			<!-- -->
			<div id="profile-links">
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://github.com/semerded" target="_blank"><i class="fa-brands fa-github"></i></a
				>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="https://www.linkedin.com/in/sem-van-broekhoven/" target="_blank"
					><i class="fa-brands fa-linkedin"></i></a
				>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="" target="_blank"><i class="fa-brands fa-stack-overflow"></i></a>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="" target="_blank"><i class="fa-brands fa-steam"></i></a>
			</div>
		</div>

		<div class="profile-column">
			<!-- -->
			<!-- experience -->
			<!-- -->
			<div id="profile-experience">experience</div>
			<!-- -->
			<!-- education -->
			<!-- -->
			<div id="profile-education">education</div>
			<!-- -->
			<!-- print -->
			<!-- -->
			<div id="profile-print">
				<button>Print&nbsp;<i class="fa-solid fa-print"></i></button>
			</div>
			<!-- -->
			<!-- save -->
			<!-- -->
			<div id="profile-save">
				<button>Save&nbsp;<i class="fa-solid fa-download"></i></button>
			</div>
		</div>
	</div>
</Container>
