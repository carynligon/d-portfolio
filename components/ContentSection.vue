<template>
  <div>
    <h2 class="section-title" v-if="copy.title">{{ copy.title }}</h2>
    <p class="subtitle h3" v-if="copy.subtitle">{{ copy.subtitle }}</p>
    <p
      class="paragraph"
      v-for="(paragraph, index) in paragraphs"
      :key="'content-p-' + index"
      v-html="paragraph"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  copy: {
    title?: string
    subtitle?: string
    paragraphs?: string[]
  }
}

const props = defineProps<Props>()

const paragraphs = computed(() => props.copy.paragraphs)
</script>

<style>
.section-title {
  margin-bottom: var(--spacer-sm);
}
.subtitle {
  margin-bottom: var(--spacer-sm);
}

.paragraph {
  margin-bottom: var(--spacer-sm);
}
</style>
