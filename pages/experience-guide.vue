<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
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
        <source
          src="~/assets/videos/experience-guide-1.webm"
          type="video/webm"
        />
        <source src="~/assets/videos/experience-guide-1.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.systemsThinkingQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.problem" />
      </div>
    </div>
    <div class="project-feature-img container">
      <img
        src="~/assets/imgs/experience-guide/experience-guide-2-2x.png"
        alt="Image showing site map and screenshot of Github repo"
      />
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.process" />
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
        <source
          src="~/assets/videos/experience-guide-3.webm"
          type="video/webm"
        />
        <source src="~/assets/videos/experience-guide-3.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="content container">
      <div class="content-sub placeholder column" />
      <div class="spacer column" />
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.buildingHome" />
      </div>
    </div>
    <div class="project-feature-img column">
      <img
        src="~/assets/imgs/experience-guide/experience-guide-4-2x.png"
        alt="alt text here"
      />
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.newSkills" />
      </div>
    </div>
    <div class="project-feature-img video centered column">
      <img src="~/assets/videos/experience-guide-5.gif" alt="alt text here" />
    </div>
    <div class="img-container container">
      <div class="project-feature-img half column">
        <img
          src="~/assets/imgs/experience-guide/experience-guide-6-2x.png"
          alt="alt text here"
        />
      </div>
      <div class="project-feature-img half column">
        <img
          src="~/assets/imgs/experience-guide/experience-guide-7-2x.png"
          alt="alt text here"
        />
      </div>
    </div>
    <div class="content container">
      <div class="content-sub column">
        <QuoteSection v-bind:copy="copy.philQuote" />
      </div>
      <div class="spacer column"></div>
      <div class="content-main column">
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
  margin-top: var(--spacer-3xl);
  --width: 12;
}
.project-feature-img.video {
  background-color: var(--gray);
  overflow: hidden;
  padding: 5% 5% 0 5%;
}
.project-feature-img.video.centered {
  padding: 5%;
}
.project-feature-img.video video,
.project-feature-img.video img {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.project-feature-img.half {
  margin-top: var(--spacer-3xl);
  --width: 6;
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
