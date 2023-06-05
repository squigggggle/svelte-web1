<script>
    import { invalidate, invalidateAll } from '$app/navigation';


    const BASE_URL = "https://cataas.com/cat";
    export let data;
    let cat = data.cat;
    console.log(cat._id);
    let catID = cat._id;


    //this thing works but the variable doesn't update
    function rerunLoadFunction(){
        invalidateAll();
    }
</script>

<img src="{BASE_URL}/{catID}" alt= "Random cat">
<!-- <a href="/random" data-sveltekit-reload>test button</a> -->
<button on:click={rerunLoadFunction}>Update</button>