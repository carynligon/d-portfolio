<template>
  <div>
    <div class="title column">
      <h1>{{copy.title}}</h1>
    </div>
    <div class="project-info container">
      <div class="description column">
        <h2>{{copy.subtitle}}</h2>
        <p>{{copy.description}}</p>
      </div>
      <div class="spacer column"></div>
      <div class="role-description column">
        <h3 v-if="copy.role">My role</h3>
        <p v-if="copy.role">{{copy.role}}</p>
        <h3 v-if="copy.timeline">Timeline</h3>
        <p v-if="copy.timeline">{{copy.timeline}}</p>
        <h3 v-if="copy.teammates" class="teammates-heading">My teammates</h3>
        <ul v-if="copy.teammates" class="teammates">
          <li v-for="(teammate, index) in copy.teammates" :key="'teammate-' + index">
            <a :href="teammate.link">{{teammate.name}},</a>
            <span>{{teammate.role}}</span>
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
</style>