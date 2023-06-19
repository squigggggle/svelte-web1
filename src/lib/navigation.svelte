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
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  //fades div in and fade out after sleep time
  let visible = false;
  function toggleDiv(){
    visible = true;
    sleep(1000).then(() => visible = false)
  }
</script>

{#if visible}
<div transition:fade></div>
{/if}
<svelte:window on:scroll={updateY} bind:scrollY={y} />
{#if oldY > y || y < 67}
  <nav transition:fly>
    <ul>
      <li><a on:click={toggleDiv} href="/">Home</a></li>
      <li><a on:click={toggleDiv} href="/random">Random</a></li>
    </ul>
  </nav>
{/if}

<style>
  /* this doesn't even work yet */
  :root {
    overflow: var(--hideScroll);
  }

  nav {
    position: fixed;
    top: 0;
    background: white;
    width: 100%;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 2rem 0;
    justify-content: space-evenly;
  }

  div {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: black;
    transition: all 0.5s;
  }
</style>