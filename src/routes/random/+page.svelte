<script>
    import { invalidateAll } from "$app/navigation";

    export let data;

    function rerunLoadFunction() {
        invalidateAll(); //calls load functions related to this page again
    }
</script>

<div class = "container">
    {#if (data.status = 200)}
        <!--if fetch is successful (code 200) show the image-->
        <div class = "wrapper">
            <img src="{data.BASE_URL}/{data.cat}" alt="Random cat" />
        </div>
    {:else}
        <!--otherwise show default image-->
        <div class = "wrapper"> 
            <img src="loaf-square.jpg" alt="Default cat" />
            <p>Error: {data.status}</p>
        </div>
    {/if}
    <div class = "wrapper">    
        <button on:click={rerunLoadFunction}>Update</button>
    </div>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 1 auto;
    }

    /* used to keep the button at the bottom of the container, and the image in centre of the leftover space */
    .wrapper {
        margin-top: auto;
    }

    img {
        padding: 0 2rem;
        object-fit: contain;
        max-width: 100%;
        max-height: fit-content;
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
