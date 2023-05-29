<script>
  import Panels from "$lib/panels.svelte";
</script>

<Panels>
  <h1 slot = "header">
    This cat is so loaf right now
  </h1>
  <p slot = "paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcueros, dapibus accumsan massa at, gravida feugiat nisi.
  </p>
  <img slot = "image" src = "loaf-square.jpg" alt = "loaf"/>
</Panels>