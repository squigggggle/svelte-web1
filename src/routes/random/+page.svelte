<script>
    import { invalidate, invalidateAll } from '$app/navigation';

    export let data;
    $: cat = data.cat;          //updates automatically when needed (when the update button is pressed)
    $: catID = cat._id;
    //this thing works but the variable doesn't update
    function rerunLoadFunction(){
        invalidateAll();  
    }
</script>

{#if data.status = 200}
    <img src="{data.BASE_URL}/cat/{catID}" alt= "Random cat">
{:else}
    <img src="loaf-square.jpg" alt="Default cat">
{/if}

<!-- <a href="/random" data-sveltekit-reload>test button</a> -->
<button on:click={rerunLoadFunction}>Update</button>