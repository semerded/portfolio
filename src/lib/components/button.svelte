<script lang="ts">
	export let href: string;
	export let newTab: boolean = false;
	export let primary: boolean = false;
</script>

<a
	{href}
	target={newTab ? '_blank' : ''}
	class="button"
	class:primary
	rel="noopener noreferrer"
>
	<span><slot /></span>
</a>

<style>
	a.button {
		transition: box-shadow 400ms;
		min-width: 200px;
		min-height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		padding: 8px;
		margin: 8px;
		background-color: var(--secondary);
		color: white;
		text-decoration: none;
		font-weight: 600;

		> span {
			transition: transform 400ms;
		}

		box-shadow: 2px 2px 12px black;

		&.primary {
			background-color: var(--primary);
		}

		&:hover {
			transition: box-shadow 400ms;
			box-shadow: 0 0 12px var(--secondary);
		}

		&:hover > span {
			transition: transform 400ms;
			transform: scale(1.1);
		}

		&.primary:hover {
			box-shadow: 0 0 12px var(--primary);
		}
	}
</style>
