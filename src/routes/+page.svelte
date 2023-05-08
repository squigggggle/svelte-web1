<section>
  <div class="panel">
    <div class="text">
      <h1>This cat is so loaf right now</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
        eros, dapibus accumsan massa at, gravida feugiat nisi.
      </p>
    </div>
  </div>
  <div class="img">
    <img alt="Ninja in Loaf form" src="src/lib/loaf-square.jpg" />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
  }
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
  .img {
    flex: 1 1 50%;
    display: flex;
  }
  img {
    position: relative;
    /* box-sizing: border-box; */
    /* margin: auto; */
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    section {
      flex-direction: column-reverse;
    }
    .panel {
      padding: 4.5rem;
      font-size: 4.8rem;
    }
  }
</style>
