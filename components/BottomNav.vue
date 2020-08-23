<template>
  <nav class="bottom-nav container">
    <ul class="bottom-nav-links">
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="/cloud-pak" v-bind:class="{ active: active === 'cloudPak' }"
          >Cloud Pak for Security</a
        >
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a
          href="/experience-guide"
          v-bind:class="{ active: active === 'experienceGuide' }"
          >Experience Guide</a
        >
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a
          href="/accessibility"
          v-bind:class="{ active: active === 'accessibility' }"
          >IBM Accessibility Handbook</a
        >
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="/other" v-bind:class="{ active: active === 'other' }"
          >Other Work</a
        >
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a
          href="/illustration"
          v-bind:class="{ active: active === 'illustration' }"
          >Illustration</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    active: { type: String }
  }
}
</script>

<style>
.bottom-nav-links {
  display: flex;
  font-weight: 400;
  margin-top: 5rem;
  padding: 0;
  transition: 150ms color cubic-bezier(0.4, 0, 0.2, 1);
}
.bottom-nav-links a {
  color: var(--dark-gray);
}
.bottom-nav-links a:hover {
  color: var(--black);
  text-decoration: none;
}
.bottom-nav-links a.active {
  color: var(--black);
}
.bottom-nav-links span {
  color: var(--dark-gray);
  margin: 0 1rem;
}
</style>
