<template>
  <div slot="container">
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <BottomNav active="cloudPak" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import copy from '~/copy/other';
import Nav from '~/components/Nav.vue';
import BottomNav from '~/components/BottomNav.vue';
import ProjectIntro from '~/components/ProjectIntro.vue';
import ContentSection from '~/components/ContentSection.vue';
import QuoteSection from '~/components/QuoteSection.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    BottomNav,
    Nav,
    ProjectIntro,
    ContentSection,
    Footer,
    QuoteSection
  },
  data() {
    return {
      copy
    }
  }
})
</script>

<style>
.project-feature-img {
  border: 1px solid red;
  height: 500px;
  margin-top: 3.5rem;
  --width: 12;
}
.img-container {
  padding: 0;
  --width: 12;
}
.img-container .project-feature-img {
  border: 1px solid red;
  height: 300px;
  margin: 0;
  --width: 6;
}
.content {
  margin-top: 3rem;
}
</style>
