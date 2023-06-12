<script>
  import "../main.css";
  import Navigation from "$lib/navigation.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<Navigation />

<main>
  <slot />
  <Footer />
</main>



<style>
  main {
    /* fill in space behind nav bar */
    padding-top: 67px; 
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: inherit;
  }
</style>
