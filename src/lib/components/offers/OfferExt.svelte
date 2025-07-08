<script lang="ts">
	export let title: string;
	export let price: string;
	export let description: string;
	export let why: { [key: string]: string };
	export let perfectFor: string;
	export let slot: string;
</script>

<section class="offerExt glossy-tile">
	<div>
		<h3>{title}</h3>
		<span class="price">{price}</span>
		<p>{description}</p>
		<p>{perfectFor}</p>
	</div>
	<div>
		<ul>
			{#each Object.entries(why) as [key, value]}
				<li>
					{key}<br />
					<span>&#8618; {value}</span>
				</li>
			{/each}
		</ul>
		<p>{slot}</p>
	</div>
</section>

<style>
	.offerExt {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;

		> div {
			width: 48%;
			margin: 1%;

			li {
				span {
                    margin-left: 1rem;
				}
			}
		}
	}
</style>
