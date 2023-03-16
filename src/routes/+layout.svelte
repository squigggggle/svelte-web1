<script>
    import '../main.css';
    import Navigation from '$lib/navigation.svelte';
</script>

<!-- imported navigation component from the lib folder -->
<div>
    <Navigation />

    <main>
        <slot />
    </main>

    <footer>

    </footer>
</div>

<style>
    div{
        display:flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>