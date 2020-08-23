<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="illustration-grid">
      <img
        v-for="(illustration, index) in copy.illustrations"
        :key="'illustration-' + index"
        :alt="illustration.alt"
        v-bind:src="getImgUrl(illustration.src)"
      />
    </div>
    <BottomNav active="illustration" />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import copy from '~/copy/illustration'
import Nav from '~/components/Nav.vue'
import BottomNav from '~/components/BottomNav.vue'
import ProjectIntro from '~/components/ProjectIntro.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Illustration',
  components: {
    BottomNav,
    Nav,
    ProjectIntro,
    Footer
  },
  data() {
    return {
      copy
    }
  },
  methods: {
    getImgUrl(pic) {
      return require(`../assets/imgs/${pic}`)
    }
  }
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
  height: auto;
  width: 100%;
}
@media (min-width: 768px) {
  img {
    height: auto;
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
