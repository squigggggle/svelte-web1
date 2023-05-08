<script>
  import "../main.css";
  import Navigation from "$lib/navigation.svelte";
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
</style>
