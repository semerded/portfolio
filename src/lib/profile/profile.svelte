<script lang="ts">
	import './profile.css';
	import Container from '$lib/components/container/container.svelte';
	import { intersectionObserver } from '$lib/animate-on-scroll';
	import { onMount } from 'svelte';

	onMount(() => {
		intersectionObserver?.observe(document.getElementById('profile-who-image-container')!);
	});
</script>

<Container>
	<div id="profile-container">
		<div class="profile-column">
			<div id="profile-title" class="grid-flex">
				<h3>My profile</h3>
			</div>
			<div id="profile-who" class="grid-flex">
				<div id="profile-who-image-container" class="ob-infinite">
					<img src="/images/index/me.png" alt="thats me!" />
					<div></div>
				</div>
				<h3>Sem Van Broekhoven</h3>
				<p>Full Stack Software Developer</p>
			</div>
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
				<h3>My favorite tools</h3>
				<div class="skill-wrapper">
					<div class="skill">
						<i class="devicon-python-plain"></i>
						<span class="skill-name">Python</span>
					</div>
					<div class="skill">
						<i class="devicon-svelte-plain"></i>
						<span class="skill-name">Svelte</span>
					</div>
					<div class="skill">
						<i class="devicon-dart-plain"></i>
						<span class="skill-name">Dart</span>
					</div>
					<div class="skill">
						<i class="devicon-flutter-plain"></i>
						<span class="skill-name">Flutter</span>
					</div>
					<div class="skill">
						<i class="devicon-mysql-plain"></i>
						<span class="skill-name">MySQL</span>
					</div>
				</div>

				<h3>Other tools</h3>
				<div class="skill">
					<i class="devicon-java-plain"></i>
					<span class="skill-name">Java</span>
				</div>
				<div class="skill">
					<i class="devicon-arduino-plain"></i>
					<span class="skill-name">Arduino</span>
				</div>
			</div>
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
			<div id="profile-experience">experience</div>
			<div id="profile-education">education</div>
			<div id="profile-print">
				<button>Print&nbsp;<i class="fa-solid fa-print"></i></button>
			</div>
			<div id="profile-save">
				<button>Save&nbsp;<i class="fa-solid fa-download"></i></button>
			</div>
		</div>
	</div>
</Container>
