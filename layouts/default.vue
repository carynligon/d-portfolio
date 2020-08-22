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
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-body: 1.125rem;
  --font-size-body-lg: 1.25rem;

  /* Spacing */
  --spacer-3xl: 3.5rem;
  --spacer-2xl: 3rem;
  --spacer-xl: 2.25rem;
  --spacer-lg: 2rem;
  --spacer-md: 1.5rem;
  --spacer-sm: 1.125rem;
  --spacer-xs: 0.5rem;
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
  line-height: 52px;
}
h2,
.h2 {
  font-size: var(--font-size-h2);
  font-weight: 400;
  line-height: var(--font-size-h1);
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
li {
  font-size: var(--font-size-body);
  line-height: 2rem;
}
</style>
