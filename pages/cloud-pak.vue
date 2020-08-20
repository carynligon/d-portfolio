<template>
  <div class="container">
    <div>
      <Nav />
      <div class="title column">
        <h1>IBM Cloud Pak for Security</h1>
      </div>
      <div class="project-info container">
        <div class="description column">
          <h2>Designing a common platform to solve security workers’ problems.</h2>
          <p>On Cloud Pak for Security, I designed experiences for our security platform. This included working with our many product teams to develop common patterns and workflows that were shared across teams. It also included working to understand the needs of security workers so that we could deliver experiences that didn’t just align the designs for our different tools or applications, but that solved our users’ problems and allowed them to detect, investigate, and respond to threats without having to jump between disconnected tools and workflows.</p>
        </div>
        <div class="spacer column"></div>
        <div class="role-description column">
          <h3>My role</h3>
          <p>Product Designer, 2020–Present</p>
          <h3 class="teammates-heading">My teammates</h3>
          <ul class="teammates">
            <li>
              <a href="#">Katie Orenstein,</a>
              <span>Design Lead</span>
            </li>
            <li>
              <a href="#">Peter Vachon,</a>
              <span>Design Lead</span>
            </li>
            <li>
              <a href="#">Terra Banal,</a>
              <span>Visual Designer</span>
            </li>
            <li>
              <a href="#">Michelle Chen,</a>
              <span>Design Researcher</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <p
          class="quote"
        >“Optimization for our processes and an understanding of areas where we can improve would be huge for us.”</p>
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
        <ContentSection v-bind:copy="copy.scalable" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE VID HERE</div>
    <div class="content container">
      <div class="content-left column">
        <ContentSection v-bind:copy="copy.planning" />
      </div>
    </div>
    <div class="project-feature-img column">FEATURE IMG HERE</div>
    <div class="content container">
      <div class="content-left column">
        <p
          class="quote"
        >“Derrick’s ability to explore, leverage existing patterns, and include delightful moments within designs while understanding the entire user flow results in thoughtful experiences.”</p>
      </div>
      <div class="spacer column"></div>
      <div class="content-right column">
        <ContentSection v-bind:copy="copy.findings" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import copy from '~/copy/cloud-pack';
import Nav from '~/components/Nav.vue';
import ContentSection from '~/components/ContentSection.vue';
import Footer from '~/components/Footer.vue';

export default Vue.extend({
  components: {
    Nav,
    ContentSection,
    Footer
  },
  data() {
    return {
      copy
    }
  }
})
</script>

<style>
body {
  font-family: 'Graphik Web';
  padding: 0 80px;
}
.title {
  font-weight: normal;
  margin: 5.625rem 0 3.0625rem 0;
  padding-left: 0;
  --width: 10;
}
.title h1 {
  font-size: var(--font-size-h1);
  font-weight: normal;
  line-height: 52px;
}
.description h2 {
  font-size: var(--font-size-h2);
  font-weight: normal;
  line-height: 32px;
  margin-bottom: 1.5rem;
}
.project-info p {
  font-size: var(--font-size-body);
}
h3 {
  font-size: var(--font-size-h3);
  font-weight: normal;
  margin-bottom: 1.125rem;
}
.spacer {
  --width: 1;
}
.description,
.role-description,
.content-left,
.content-right {
  --width: 5;
}
.teammates-heading {
  margin-top: 2rem;
}
.teammates {
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
}
.current-role-text {
  margin-bottom: 2.25rem;
}
.role-description ul {
  list-style-type: none;
  padding: 0;
}
.project-feature-img {
  border: 1px solid red;
  height: 500px;
  margin-top: 3.5rem;
  --width: 12;
}
.content {
  margin-top: 3rem;
}
.quote {
  font-size: var(--font-size-h1);
}
.quote:first-letter,
.quote::first-letter {
  margin-left: calc(var(--font-size-body) * -1);
}
.content-left {
  margin-top: 3.875rem;
}
</style>
