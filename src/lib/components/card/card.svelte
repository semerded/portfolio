<script lang="ts">
    import './card.css';

    export let title: string;
    export let description: string;
    export let image: string;
</script>

<div class="card">
    <div class="card-image">
        <img src={image} alt={title} />
    </div>
    <div class="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>