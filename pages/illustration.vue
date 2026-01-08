<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro :wider="true" :copy="copy.intro" />
    </div>
    <div class="illustration-grid">
      <img
        v-for="(illustration, index) in copy.illustrations"
        :key="'illustration-' + index"
        :alt="illustration.alt"
        :src="getImgUrl(illustration.src)"
      />
    </div>
    <BottomNav active="illustration" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import copy from '~/copy/illustration'
import Nav from '~/components/Nav.vue'
import BottomNav from '~/components/BottomNav.vue'
import ProjectIntro from '~/components/ProjectIntro.vue'
import Footer from '~/components/Footer.vue'

const getImgUrl = (path: string) => {
  return `/imgs/${path}`
}
</script>

<style scoped>
.illustration-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--spacer-3xl);
}
img {
  height: 100%;
  width: 100%;
}
@media (min-width: 768px) {
  .illustration-grid {
    justify-content: flex-start;
  }
  img {
    width: 50%;
  }
}
@media (min-width: 992px) {
  img {
    height: auto;
    width: 33.33%;
  }
}
</style>
