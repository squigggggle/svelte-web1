<script>
    import "../main.css";
    import Navigation from "$lib/navigation.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<!-- navigation outside so it gets covered by the fade animation -->
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
        min-height: inherit;
    }
</style>
