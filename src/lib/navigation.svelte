<script>
  import { fly } from 'svelte/transition';

  // https://svelte.dev/tutorial/inline-styles
  // let backgroundOpacity = 0;
  // change text colour based on opacity for readability
  // $: colour = backgroundOpacity < 0.6 ? '#000' : '#fff';


  // https://stackoverflow.com/questions/74776399/how-to-hide-a-div-element-when-scrolling-up-from-any-part-of-the-page-the-svelte
  let y;
	let newY = [];
  //constantly updates current Y position when newY changes
  $: oldY = newY[1];
  //pushes new Y position into array 
  function updateY(){
    newY.push(y);
    if(newY.length > 5) {
        newY.shift();
    }
    newY=newY;
  }
</script>

<!-- try to figure out nav hide on scroll and opacity change -->
<!-- https://svelte.dev/repl/051cd352ce284d15b55c91c8b30fa32f?version=3.16.7 -->
<!-- https://stackoverflow.com/questions/67943713/svelte-hide-and-show-nav-on-scroll -->

<svelte:window on:scroll={updateY} bind:scrollY={y}/>
<div style="margin-top: 67px;"></div>
{#if oldY > y || y < 67}
  <nav transition:fly>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">2</a></li>
      <li><a href="/">3</a></li>
    </ul>
  </nav>
{/if}
<style>
  nav {
    position: fixed;
    top: 0;
    /* background: rgba(255, 255, 255, var(--opacity)); */
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
  a {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: black;
    text-decoration: none;
    transition: all 0.5s;
  }
  a:hover {
    color: rgb(91, 222, 126);
  }
</style>
