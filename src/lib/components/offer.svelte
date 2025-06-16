<script lang="ts">
    export let title: string;
    export let price: number;
</script>

<div class="offer">
    <h2>{title}</h2>
    <span class="price">Starting from €{price}</span>
    <slot />
    <span class="icon-holder">
        <img src="/icons/offers/single-page-website.svg" alt="icon">
    </span>
</div>

<style>
    .offer {

        overflow: hidden;
        position: relative;
        width: 400px;
        height: 600px;
        background-color: var(--card);
        border-radius: 8px;
        padding: 16px;

        .price {
            background-color: var(--secondary);
            width: 100%;
            padding: 8px;
            border-radius: 8px;
        }

        .icon-holder {
        transition: 500ms;

            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 0px;
            right: 0px;
            border: var(--text) 1px solid;
            width: 200px;
            height: 300px;
            border-radius: 8px;
            background-color: var(--text);
            transform: rotateZ(-20deg) translate(30px, 30px);

             img {
                 width: 200px;
                 height: 200px;
             }
        }

        &:hover {
            .icon-holder {
                transition: 500ms;
                transform: rotateZ(-5deg) translate(10px, 30px);

            }
        }
    }
</style>