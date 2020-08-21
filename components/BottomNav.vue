<template>
  <nav class="bottom-nav">
    <ul class="bottom-nav-links">
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="/cloud-pak" v-bind:class="{active: active === 'cloudPak'}">Cloud Pak for Security</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a
          href="/experience-guide"
          v-bind:class="{active: active === 'experienceGuide'}"
        >Experience Guide</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a
          href="/accessibility"
          v-bind:class="{active: active === 'accessibility'}"
        >IBM Accessibility Handbook</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="/other" v-bind:class="{active: active === 'otherWork'}">Other Work</a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="/illustration" v-bind:class="{active: active === 'illustration'}">Illustration</a>
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
  list-style-type: none;
  margin-top: 2.5rem;
  padding: 0;
}
.bottom-nav-links a {
  color: var(--black);
}
.bottom-nav-links a.active {
  font-weight: 600;
}
.bottom-nav-links span {
  margin: 0 1rem;
}
</style>