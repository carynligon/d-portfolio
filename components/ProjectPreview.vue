<template>
  <div class="container">
    <div class="content left column">
      <p class="date">
        {{ copy.company ? `${copy.company} | ` : '' }}{{ copy.date }}
      </p>
      <h2>{{ copy.title }}</h2>
      <div class="tags">
        <span v-for="(tag, index) in copy.tags" :key="'tag-' + index">{{
          tag
        }}</span>
      </div>
      <div
        v-for="(paragraph, index) in copy.paragraphs"
        :key="'project-p-' + index"
      >
        <p v-bind:class="{ quote: paragraph.withQuote }" v-if="paragraph.text">
          {{ paragraph.text }}
        </p>
        <ul v-if="paragraph.list">
          <li
            v-for="(item, index) in paragraph.list"
            :key="'list-item-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="copy.contact">
        <p>{{ copy.contact.text }}</p>
        <a
          v-for="(teammate, index) in copy.contact.teammates"
          :key="'teammate-' + index"
          :href="teammate.link"
          >{{ teammate.name
          }}{{ index !== copy.contact.teammates.length - 1 ? ', ' : '' }}</a
        >
      </div>
      <a class="visit-link" v-if="copy.link" :href="copy.link"
        >Visit the site</a
      >
    </div>
    <div class="content column">
      <div v-if="copy.images.length === 1" class="preview-image">
        PREVIEW IMG
      </div>
      <VueSlickCarousel v-if="copy.images.length > 1">
        <div
          v-for="(image, index) in copy.images"
          :key="'project-image-' + index"
        >
          <img :src="image.src" :alt="image.altText" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

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
.container {
  margin-top: 7.5rem;
}
.content {
  --width: 6;
}
.content.left {
  padding-right: var(--spacer-md);
}
.date {
  font-size: var(--font-size-body-sm);
  margin-top: 0;
}
h2 {
  margin-bottom: var(--spacer-md);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(var(--spacer-xs) * -1);
}
.tags span {
  background-color: var(--gray);
  border-radius: 1rem;
  margin-right: 1rem;
  margin-bottom: var(--spacer-xs);
  padding: var(--spacer-xs) 1rem;
}
p {
  margin-top: var(--spacer-md);
}
.quote:first-letter,
.quote::first-letter {
  margin-left: calc(var(--spacer-xs) * -1);
}
.preview-image {
  border: 1px solid red;
  height: 300px;
  width: 100%;
}
.visit-link {
  background-color: var(--black);
  color: #fff;
  display: inline-block;
  font-size: var(--font-size-md);
  margin-top: var(--spacer-md);
  padding: 1rem var(--spacer-md);
}
ul {
  list-style-type: disc;
  padding: var(--spacer-md) 0 0 var(--font-size-body);
}
li {
  font-size: var(--font-size-body-sm);
}
</style>
