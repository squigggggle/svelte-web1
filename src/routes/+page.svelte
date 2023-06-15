<script>
    import Panels from "$lib/panels.svelte";
</script>

<!-- css variable to change direction of panel flow -->
<Panels --direction="row">
    <h2 slot="header">This cat is so loaf right now</h2>
    <p slot="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        arcueros, dapibus accumsan massa at, gravida feugiat nisi.
    </p>
    <img slot="image" src="loaf-square.jpg" alt="loaf" />
</Panels>
<Panels --direction="row-reverse">
    <h2 slot="header">test</h2>
    <p slot="paragraph">test 2</p>
    <img slot="image" src="juno-loaf-square.jpg" alt="juno loaf" />
</Panels>
