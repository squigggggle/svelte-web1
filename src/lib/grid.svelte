<div class="grid">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5fr;
  }

  .content {
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    padding: 0 1em;
  }

  

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 3fr 1fr;
    }

    .content {
      padding: 0;
    }
  }
</style>
