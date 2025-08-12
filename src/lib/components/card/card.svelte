<script lang="ts">
	import './card.css';

	export let title: string;
	export let description: string;
	export let icon: string;
	export let maxWidth: string = '400px';
</script>

<button
	class="card"
	style="max-width: {maxWidth}"
>
	<div>
		<div class="card-icon">
			<i style="--size: {maxWidth};" class="fa-solid {icon}"></i>
		</div>
		<div class="card-content">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</button>
