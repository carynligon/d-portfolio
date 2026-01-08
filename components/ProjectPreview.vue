<template>
  <div class="container">
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
          alt="Video scrolling through the illustration overview page of the IBM Design Language."
        >
          <source src="~/assets/videos/other-1.webm" type="video/webm" />
          <source src="~/assets/videos/other-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div v-if="copy.images.length > 1" class="custom-carousel">
        <div class="carousel-slide">
          <img
            v-for="(image, index) in copy.images"
            v-show="index === currentSlide"
            :key="'project-image-' + index"
            :src="getImgUrl(image.src)"
            :alt="image.altText"
          />
        </div>
        <div class="carousel-controls">
          <div class="carousel-pagination">
            <span
              v-for="(image, index) in copy.images"
              :key="'dot-' + index"
              @click="goToSlide(index)"
              :class="{ active: index === currentSlide }"
              class="pagination-dot"
            />
          </div>
        </div>
      </div>
    </div>
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
        <p :class="{ quote: paragraph.withQuote }" v-if="paragraph.text">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Image {
  src: string
  altText: string
}

interface Paragraph {
  text?: string
  withQuote?: boolean
  list?: string[]
}

interface Teammate {
  name: string
  link: string
}

interface Contact {
  text: string
  teammates: Teammate[]
}

interface Props {
  copy: {
    company?: string
    date?: string
    title?: string
    tags?: string[]
    paragraphs?: Paragraph[]
    link?: string
    images: Image[]
    contact?: Contact
  }
}

const props = defineProps<Props>()

const currentSlide = ref(0)

const getImgUrl = (path: string) => {
  return `/imgs/${path}`
}

const nextSlide = () => {
  if (currentSlide.value < props.copy.images.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>

<style scoped>
.container {
  flex-direction: row-reverse;
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
  margin-right: var(--spacer-xs);
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
  padding: 5.6% 5%;
  width: 100%;
}
.preview-video video {
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
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
.custom-carousel {
  position: relative;
  width: 100%;
}
.carousel-slide {
  width: 100%;
  position: relative;
}
.carousel-slide img {
  height: 100%;
  width: 100%;
  display: block;
}
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
.carousel-pagination {
  display: flex;
  gap: 0.5rem;
}
.pagination-dot {
  margin: 0 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray);
  cursor: pointer;
  transition: background 0.2s;
}
.pagination-dot.active {
  background: var(--black);
}
.pagination-dot:hover {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .container {
    margin-top: var(--spacer-3xl);
  }
  .content {
    --width: 12;
  }
  .content.left {
    margin-bottom: 5rem;
  }
  .date {
    margin-top: var(--spacer-lg);
  }
  .bottom-nav {
    margin-top: 0;
  }
  .tags {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
}
</style>
