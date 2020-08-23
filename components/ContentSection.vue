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

<script>
export default {
  name: 'ContentSection',
  props: {
    copy: {
      title: { type: String },
      subtitle: { type: String },
      paragraphs: { type: Array, default: [] }
    }
  },
  computed: {
    paragraphs() {
      return this.copy.paragraphs
    }
  }
}
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
