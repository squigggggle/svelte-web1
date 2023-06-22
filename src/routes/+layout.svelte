<script>
    import "../main.css";
    import Navigation from "$lib/navigation.svelte";
    import Footer from "$lib/footer.svelte";

    import { fade } from "svelte/transition";

    let visible = false;
    let hidden = "auto";
</script>

{#if visible}
        <div transition:fade />
{/if}

<main>
    <Navigation bind:visible/>
    <slot />
    <Footer />
</main>

<style>

    :root {
        overflow: var(--hidden);
    }
    main {
        /* fill in space behind nav bar */
        padding-top: 67px;
        display: flex;
        flex-direction: column;
        min-height: inherit;
        overflow: hidden;
    }

    div {
        height: 100vh;
        position: relative;
        z-index: 2;
        background-color: black;
        transition: all 0.5s;
    }
</style>
