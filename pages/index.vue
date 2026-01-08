<template>
  <div class="container">
    <div>
      <Nav />
      <h1 class="title">
        I’m Derrick Ligon, an interaction designer in Atlanta, GA currently
        working at Google. My background includes branding, visual design, user
        experience design, and design systems.
      </h1>
      <div class="roles container">
        <div class="current-role">
          <h3>Currently</h3>
          <div class="role-content">
            <p class="current-role-text">
              Interaction Designer @ Google, since 2021
            </p>
            <div class="email">
              <p>hello@derrickligon.com</p>
              <textarea
                id="email-copy"
                disabled="true"
                value="hello@derrickligon.com"
                style="opacity: 0; position: absolute"
              >
hello@derrickligon.com</textarea
              >
              <div
                :class="{
                  'email-svg-wrapper': true,
                  hover: hover,
                }"
                @click="copyEmail"
              >
                <img
                  alt="click to copy email address"
                  src="~/assets/svgs/copy.svg"
                />
                <div class="copy-text">{{ copyText }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="previous-roles">
          <h3>Previously</h3>
          <ul class="role-content">
            <li>
              <p>UX Designer @ IBM, 2018–2021</p>
            </li>
            <li>
              <p>Designer @ Phobio, 2017–2018</p>
            </li>
            <li>
              <p>Visual/UX Designer @ IBM, 2015–2017</p>
            </li>
          </ul>
        </div>
      </div>
      <ProjectMenu />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Nav from '~/components/Nav.vue'
import ProjectMenu from '~/components/ProjectMenu.vue'
import Footer from '~/components/Footer.vue'

const copyText = ref('Copy email')
const hover = ref(false)

const setHoverState = () => {
  copyText.value = 'Copied!'
  hover.value = true
  const hoverTimeout = setTimeout(() => {
    hover.value = false
    clearTimeout(hoverTimeout)
  }, 1300)
  const textTimeout = setTimeout(() => {
    copyText.value = 'Copy email'
    clearTimeout(textTimeout)
  }, 1500)
}

const copyEmail = () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText('hello@derrickligon.com')
    return setHoverState()
  }
  const inputEl = document.getElementById('email-copy') as HTMLTextAreaElement
  inputEl?.select()
  document.execCommand('copy')
  return setHoverState()
}
</script>

<style>
body {
  font-family: 'Graphik Web';
}
.title {
  font-weight: normal;
  line-height: 3.625rem;
  margin: 5.625rem 0 3.0625rem 0;
  --width: 12;
}
.roles p {
  font-size: var(--font-size-body-lg);
}
h3 {
  font-size: var(--font-size-h3);
  font-weight: normal;
  margin-bottom: var(--spacer-xs);
}
.spacer {
  --width: 1;
}
.current-role,
.previous-roles {
  --width: 6;
  width: 50%;
}
.role-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.current-role-text {
  margin-bottom: var(--spacer-lg);
}
.previous-roles ul {
  padding: 0;
}
.email {
  align-items: center;
  display: flex;
}
.roles .email p {
  margin: 0;
}
.email .email-svg-wrapper {
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 2.25rem;
  justify-content: center;
  margin-left: 6px;
  position: relative;
  width: 2.25rem;
}
.copy-text {
  background-color: var(--black);
  border-radius: 4px;
  color: #fff;
  content: 'Copy email';
  display: block;
  font-size: 0.75rem;
  opacity: 0;
  padding: 0.375rem 0.5rem;
  position: absolute;
  top: 1.75rem;
  transition: 150ms all cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}
.email-svg-wrapper:hover .copy-text,
.email-svg-wrapper.hover .copy-text {
  opacity: 1;
  top: 2.5rem;
  transition: 150ms all cubic-bezier(0.4, 0, 0.2, 1);
}
.email img {
  height: 1.25rem;
  width: 1.25rem;
}
.email .email-svg-wrapper:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.04);
}

@media (max-width: 992px) {
  .current-role,
  .previous-roles {
    --width: 12;
    width: 100%;
  }
  .roles p {
    margin-bottom: var(--spacer-xs);
  }
  .previous-roles {
    margin-top: var(--spacer-lg);
  }
}
@media (max-width: 576px) {
  .title {
    line-height: var(--font-size-h1);
    margin-top: var(--spacer-3xl);
  }
}
</style>
