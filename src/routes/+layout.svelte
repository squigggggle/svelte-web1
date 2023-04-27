<script>
  import "../main.css";
  import Navigation from "$lib/navigation.svelte";
  import Sidebar from "$lib/sidebar.svelte";
</script>

<!-- imported navigation component from the lib folder -->
<div>
  <Navigation />

  <main>
    <Sidebar>
      <slot />
    </Sidebar>
  </main>

  <footer>
    <p>insert text here</p>
  </footer>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    justify-content: center;
    /* flex: 1; */
  }
</style>
