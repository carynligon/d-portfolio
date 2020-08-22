<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <QuoteSection v-bind:copy="copy.systemsThinkingQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-right column">
        <ContentSection v-bind:copy="copy.problem" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <ContentSection v-bind:copy="copy.process" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column" />
      <div class="spacer column" />
      <div class="content-right column">
        <ContentSection v-bind:copy="copy.buildingHome" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE VID HERE</div>
    <div class="content container">
      <div class="content-left column">
        <ContentSection v-bind:copy="copy.newSkills" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <QuoteSection v-bind:copy="copy.philQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-right column">
        <ContentSection v-bind:copy="copy.outcomes" />
      </div>
    </div>
    <BottomNav active="experienceGuide" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from '~/copy/experience-guide'
import Nav from '~/components/Nav.vue'
import BottomNav from '~/components/BottomNav.vue'
import ProjectIntro from '~/components/ProjectIntro.vue'
import ContentSection from '~/components/ContentSection.vue'
import QuoteSection from '~/components/QuoteSection.vue'
import Footer from '~/components/Footer.vue'

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
  margin-top: var(--spacer-3xl);
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
  margin-top: var(--spacer-2xl);
}
</style>
