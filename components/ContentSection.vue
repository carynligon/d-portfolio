<template>
  <div>
    <h4 v-if="copy.title">{{ copy.title }}</h4>
    <p class="subtitle h2" v-if="copy.subtitle">{{ copy.subtitle }}</p>
    <p
      class="paragraph"
      v-for="(paragraph, index) in paragraphs"
      :key="'content-p-' + index"
      v-html="paragraph"
    ></p>
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

<style scoped>
div {
  --width: 6;
}
h4 {
  font-size: var(--font-size-h1);
  font-weight: normal;
  margin-bottom: 1.25rem;
}
.subtitle {
  margin-bottom: var(--spacer-md);
}
.paragraph {
  margin-bottom: var(--spacer-md);
}
</style>
