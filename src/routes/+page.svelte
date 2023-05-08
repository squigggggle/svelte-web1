<section>
  <div class="box1">
    <div>
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
  h1 {
    margin: 0;
    font-size: 6rem;
  }
  div.box1 p {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }

  section {
    display: flex;
    flex-direction: row;
  }
  section div.box1 {
    display: flex;
    justify-content: center;
    flex: 1 1 50%;
    padding: 6rem;
    align-items: center;
    box-sizing: border-box;
    }
  section div.box1 div{
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 100%;
  }

  div.img {
    flex: 1 1 50%;
    display: flex;
  }
  img {
    position: relative;
    box-sizing: border-box;
    margin: auto;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column-reverse;
    }
    section div.box1 {
      padding: 4.5rem;
      font-size: 4.8rem;
    }
  }
</style>
