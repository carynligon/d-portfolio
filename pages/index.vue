<template>
  <div class="container">
    <div>
      <Nav />
      <h1 class="title column">
        I’m Derrick Ligon & I’m a product designer in Austin, TX currently
        working at IBM. My background includes brand, visual design, user
        experience, and design systems. Outside of solving user needs, my focus
        is on being a better ally.
      </h1>
      <div class="roles container">
        <div class="current-role column">
          <h3>Currently</h3>
          <div class="role-content">
            <p class="current-role-text">UX Designer @ IBM Security, since 2018</p>
            <div class="email">
              <p>hello@derrickligon.com</p>
              <div>
                <img alt="click to copy email address" src="~/assets/svgs/copy.svg" />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="spacer column"></div> -->
        <div class="previous-roles column">
          <h3>Previously</h3>
          <ul class="role-content">
            <li>
              <p>Designer @ Phobio, 2017–2018</p>
            </li>
            <li>
              <p>Visual/UX Designer @ IBM, 2015–2017</p>
            </li>
            <li>
              <p>Designer @ Fracture, 2013–2015</p>
            </li>
          </ul>
        </div>
      </div>
      <ProjectMenu />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '~/components/Nav.vue'
import ProjectMenu from '~/components/ProjectMenu.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Nav,
    ProjectMenu,
    Footer
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
  line-height: 52px;
  margin: 5.625rem 0 3.0625rem 0;
  --width: 10;
}
.roles p {
  font-size: var(--font-size-body-lg);
}
h3 {
  font-size: var(--font-size-h3);
  font-weight: normal;
  margin-bottom: var(--spacer-sm);
}
.spacer {
  --width: 1;
}
.current-role,
.previous-roles {
  --width: 5;
}
.role-content {
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
}
.current-role-text {
  margin-bottom: var(--spacer-xl);
}
.previous-roles ul {
  padding: 0;
}
.email {
  align-items: center;
  display: flex;
}
.email div {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  height: 2.25rem;
  justify-content: center;
  margin-left: 6px;
  width: 2.25rem;
}
.email img {
  height: 1.5rem;
  width: 1.5rem;
}
.email div:hover {
  cursor: pointer;
}
</style>
