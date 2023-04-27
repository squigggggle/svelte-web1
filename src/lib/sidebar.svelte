<div>
    <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 2em;
    grid-column: 2/3;
    padding: 0 1em;
    min-width: 768px;
    max-width: 60vw;
  }

  /* @media (min-width: 768px) {
    div {
      padding: 0;
    }
  } */
</style>
