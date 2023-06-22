<script>
    import { fly, fade } from "svelte/transition";

    //NAV BAR FADE IN AND OUT ON SCROLL
    // https://stackoverflow.com/questions/74776399/how-to-hide-a-div-element-when-scrolling-up-from-any-part-of-the-page-the-svelte
    let y;
    let newY = [];

    $: oldY = newY[1]; //constantly updates current Y position when newY changes

    function updateY() {
        newY.push(y); //pushes new Y position into array
        if (newY.length > 5) {
            //used to change scroll up distance until nav will show again
            newY.shift();
        }
        newY = newY; //assign to itself so svelte notices change
    }

    //FADE IN AND OUT BETWEEN PAGES DIV
    //timeout so the transition can fade back in
    // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    //fades div in and fade out after sleep time
    let visible = false;
    function toggleDiv() {
        visible = true;
        sleep(1000).then(() => (visible = false));
    }
</script>

<!-- shows div when link is clicked and hides after toggleDiv() function runs -->
{#if visible}
    <div transition:fade />
{/if}
<!-- used to track last known scroll position and current scroll position to show and hide the nav bar -->
<svelte:window on:scroll={updateY} bind:scrollY={y} />
<!-- transition the nav if y is more than last position (scroll down) or less than 67 (so it appears on page load by default)  -->
{#if oldY > y || y < 67}
    <nav transition:fly>
        <ul>
            <!-- run the toggleDiv() function on the click of a link to run the fade animation -->
            <li><a on:click={toggleDiv} href="/">Home</a></li>
            <li><a on:click={toggleDiv} href="/random">Random</a></li>
        </ul>
    </nav>
{/if}

<style>
    /* stick the nav bar to the top of the page */
    nav {
        position: fixed;
        top: 0;
        background: white;
        width: 100%;
    }
    /* space the links evenly across the nav bar */
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 2rem 0;
        justify-content: space-evenly;
    }
    /* black div that covers entire screen when toggleDiv() is called*/
    div {
        height: 100vh;
        position: relative;
        z-index: 1;
        background-color: black;
    }
</style>
