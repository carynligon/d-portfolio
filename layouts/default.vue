<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
body {
  /* Fonts */
  font-family: 'Graphik Web';
  --font-size-h1: 2.625rem;
  --font-size-h2: 2.125rem;
  --font-size-h3: 1.5rem;
  --font-size-body: 1.125rem;
  --font-size-body-lg: 1.25rem;
  --font-size-body-sm: 1rem;

  /* Spacing */
  --spacer-3xl: 3.5rem;
  --spacer-2xl: 3rem;
  --spacer-xl: 2.25rem;
  --spacer-lg: 2rem;
  --spacer-md: 1.5rem;
  --spacer-sm: 1rem;
  --spacer-xs: 0.5rem;
  --space-2xs: 0.25rem;

  --screen-sm: 576px;
  --screen-md: 768px;
  --screen-lg: 992px;
  --screen-xl: 1200px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,
.h1 {
  font-size: var(--font-size-h1);
  font-weight: 400;
  line-height: 3.25rem;
}
h2,
.h2 {
  font-size: var(--font-size-h2);
  font-weight: 400;
  line-height: 2.75rem;
}
h3,
.h3 {
  font-size: var(--font-size-h3);
  font-weight: 400;
  line-height: var(--font-size-h2);
}
ul {
  list-style-type: none;
}
p,
li,
a {
  font-size: var(--font-size-body);
  line-height: 2rem;
  transition: 150ms text-decoration cubic-bezier(0.4, 0, 0.2, 1);
}
a {
  color: var(--links);
}
a:hover {
  text-decoration: underline;
}
.title {
  padding-left: 0;
}
@media (max-width: 576px) {
  h1,
  .h1 {
    font-size: var(--font-size-h2);
    font-weight: 400;
    line-height: var(--font-size-h1);
  }
}
.content-main {
  --width: 6;
}
.content-sub {
  --width: 5;
  margin-top: 3.75rem;
}
.content-sub-no-title {
  --width: 5;
}
.spacer {
  --width: 1;
}

.button {
  background-color: var(--black);
  border: none;
  color: white;
  display: inline-block;
  font-size: var(--font-size-body);
  margin-top: var(--spacer-sm);
  margin-bottom: var(--spacer-md);
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  transition: 200ms background-color cubic-bezier(0.4, 0, 0.2, 1);
}
.button:hover {
  background-color: var(--links);
  cursor: pointer;
  text-decoration: none;
}
.caption {
  color: var(--dark-gray);
  font-size: var(--font-size-body-sm);
  margin-bottom: var(--spacer-xs);
  margin-top: var(--spacer-sm);
  --width: 9;
}
</style>
