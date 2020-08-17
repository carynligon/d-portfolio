<template>
  <nav class="nav column container">
    <a href class="home-link column">👋 Derrick Ligon</a>
    <ul class="nav-links column">
      <li>
        <a href>Work</a>
      </li>
      <li>
        <a href>Resume</a>
      </li>
      <li>
        <a href>Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style>
.nav {
  --width: 12;
  align-items: center;
  display: flex;
  margin-top: 2.25rem;
}
.home-link {
  --width: 9;
  color: var(--black);
  font-weight: 600;
  text-decoration: none;
}
.nav-links {
  --width: 3;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
}
.nav-links li {
  margin: 0 1rem;
}
.nav-links li:first-of-type {
  margin-left: 0;
}
.nav-links a {
  color: var(--black);
  text-decoration: none;
}
</style>
