<script>
  import "../main.css";
  import Navigation from "$lib/navigation.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<!-- imported navigation component from the lib folder -->

<Navigation />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    margin-top: 67px;
  }
</style>
