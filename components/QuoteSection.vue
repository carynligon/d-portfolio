<template>
  <div>
    <p v-bind:class="{ quote: !copy.noQuotes, h2: true }">{{ copy.quote }}</p>
    <p class="author h3">{{ copy.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'QuoteSection',
  props: {
    copy: {
      quote: { type: String },
      author: { type: String },
      noQuotes: { type: Boolean }
    }
  }
}
</script>

<style scoped>
div {
  --width: 5;
}
.quote:first-letter,
.quote::first-letter {
  margin-left: -0.825rem;
}
.author {
  color: var(--dark-gray);
  margin-top: var(--spacer-xs);
}
</style>
