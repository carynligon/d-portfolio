<template>
  <div class="container">
    <div class="content left column">
      <p class="date">
        {{ copy.company ? `${copy.company} | ` : '' }}{{ copy.date }}
      </p>
      <h2>{{ copy.title }}</h2>
      <div class="tags">
        <span v-for="(tag, index) in copy.tags" :key="'tag-' + index">
          {{ tag }}
        </span>
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
        >
          {{ teammate.name
          }}{{ index !== copy.contact.teammates.length - 1 ? ', ' : '' }}
        </a>
      </div>
      <a class="visit-link" v-if="copy.link" :href="copy.link"
        >Visit the site</a
      >
    </div>
    <div class="content column">
      <div v-if="copy.images.length === 1" class="preview-video">
        <video
          width="100%"
          muted
          autoplay
          loop
          playsinline
          disableRemotePlayback
          currentTime="0"
          alt="alt text here"
        >
          <source src="~/assets/videos/other-1.webm" type="video/webm" />
          <source src="~/assets/videos/other-1.mp4" type="video/mp4" />
        </video>
      </div>
      <Carousel v-if="copy.images.length > 1" :perPage="1">
        <Slide
          class="carousel-slide"
          v-for="(image, index) in copy.images"
          :key="'project-image-' + index"
        >
          <img :src="getImgUrl(image.src)" :alt="image.altText" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'ProjectPreview',
  components: {
    Carousel,
    Slide
  },
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
  },
  methods: {
    getImgUrl(path) {
      return require(`../assets/imgs/${path}`)
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
.preview-video {
  background-color: var(--gray);
  overflow: hidden;
  padding: 5%;
  width: 100%;
}
.preview-video video {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
.carousel-slide {
  width: 100%;
}
.carousel-slide img {
  height: 100%;
  width: 100%;
}
.VueCarousel-pagination {
  margin-top: calc(var(--spacer-md * -1));
}
</style>
