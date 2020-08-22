<template>
  <nav class="footer-nav column container">
    <div class="coolest-person-ever column">
      👩‍💻 Website built by
      <a href="https://carynligon.com" target="_blank">Caryn Ligon</a>
    </div>
    <ul class="column social-links">
      <li>
        <a>
          <img alt="twitter logo and link" src="~/assets/svgs/twitter.svg" />
        </a>
      </li>
      <li>
        <a>
          <img alt="LinkedIn logo and link" src="~/assets/svgs/linkedin.svg" />
        </a>
      </li>
      <li>
        <a>
          <img alt="Medium logo and link" src="~/assets/svgs/medium.svg" />
        </a>
      </li>
      <li>
        <a>
          <img alt="Dribbble logo and link" src="~/assets/svgs/dribbble.svg" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.footer-nav {
  --width: 12;
  align-items: center;
  margin-top: 7.5rem;
  margin-bottom: var(--spacer-xl);
  padding-left: 0;
}
.coolest-person-ever {
  --width: 10;
}
.coolest-person-ever a {
  text-decoration: none;
}
.social-links {
  --width: 2;
  display: flex;
}
.social-links li {
  margin: 0 var(--spacer-xs);
}
.social-links li:first-of-type {
  margin-left: 0;
}
.social-links img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
