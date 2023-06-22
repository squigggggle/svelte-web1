<footer>
    <!-- github icon and repository link -->
    <a href="https://github.com/squigggggle/svelte-web1">
        <i class="fa-brands fa-github" />
        <p>Website Repository</p>
    </a>

    <p>Jack Young 2023</p>
</footer>

<style>
    /* space between so the content is on each side of the footer */
    footer {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    /* line the github icon up with the description beside it */
    a {
        display: flex;
        align-items: center;
    }

    /* spacing around the github icon so it doesn't look cramped */
    i {
        padding: 10px;
    }
</style>
