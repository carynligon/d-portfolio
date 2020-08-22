<template>
  <div>
    <div class="title container">
      <h1>{{ copy.title }}</h1>
    </div>
    <div class="project-info container">
      <div class="description column">
        <h2>{{ copy.subtitle }}</h2>
        <p>{{ copy.description }}</p>
      </div>
      <div class="spacer column"></div>
      <div class="role-description column">
        <h3 v-if="copy.role">My role</h3>
        <p v-if="copy.role">{{ copy.role }}</p>
        <h3 v-if="copy.timeline">Timeline</h3>
        <p v-if="copy.timeline">{{ copy.timeline }}</p>
        <h3 v-if="copy.teammates" class="teammates-heading">My teammates</h3>
        <ul v-if="copy.teammates" class="teammates">
          <li
            v-for="(teammate, index) in copy.teammates"
            :key="'teammate-' + index"
          >
            <a :href="teammate.link">{{ teammate.name }},</a>
            <span>{{ teammate.role }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectIntro',
  props: {
    copy: {
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
      role: { type: String },
      teammates: { type: Array, default: [] }
    }
  }
}
</script>

<style>
.intro-container {
  margin-bottom: var(--spacer-3xl);
}
.title {
  margin: 5.625rem auto 3.0625rem auto;
  padding-left: 0;
  --width: 10;
}
.description h2 {
  margin-bottom: var(--spacer-md);
}
h3 {
  margin-bottom: var(--spacer-xs);
}
.spacer {
  --width: 1;
}
.description,
.content-left {
  --width: 6;
}
.role-description,
.content-right {
  --width: 5;
}
.teammates-heading {
  margin-top: var(--spacer-lg);
}
.teammates {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.current-role-text {
  margin-bottom: var(--spacer-xl);
}
.role-description ul {
  padding: 0;
}
</style>
