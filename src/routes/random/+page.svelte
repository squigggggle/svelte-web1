<script>
    import { invalidateAll } from '$app/navigation';

    export let data;

    function rerunLoadFunction(){
        invalidateAll();                //calls load functions related to this page again
    }
</script>
<div>
    {#if data.status = 200}                 <!--if fetch is successful (code 200) show the image-->
        <img src="{data.BASE_URL}/{data.cat}" alt= "Random cat">
    {:else}                                 <!--otherwise show default image-->
        <img src="loaf-square.jpg" alt="Default cat">
        <p>Error: {data.status}</p>
    {/if}
    
    <button on:click={rerunLoadFunction}>Update</button>
</div>


<!-- try this https://stackoverflow.com/questions/90178/make-a-div-fill-the-height-of-the-remaining-screen-space -->
<!-- want to make the div where the image goes fill up all empty space -->
<style>
    div {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: max-content;
    }

    button {
        margin: 1rem 0 0;
        padding: 1rem;
        background-color: greenyellow;
        border: none;
        border-radius: 1rem;
    }
</style>