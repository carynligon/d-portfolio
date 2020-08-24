<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="project-feature-img column">
      <img
        src="~/assets/imgs/accessibility/accessibility-1-2x.png"
        alt="Cloud Pak for Security homepage with application links and dashboard"
        aria-labelledby="accessibility-1-caption"
      />
      <div class="caption" id="accessibility-1-caption">
        Design portion of the handbook. Gives designers tips and resources to
        use throughout their design process.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.stats" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.problem" />
      </div>
    </div>
    <div class="project-feature-img column">
      <img
        src="~/assets/imgs/accessibility/accessibility-2-2x.png"
        alt="Spread from accessibility handboook that says Inclusive Design is Good Business."
        aria-labelledby="accessibility-2-caption"
      />
      <div class="caption" id="accessibility-2-caption">
        Thomas J. Watson’s “good design is good business” is a popular mantra
        around IBM, but for us good design is inclusive design.
      </div>
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.process" />
      </div>
    </div>
    <div class="project-feature-img column">
      <img
        src="~/assets/imgs/accessibility/accessibility-3-2x.png"
        alt="Two screenshots showing accessibility coding tips and details about color accessibility"
        aria-labelledby="accessibility-3-caption"
      />
      <div class="caption" id="accessibility-3s-caption">
        The online version allowed us to include the same tips but link to more
        tools, plugins, and resources.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub placeholder column" />
      <div class="spacer column" />
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.designForEveryone" />
      </div>
    </div>
    <div
      class="project-feature-img column"
      aria-labelledby="accessibility-4-caption"
    >
      <img
        src="~/assets/imgs/accessibility/accessibility-4-2x.png"
        alt="The cover of the IBM Accessibility Handbook with accessibility related illustrations."
      />
    </div>
    <div class="img-container container column">
      <div class="project-feature-img column">
        <img
          src="~/assets/imgs/accessibility/accessibility-5-2x.png"
          alt="First page of the handbook with the title of One size does not fit all."
        />
      </div>
      <div class="project-feature-img column">
        <img
          src="~/assets/imgs/accessibility/accessibility-6-2x.png"
          alt="The online landing page for the offering managemeent section of the handbook."
        />
      </div>
      <div class="caption" id="accessibility-4-caption">
        The layouts and content for the physical copy of the handbook translated
        easily to the online version.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub placeholder column"></div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.outcomes" />
      </div>
    </div>
    <BottomNav active="accessibility" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from '~/copy/accessibility'
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
  margin-top: var(--spacer-3xl);
  --width: 12;
}
.project-feature-img img {
  display: block;
  height: 100%;
  width: 100%;
}
.img-container {
  padding: 0;
  --width: 12;
}
.img-container .project-feature-img {
  margin: 0;
  --width: 6;
}
.content {
  margin-top: var(--spacer-2xl);
}
@media (max-width: 576px) {
  .project-feature-img {
    margin-top: var(--spacer-md);
  }
}
</style>
