<script>
    import Panels from "$lib/panels.svelte";
</script>

<div>
	<h1>Hello,</h1>
	<h2>these are my cats</h2>
	<p>On a website</p>
</div>
<!-- css variable to change direction of panel flow -->
<Panels --direction="row">
    <h2 slot="header">Ninja</h2>
    <p slot="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        arcueros, dapibus accumsan massa at, gravida feugiat nisi.
    </p>
    <img slot="image" src="loaf-square.jpg" alt="Ninja in loaf position" />
</Panels>
<Panels --direction="row-reverse">
    <h2 slot="header">Juno</h2>
    <p slot="paragraph">test 2</p>
    <img slot="image" src="juno-loaf-square.jpg" alt="Juno in loaf position" />
</Panels>
<Panels>
	<h2 slot="header">Oreo</h2>
    <p slot="paragraph">test 2</p>
    <img slot="image" src="oreo-square.jpg" alt="Oreo" />
</Panels>

<style>
	div {
		display: flex;
		padding: 6rem;
		flex-direction: column;
		
	}
	@media (max-width: 768px) {
        /* adjusted sizing for mobile-sized viewport */
        div {
            padding: 4.5rem;
        }
    }
</style>