<template>
  <div>
    <p :class="{ quote: !copy.noQuotes, h2: true }">{{ copy.quote }}</p>
    <p class="author h3">{{ copy.author }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  copy: {
    quote?: string
    author?: string
    noQuotes?: boolean
  }
}

defineProps<Props>()
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
