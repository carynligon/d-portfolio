<template>
  <div class="container">
    <slot name="container"></slot>
  </div>
</template>

<script>
export default {
  name: 'PageBase'
}
</script>

<style>
.title {
  font-weight: normal;
  margin: 5.625rem 0 3.0625rem 0;
  padding-left: 0;
  --width: 10;
}
.title h1 {
  font-size: var(--font-size-h1);
  font-weight: normal;
  line-height: 52px;
}
.description h2 {
  font-size: var(--font-size-h2);
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 1.5rem;
}
.project-info p {
  font-size: var(--font-size-body);
}
h3 {
  font-size: var(--font-size-h3);
  font-weight: normal;
  margin-bottom: 1.125rem;
}
.spacer {
  --width: 1;
}
.description,
.role-description,
.content-left,
.content-right {
  --width: 5;
}
.teammates-heading {
  margin-top: 2rem;
}
.teammates {
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
}
.current-role-text {
  margin-bottom: 2.25rem;
}
.role-description ul {
  list-style-type: none;
  padding: 0;
}
.quote {
  font-size: var(--font-size-h1);
}
.quote:first-letter,
.quote::first-letter {
  margin-left: calc(var(--font-size-body) * -1);
}
.content-left {
  margin-top: 3.875rem;
}
</style>
