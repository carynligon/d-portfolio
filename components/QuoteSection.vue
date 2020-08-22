<template>
  <div>
    <p class="quote h1">{{copy.quote}}</p>
    <p class="author h3">{{copy.author}}</p>
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
.quote:first-letter,
.quote::first-letter {
  margin-left: calc(var(--font-size-body) * -1);
}
.author {
  color: var(--gray);
}
</style>