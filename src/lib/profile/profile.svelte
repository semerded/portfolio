<script lang="ts">
	import './profile.css';
	import { t, json } from 'svelte-i18n';
	import { get } from 'svelte/store';
	import Container from '$lib/components/container/container.svelte';
	import ProgLang from '$lib/components/prog-lang.svelte';
	import { intersectionObserver } from '$lib/animate-on-scroll';
	import { onMount } from 'svelte';

	onMount(() => {
		intersectionObserver?.observe(document.getElementById('profile-who-image-container')!);
	});

	$: experienceContent = $json('profile.experience.content') as string[];
	$: achievementsContent = $json('profile.achievements.content') as string[];
	$: hsContent = $json('profile.hs.content') as string[];
	$: uniContent = $json('profile.uni.content') as string[];
</script>

<Container minHeight="100svh" id="my-profile">
	<div id="profile-container">
		<div class="profile-column">
			<!-- -->
			<!-- header -->
			<!-- -->
			<div id="profile-title" class="grid-flex">
				<h3>{$t('profile.title')}</h3>
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
					{$t('profile.description')}
				</p>
			</div>
		</div>
		<div class="profile-column">
			<div id="profile-skills">
				<!-- -->
				<!-- skills -->
				<!-- -->
				<h3><i class="fa-solid fa-star"></i> {$t('profile.tools.fav')}</h3>
				<div class="skill-wrapper">
					<ProgLang name="py"></ProgLang>
					<ProgLang name="sql"></ProgLang>
					<ProgLang name="flutter"></ProgLang>
					<ProgLang name="dart"></ProgLang>
					<ProgLang name="svelte"></ProgLang>
					<ProgLang name="ts"></ProgLang>
				</div>

				<h3><i class="fa-solid fa-code"></i> {$t('profile.tools.prog')}</h3>
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
				<h3><i class="fa-solid fa-compact-disc"></i> {$t('profile.tools.os')}</h3>
				<div class="skill-wrapper">
					<ProgLang name="linux"></ProgLang>
					<ProgLang name="windows"></ProgLang>
					<ProgLang name="archlinux"></ProgLang>
					<ProgLang name="ubuntu"></ProgLang>
				</div>
				<h3><i class="fa-solid fa-screwdriver-wrench"></i> {$t('profile.tools.tools')}</h3>
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
				<h3>{$t('profile.experience.title')}</h3>
				<ul>
					{#each experienceContent as content}
						<li>{content}</li>
					{/each}
				</ul>
				<h3>{$t('profile.achievements.title')}</h3>
				<ul>
					{#each achievementsContent as content}
						<li>{content}</li>
					{/each}
				</ul>
			</div>
			<!-- -->
			<!-- education -->
			<!-- -->
			<div id="profile-education">
				<h3>{$t('profile.hs.title')}</h3>
				<ul>
					{#each hsContent as content}
						<li>{content}</li>
					{/each}
				</ul>
				<h3>{$t('profile.uni.title')}</h3>
				<ul>
					{#each uniContent as content}
						<li>{content}</li>
					{/each}
				</ul>
			</div>
			<!-- -->
			<!-- print -->
			<!-- -->
			<div id="profile-print">
				<a href="/misc/print-this-profile">Print&nbsp;<i class="fa-solid fa-print"></i></a>
			</div>
			<!-- -->
			<!-- save -->
			<!-- -->
			<div id="profile-save">
				<button>{$t('profile.save')}&nbsp;<i class="fa-solid fa-download"></i></button>
			</div>
		</div>
	</div>
</Container>
