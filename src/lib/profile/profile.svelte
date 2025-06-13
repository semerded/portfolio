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

<Container minHeight="100svh">
	<div id="profile-container">
		<div class="profile-column">
			<!-- -->
			<!-- header -->
			<!-- -->
			<div id="profile-title" class="grid-flex">
				<h3>My digital profile</h3>
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
				<h3><i class="fa-solid fa-star"></i> My favorite tools</h3>
				<div class="skill-wrapper">
					<ProgLang name="py"></ProgLang>
					<ProgLang name="sql"></ProgLang>
					<ProgLang name="flutter"></ProgLang>
					<ProgLang name="dart"></ProgLang>
					<ProgLang name="svelte"></ProgLang>
					<ProgLang name="ts"></ProgLang>
				</div>

				<h3><i class="fa-solid fa-code"></i> Programming</h3>
				<div class="skill-wrapper">
					<ProgLang name="js"></ProgLang>
					<ProgLang name="html"></ProgLang>
					<ProgLang name="css"></ProgLang>
					<ProgLang name="php"></ProgLang>
					<ProgLang name="angular"></ProgLang>
					<ProgLang name="thymeleaf"></ProgLang>
					<ProgLang name="java"></ProgLang>
					<ProgLang name="cpp"></ProgLang>
					<ProgLang name="go"></ProgLang>
					<ProgLang name="openGL"></ProgLang>
					<ProgLang name="pygame"></ProgLang>
					<ProgLang name="sql"></ProgLang>
				</div>
				<h3><i class="fa-solid fa-compact-disc"></i> OS</h3>
				<div class="skill-wrapper">
					<ProgLang name="linux"></ProgLang>
					<ProgLang name="windows"></ProgLang>
					<ProgLang name="archlinux"></ProgLang>
					<ProgLang name="ubuntu"></ProgLang>
				</div>
				<h3><i class="fa-solid fa-screwdriver-wrench"></i> Tools</h3>
				<div class="skill-wrapper">
					<ProgLang name="arduino"></ProgLang>
					<ProgLang name="docker"></ProgLang>
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
			<div id="profile-experience">
				<h3>Experience</h3>
				<ul>
					<li>3+ years of programming</li>
					<li>2+ years builder, programmer and driver with VEX Robotics</li>
					<li>Internship at Philips Eindhoven</li>
					<li>Excellent social skills</li>
					<li>Scrum and team coordination</li>
					<li>6 years member of STEAM-club, a national known science club at my school</li>
				</ul>
				<h3>Achievements</h3>
				<ul>
					<li>2 time National Champion in VEX Robotics</li>
					<li>Competed at the World Championship in VEX Robotics in America</li>
				</ul>
			</div>
			<!-- -->
			<!-- education -->
			<!-- -->
			<div id="profile-education">
				<h3>Highschool</h3>
				<ul>
					<li>Highschool diploma in Industrial IT</li>
				</ul>
				<h3>University</h3>
				<ul>
					<li>1st year at Thomas More University of Applied Sciences</li>
					<li>Studying for a Bachelor in Applied Computer Science</li>
				</ul>
			</div>
			<!-- -->
			<!-- print -->
			<!-- -->
			<div id="profile-print">
				<a href="/misc/print-this-profile" >Print&nbsp;<i class="fa-solid fa-print"></i></a>
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
