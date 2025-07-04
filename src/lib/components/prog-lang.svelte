<script lang="ts">
	export let name: string;
	export let size: number = 1;
	export let boxShadow: boolean = false;

	const languageData: Record<string, { deviconName: string; fullName: string; color: string; darkText?: boolean }> = {
		html: {
			deviconName: 'html5',
			fullName: 'HTML',
			color: '#f06529' // HTML5 orange
		},
		css: {
			deviconName: 'css3',
			fullName: 'CSS',
			color: '#2965f1' // CSS3 blue
		},
		js: {
			deviconName: 'javascript',
			fullName: 'JavaScript',
			color: '#f0db4f', // JS yellow
			darkText: true
		},
		py: {
			deviconName: 'python',
			fullName: 'Python',
			color: '#3572a5' // Python blue
		},
		java: {
			deviconName: 'java',
			fullName: 'Java',
			color: '#b07219' // Java brown-orange
		},
		cpp: {
			deviconName: 'cplusplus',
			fullName: 'C++',
			color: '#f34b7d' // C++ pink
		},
		c: {
			deviconName: 'c',
			fullName: 'C',
			color: '#555555' // C gray
		},
		cs: {
			deviconName: 'csharp',
			fullName: 'C#',
			color: '#178600' // C# green
		},
		php: {
			deviconName: 'php',
			fullName: 'PHP',
			color: '#4f5d95' // PHP purple
		},
		go: {
			deviconName: 'go',
			fullName: 'Go',
			color: '#00add8' // Go cyan
		},
		dart: {
			deviconName: 'dart',
			fullName: 'Dart',
			color: '#00b4ab' // Dart teal
		},
		flutter: {
			deviconName: 'flutter',
			fullName: 'Flutter',
			color: '#02569b' // Flutter dark blue
		},
		sql: {
			deviconName: 'mysql',
			fullName: 'SQL',
			color: '#e38c00' // MySQL orange
		},
		arduino: {
			deviconName: 'arduino',
			fullName: 'Arduino',
			color: '#00979d' // Arduino teal
		},
		angular: {
			deviconName: 'angularjs', // Devicon uses 'angularjs' for Angular
			fullName: 'Angular',
			color: '#DD0031' // Angular red
		},
		svelte: {
			deviconName: 'svelte',
			fullName: 'Svelte',
			color: '#FF3E00' // Svelte orange
		},
		ts: {
			deviconName: 'typescript',
			fullName: 'TypeScript',
			color: '#3178C6' // TypeScript blue
		},
		docker: {
			deviconName: 'docker',
			fullName: 'Docker',
			color: '#2496ED' // Docker blue
		},
		thymeleaf: {
			deviconName: 'spring', // No Thymeleaf icon in Devicon, using Spring as closest
			fullName: 'Thymeleaf',
			color: '#005F0F' // Thymeleaf green
		},
		pygame: {
			deviconName: 'python', // No Pygame icon, using Python
			fullName: 'Pygame',
			color: '#3572A5' // Python blue
		},
		openGL: {
			deviconName: 'opengl', // No OpenGL icon in Devicon
			fullName: 'OpenGL',
			color: '#5586A4' // OpenGL blue
		},
		vscode: {
			deviconName: 'vscode',
			fullName: 'VS Code',
			color: '#007ACC' // VS Code blue
		},
		raspberrypi: {
			deviconName: 'raspberrypi',
			fullName: 'Raspberry Pi',
			color: '#C51A4A' // Raspberry Pi red
		},
		linux: {
			deviconName: 'linux',
			fullName: 'Linux',
			color: '#FCC624', // Linux yellow
			darkText: true
		},
		windows: {
			deviconName: 'windows11',
			fullName: 'Windows',
			color: '#0078D6' // Windows blue
		},
		archlinux: {
			deviconName: 'archlinux',
			fullName: 'Arch Linux',
			color: '#1793D1' // Arch Linux blue
		},
		ubuntu: {
			deviconName: 'ubuntu',
			fullName: 'Ubuntu',
			color: '#E95420' // Ubuntu orange
		},
		unknown: {
			deviconName: 'bub',
			fullName: 'Unknown',
			color: 'red'
		}
	};

	if (!languageData[name]) {
		console.error('Given prog lang not in list: ', name);
		name = 'unknown';
	}
	let bgColor = languageData[name]['color'];
	let color = "darkText" in languageData[name] ? "black" : "white"; 
	let iconName = languageData[name]['deviconName'];
	let fullName = languageData[name]['fullName'];

</script>

<span
	class="prog-lang unselectable"
	class:box-shadow={boxShadow}
	style="background-color: {bgColor}; color: {color}; font-size: {size}rem"
>
	<i class="devicon-{iconName}-plain"></i>
	<span>
		{fullName}
	</span>
</span>

<style>
	.prog-lang {
		padding: 4px 12px;
		margin: 5px 5px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		width: fit-content;

		&.box-shadow {
			box-shadow: 0px 0px 24px 0px gray;
		}

		i {
			margin-right: 4px;
		}
	}
</style>
