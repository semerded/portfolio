<script lang="ts">
	export let href: string | null = null;
	export let newTab: boolean = false;
	export let primary: boolean = false;
	export let flex: boolean = false;
</script>

{#if href}
	<a
		{href}
		target={newTab ? '_blank' : ''}
		id={$$restProps.id}
		class="button {primary ? 'primary' : ''} {$$props.class}"
		rel="noopener noreferrer"
		style="width: {flex ? '100%' : 'fit-content'}; {$$restProps.style}"
	>
		<span><slot /></span>
	</a>
{:else}
	<button
		id={$$restProps.id}
		class="button {primary ? 'primary' : ''} {$$props.class}"
		style="width: {flex ? '100%' : 'fit-content'}; {$$restProps.style}"
	>
		<span><slot /></span>
	</button>
{/if}

<style>
	.button {
		all: unset;
		transition: box-shadow 400ms;
		min-width: 200px;
		min-height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		padding: 8px 1.2rem;
		margin: 8px;
		cursor: pointer;
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
