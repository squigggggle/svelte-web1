<script>
  // https://svelte.dev/tutorial/inline-styles
  let backgroundOpacity = 0;
  // change text colour based on opacity for readability
  $: colour = backgroundOpacity < 0.6 ? '#000' : '#fff';
</script>

<!-- try to figure out nav hide on scroll and opacity change -->
<!-- https://svelte.dev/repl/051cd352ce284d15b55c91c8b30fa32f?version=3.16.7 -->
<!-- https://stackoverflow.com/questions/67943713/svelte-hide-and-show-nav-on-scroll -->

<nav style="color: {colour}; --opacity: {backgroundOpacity};">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">2</a></li>
    <li><a href="/">3</a></li>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, var(--opacity));
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
