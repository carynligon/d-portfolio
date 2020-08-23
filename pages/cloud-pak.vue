<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/cloud-pak/cloud-pak-1-2x.png"
        alt="Cloud Pak for Security homepage with application links and dashboard"
      />
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.processQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.problem" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/cloud-pak/cloud-pak-2-2x.png"
        alt="User flow diagram showing the old dashboard experience"
      />
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.process" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/cloud-pak/cloud-pak-3-2x.png"
        alt="Divided image showing process screenshots of a user flow diagram and a mid-fidelity prototype"
      />
    </div>
    <div class="content container">
      <div class="content-sub column" />
      <div class="spacer column" />
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.scalable" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE VID HERE</div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.planning" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/cloud-pak/cloud-pak-5-2x.png"
        alt="Invision prototype for selecting widgets to add to a dashboard"
      />
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.peterQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.findings" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        class="project-feature-img"
        src="~/assets/imgs/cloud-pak/cloud-pak-6-2x.png"
        alt="Screenshot showing a dropdown for a user to change dashboards"
      />
    </div>
    <div class="img-container container column">
      <div class="project-feature-img column">
        <img
          class="project-feature-img"
          src="~/assets/imgs/cloud-pak/cloud-pak-7-2x.png"
          alt="Zoomed in screenshot of dashboard action bar with available updates"
        />
      </div>
      <div class="project-feature-img column">
        <img
          class="project-feature-img"
          src="~/assets/imgs/cloud-pak/cloud-pak-8-2x.png"
          alt="Documentation showing feedback and proposed updates to widget card components"
        />
      </div>
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.next" />
      </div>
    </div>
    <BottomNav active="cloudPak" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import copy from '~/copy/cloud-pack'
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
</style>
