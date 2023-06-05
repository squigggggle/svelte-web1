<script>
  import { fly } from 'svelte/transition';

  // https://stackoverflow.com/questions/74776399/how-to-hide-a-div-element-when-scrolling-up-from-any-part-of-the-page-the-svelte
  let y;
	let newY = [];
  
  $: oldY = newY[1];        //constantly updates current Y position when newY changes

  function updateY(){
    newY.push(y);           //pushes new Y position into array
    if(newY.length > 5) {   //used to change scroll up distance until nav will show again
        newY.shift();
    }
    newY=newY;              //assign to itself so svelte notices change
  }
</script>

<svelte:window on:scroll={updateY} bind:scrollY={y}/>
<div style="margin-top: 67px;" />
{#if oldY > y || y < 67}
  <nav transition:fly>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/random">2</a></li>
      <li><a href="/">3</a></li>
    </ul>
  </nav>
{/if}
<style>
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
