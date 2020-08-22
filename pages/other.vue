<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
      <ProjectPreview
        v-for="(project, index) in copy.projects"
        :key="'project-' + index"
        v-bind:copy="project"
      />
    </div>
    <BottomNav active="other" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from '~/copy/other'
import Nav from '~/components/Nav.vue'
import BottomNav from '~/components/BottomNav.vue'
import ProjectIntro from '~/components/ProjectIntro.vue'
import ProjectPreview from '~/components/ProjectPreview.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    BottomNav,
    Nav,
    ProjectIntro,
    ProjectPreview,
    Footer
  },
  data() {
    return {
      copy
    }
  }
})
</script>

<style></style>
