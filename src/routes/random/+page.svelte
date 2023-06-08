<script>
    import { invalidateAll } from '$app/navigation';

    export let data;

    function rerunLoadFunction(){
        invalidateAll();                //calls load functions related to this page again
    }
</script>

{#if data.status = 200}                 <!--if fetch is successful (code 200) show the image-->
    <img src="{data.BASE_URL}/{data.cat}" alt= "Random cat">
{:else}                                 <!--otherwise show default image-->
    <img src="loaf-square.jpg" alt="Default cat">
    <p>Error: {data.status}</p>
{/if}

<button on:click={rerunLoadFunction}>Update</button>