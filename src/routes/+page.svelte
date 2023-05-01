<section>
  <div class="box1">
    <div>
      <h1>Testing</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
        eros, dapibus accumsan massa at, gravida feugiat nisi.
      </p>
    </div>
  </div>
  <div>
    <span>
      <img alt="Ninja in Loaf form" src="src/lib/loaf.jpg" />
    </span>
  </div>
</section>
<p>
  Maecenas egestas leo in dapibus molestie. Quisque ac ullamcorper ex, ut
  elementum mi. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Aenean ac gravida mauris. Praesent gravida, dolor sit amet
  iaculis ullamcorper, libero enim rutrum est, ac mollis nunc urna sed felis.
  Aliquam vitae justo tempor, tincidunt lacus eu, auctor turpis. Nam elementum
  urna nunc, sed ultricies tellus commodo sed. Donec mi leo, suscipit ut aliquam
  pulvinar, viverra non nisi. Duis et enim velit.
</p>

<p>
  In ac felis et purus tempor luctus sed eget massa. Proin orci magna, efficitur
  nec ante sit amet, vestibulum egestas ante. Proin et vehicula lacus. Fusce
  volutpat varius suscipit. Vestibulum malesuada orci vitae sapien tristique
  blandit. Nam efficitur turpis vel nisl dictum condimentum ac a lectus. Nulla
  sit amet velit eu sapien porttitor porta vitae at nulla. Praesent sed bibendum
  orci. Pellentesque tristique scelerisque cursus. Integer non lectus quis enim
  cursus blandit et in sem. Sed pharetra mi justo, vel pulvinar lorem
  condimentum eget. Nam elit libero, tincidunt at accumsan in, pharetra eu
  magna. Nunc sollicitudin ipsum at nunc convallis, vel ultricies lacus
  lobortis. Duis vulputate neque eget dignissim facilisis.
</p>
<p>
  Fusce nisi justo, imperdiet in accumsan non, porta eu tortor. Donec mi justo,
  accumsan in sem a, porttitor pulvinar quam. Etiam feugiat vel nisl nec
  vehicula. Nam velit ante, faucibus eget suscipit quis, sollicitudin aliquam
  ante. Morbi eu mauris id ipsum pellentesque aliquam. Nunc congue quam et urna
  dictum luctus. Donec libero mauris, fermentum pharetra sagittis at, fringilla
  id sem. Nullam elementum purus vitae finibus blandit. Mauris et mollis sapien.
  Sed placerat imperdiet euismod. Pellentesque habitant morbi tristique senectus
  et netus et malesuada fames ac turpis egestas. Proin fermentum orci a quam
  pellentesque volutpat. Morbi nec velit in nulla pretium lobortis ac in felis.
</p>
<p>
  Maecenas eu tincidunt mauris. Vivamus nec lacinia est. Vivamus at rutrum
  nulla. Fusce a volutpat enim. Donec hendrerit arcu eu sem tempus interdum eu
  at odio. Suspendisse accumsan, erat id mattis facilisis, ante dui tristique
  sapien, nec fringilla metus felis quis arcu. Suspendisse feugiat, libero non
  ultricies eleifend, ex dui porta est, quis vehicula diam massa id ante. Cras
  sapien diam, venenatis a sem eu, porta eleifend dui. Nullam ut tellus quam. In
  quis consequat tellus. Cras vel tristique dui. Cras id dapibus risus. Nulla id
  ex dui. Mauris tincidunt, arcu ultrices venenatis feugiat, metus ligula varius
  massa, in faucibus nunc dolor id diam. Quisque in quam quis elit pellentesque
  aliquam. Morbi lacinia urna risus, ac malesuada mauris pulvinar vel.
</p>

<style>
  h1, p {
    margin: 0;
    font-size: 6rem;
  }
  div.box1 p {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }

  span {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    flex-direction: row;
  }
  section div.box1 {
    display: flex;
    justify-content: center;
    flex: 1 1 0px;
    padding: 6rem;
  }
  section div.box1 div {
    max-width: 300px;
  }
  section div {
    flex: 1 1 200px;
  }
  img {
    object-fit: cover;
    position: absolute;
    width: inherit;
    height: inherit;
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column-reverse;
    }
  }
</style>
