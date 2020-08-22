<template>
  <div slot="container">
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <QuoteSection v-bind:copy="copy.stats" />
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
        <ContentSection v-bind:copy="copy.designForEveryone" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="img-container container column">
      <div class="project-feature-img column">FEATURE IMG 1 HERE</div>
      <div class="project-feature-img column">FEATURE IMG 2 HERE</div>
    </div>
    <div class="content container">
      <div class="content-left column"></div>
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
import Vue from 'vue';
import copy from '~/copy/accessibility';
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
