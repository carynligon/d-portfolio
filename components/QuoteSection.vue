<template>
  <div>
    <p class="quote">{{copy.quote}}</p>
    <p class="author">{{copy.author}}</p>
  </div>
</template>

<script>
export default {
  name: 'QuoteSection',
  props: {
    copy: {
      quote: { type: String },
      author: { type: String }
    }
  }
}
</script>

<style>
.quote {
  font-size: var(--font-size-h1);
}
.quote:first-letter,
.quote::first-letter {
  margin-left: calc(var(--font-size-body) * -1);
}
.author {
  color: var(--gray);
  font-size: var(--font-size-h3);
}
</style>