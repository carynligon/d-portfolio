<template>
  <div>
    <h4 v-if="copy.title">{{copy.title}}</h4>
    <p class="subtitle" v-if="copy.subtitle">{{copy.subtitle}}</p>
    <p
      class="paragraph"
      v-for="(paragraph, index) in paragraphs"
      :key="'content-p-' + index"
    >{{paragraph}}</p>
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
h4 {
  font-size: var(--font-size-h1);
  font-weight: normal;
  margin-bottom: 1.25rem;
}
.subtitle {
  font-size: var(--font-size-h2);
  margin-bottom: 1.5rem;
}
.paragraph {
  font-size: var(--font-size-body);
  margin-bottom: 1.5rem;
}
</style>