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
      <div class="caption">
        Our homepage is a jumping off point for users through dashboards,
        onboarding experiences, and quick access to capabilities.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.processQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.problem" />
        <div class="button-container">
          <a
            href="https://www.ibm.com/products/cloud-pak-for-security"
            target="_blank"
            class="button"
            >Visit Cloud Pak Site</a
          >
        </div>
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/cloud-pak/cloud-pak-2-2x.png"
        alt="User flow diagram showing the old dashboard experience"
      />
      <div class="caption">
        Audit of the existing, legacy dashboarding experience to understand
        gaps, pain points, and user needs.
      </div>
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
      <div class="caption">
        User flows and mid-fidelity designs help us quickly align around the
        overall user experience before investing too much time.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub placeholder column" />
      <div class="spacer column" />
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.scalable" />
      </div>
    </div>
    <div class="project-feature-img video column">
      <video
        width="100%"
        muted
        autoplay
        loop
        playsinline
        disableRemotePlayback
        currentTime="0"
      >
        <source src="~/assets/videos/cloud-pak-4.webm" type="video/webm" />
        <source src="~/assets/videos/cloud-pak-4.mp4" type="video/mp4" />
      </video>
    </div>
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
      <div class="caption">
        Invision prototype used for user testing sessions. Helped us understand
        how users edit and create dashboards and widgets.
      </div>
    </div>
    <div class="content container">
      <div class="content-sub no-title column">
        <QuoteSection v-bind:copy="copy.peterQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.findings" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
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
      <div class="caption">
        Updating shared dashboards, widgets details, and how users create new
        dashboards were all influenced by user testing.
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
.project-feature-img.video {
  background-color: var(--gray);
  overflow: hidden;
  padding: 5% 5% 0 5%;
}
.project-feature-img.video video {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
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
.content-sub.no-title {
  margin-top: 0;
}
@media (max-width: 576px) {
  .project-feature-img {
    margin-top: var(--spacer-md);
  }
}
</style>
