<script lang="ts">
	import './profile.css';
	import Container from '$lib/components/container/container.svelte';
</script>

<Container>
	<div id="profile-grid">
		<div id="profile-who" class="grid-flex">
			<img src="/images/projects/PLNM/logo.png" alt="" />
			<h3>Sem Van Broekhoven</h3>
			<p>Full Stack Software Developer</p>
		</div>
		<div id="profile-about" class="grid-flex">
			<p>
				I'm 18 years old and have found love in programming. I've been experimenting with technology
				from a young age. Currently I like to make projects with a variety of programming languages.
			</p>
		</div>
		<div id="profile-links">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="https://github.com/semerded" target="_blank"><i class="fa-brands fa-github"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="" target="_blank"><i class="fa-brands fa-stack-overflow"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="" target="_blank"><i class="fa-brands fa-steam"></i></a>
		</div>
		<div id="profile-experience">
        </div>
		<div id="profile-skills">
            <div class="skill">
                <div class="skill-name">HTML</div>
                <i class="fa-brands fa-html5"></i>
        </div>
        </div>
		<div id="profile-education"></div>
		<div id="profile-hobbies"></div>
		<div id="profile-print"></div>
		<div id="profile-save"></div>
		<div id="profile-projects"></div>
	</div>
</Container>
