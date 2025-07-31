<script lang="ts">
	export let visible: boolean = false;
	export let message: string = '';
	export let onClose: () => void = () => {};
</script>


	<div class="form-popup glossy-tile {visible ? 'visible' : ''}">
		<p>{message}</p>
		<button
			on:click={() => {
				visible = false;
				onClose();
			}}>OK</button
		>
	</div>


<style>
    .form-popup {
        transform: scale(0);
        transition: transform 500ms;

        &.visible {
            transform: scale(1);
            transition: transform 500ms;
        }
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 999999;

        width: clamp(100%, 400px, 600px);
        height: 50vh;

        p {
            font-size: 1.2rem;
            padding: 16px;
        }
        
    }
</style>
