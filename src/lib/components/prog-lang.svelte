<script lang="ts">
	export let name: string;
	export let size: number = 1;

	const languageData: Record<string, { deviconName: string; fullName: string; color: string }> = {
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
			color: '#f0db4f' // JS yellow
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
		}
	};
</script>

<span class="prog-lang" 
style="background-color: {languageData[name]['color']}; font-size: {size}rem">
	<i class="devicon-{languageData[name]['deviconName']}-plain"></i>
    <span>
        {languageData[name]['fullName']}
    </span>
</span>

<style>
	.prog-lang {
		padding: 4px 12px;
		margin: 5px 5px;
		border-radius: 10px;
		box-shadow: 0px 0px 24px 0px gray;
		display: flex;
		align-items: center;

		i {
			margin-right: 4px;
		}
	}
</style>
