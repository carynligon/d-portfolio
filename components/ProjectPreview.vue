<template>
  <div class="container">
    <div class="content-left column">
      <p>{{copy.company}} | {{copy.date}}</p>
      <h2>{{copy.title}}</h2>
      <div class="tag" v-for="(tag, index) in copy.tags" :key="'tag-' + index">
        <span>{{tag}}</span>
      </div>
      <p v-for="(paragraph, index) in copy.paragraphs" :key="'project-p-' + index"</p>
      <a v-if="copy.link" :href="copy.link">Visit the site</a>
    </div>
    <div class="content-right column">
      <div class="preview-image">PREVIEW IMG</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    copy: {
      company: { type: String },
      date: { type: String },
      title: { type: String },
      tags: { type: Array },
      paragraphs: { type: Array },
      link: { type: String },
      images: { type: Array }
    }
  }
}
</script>

<style scoped>
/* h2 {
  font-size: var(--font-size-h2);
  font-weight: 400;
} */
</style>