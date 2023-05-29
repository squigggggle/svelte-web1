<section>
  <div class="panel">
    <div class="text">
      <h1><slot name="header"></slot></h1>
      <p><slot name="paragraph"></slot></p>
    </div>
  </div>
  <div class="img"><slot name="image"></slot></div>
</section>

<style>
  /* panels go across the page in a wide viewport */
  section {
    display: flex;
    flex-direction: row;
  }
  /* sets one panel to be half the width of the container
  box sizing ensures padding is included in width calculation */
  .panel {
    display: flex;
    justify-content: center;
    flex: 1 1 50%;
    padding: 6rem;
    align-items: center;
    box-sizing: border-box;
  }
  .text {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 100%;
    font-size: 2rem;
  }
  h1, p {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .img {
    flex: 1 1 50%;
    display: flex;
    
  }
  /* any img elements that are children of .img will get this style (e.g. imported from slot) */
  .img :global(img) {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    /* panels go down the page (in reverse for image above text) */
    section {
      flex-direction: column-reverse;
    }
    /* adjusted sizing for mobile-sized viewport */
    .panel {
      padding: 4.5rem;
    }
  }
</style>