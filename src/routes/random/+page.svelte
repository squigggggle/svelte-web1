<script>
    import { invalidateAll } from "$app/navigation";

    export let data;

    function rerunLoadFunction() {
        invalidateAll(); //calls load functions related to this page again
    }
</script>

<div>
    {#if (data.status = 200)}
        <!--if fetch is successful (code 200) show the image-->
        <img src="{data.BASE_URL}/{data.cat}" alt="Random cat" />
    {:else}
        <!--otherwise show default image-->
        <img src="loaf-square.jpg" alt="Default cat" />
        <p>Error: {data.status}</p>
    {/if}

    <button on:click={rerunLoadFunction}>Update</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 1 auto;
    }
    img {
        flex: 1 1 auto;
    }

    button {
        margin: 1rem 0 0;
        padding: 1rem;
        background-color: #adff2f;
        border: none;
        border-radius: 1rem;
        transition: 0.5s;
    }

    button:hover {
        background-color: #98e02c;
    }
</style>
