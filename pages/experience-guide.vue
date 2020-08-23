<template>
  <div>
    <div>
      <Nav />
      <ProjectIntro v-bind:copy="copy.intro" />
    </div>
    <div class="project-feature-img column">
      FEATURE VIDEO HERE
      <img />
      <div class="caption">
        Our Experience Guide brought together design teams and resources across
        brand, product, research, and strategy.
      </div>
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
        alt="Image showing site mape and screenshot of Github repo"
      />
      <div class="caption">
        Working up front on site maps and collaborating in Github helped keep me
        and Randy aligned as a team and with leadership.
      </div>
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.process" />
      </div>
    </div>
    <div class="project-feature-img column">
      FEATURE VIDEO HERE
      <img />
      <div class="caption">
        I used animated prototypes to quickly iterate and fine-tune
        microinteractions like scroll behavior, hover states, or breadcrumbs.
      </div>
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
        alt="Screenshot of photography resources within the marketing assets page of our experience guide."
      />
      <div class="caption">
        As the site and list of involved teams have grown, the Marketing assets
        page remains the most popular page, giving designers a single place to
        find the most up to date guidelines and assets.
      </div>
    </div>
    <div class="content container">
      <div class="content-main column">
        <ContentSection v-bind:copy="copy.newSkills" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE VIDEO HERE</div>
    <div class="img-container container">
      <div class="project-feature-img half column">
        <img
          src="~/assets/imgs/experience-guide/experience-guide-6-2x.png"
          alt="Screenshot of the research section of the experience guide homepage"
        />
      </div>
      <div class="project-feature-img half column">
        <img
          src="~/assets/imgs/experience-guide/experience-guide-7-2x.png"
          alt="Image showing the mobile view of a research catalog."
        />
      </div>
      <div class="caption">
        Adding a catalog of research findings was an key part of our work. We
        considered how the research would be consumed to allow designers to
        utilize the research throughout their design process.
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
.project-feature-img.half {
  margin-top: var(--spacer-3xl);
  --width: 6;
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
@media (max-width: 576px) {
  .project-feature-img {
    margin-top: var(--spacer-md);
  }
}
</style>
