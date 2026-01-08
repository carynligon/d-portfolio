<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro :copy="copy.intro" />
      <ProjectPreview
        v-for="(project, index) in copy.projects"
        :key="'project-' + index"
        :copy="project"
      />
    </div>
    <BottomNav active="other" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import copy from '~/copy/other'
import Nav from '~/components/Nav.vue'
import BottomNav from '~/components/BottomNav.vue'
import ProjectIntro from '~/components/ProjectIntro.vue'
import ProjectPreview from '~/components/ProjectPreview.vue'
import Footer from '~/components/Footer.vue'
</script>

<style></style>
