<template>
  <nav class="nav column container">
    <a href class="home-link column"><span>👋</span>Derrick Ligon</a>
    <ul class="nav-links column">
      <li>
        <a href="/">Work</a>
      </li>
      <li>
        <a href>Resume</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  --width: 12;
  align-items: center;
  display: flex;
  margin-top: var(--spacer-xl);
}
.home-link {
  --width: 9;
  color: var(--black);
  font-size: var(--font-size-body-lg);
  font-weight: 600;
  text-decoration: none;
}
.home-link span {
  margin-right: 8px;
}
.nav-links {
  --width: 3;
  display: flex;
  justify-content: flex-end;
}
.nav-links li {
  margin: 0 0 0 2rem;
}
.nav-links li:first-of-type {
  margin-left: 0;
}
.nav-links a {
  color: #9e9e9e;
  text-decoration: none;
}
.nav-links a:hover {
  color: var(--black);
}
</style>
