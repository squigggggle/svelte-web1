<script>
  import "../main.css";
  import Navigation from "$lib/navigation.svelte";
  import Sidebar from "$lib/sidebar.svelte";
</script>

<!-- imported navigation component from the lib folder -->

<Navigation />

<main>
  <slot />
</main>

<footer>
  <p>insert text here</p>
</footer>

<style>
  main {
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
