<template>
  <div class="project-menu container">
    <a class="feature-project column" href="/cloud-pak">
      <div></div>
    </a>
    <a class="project column" href>
      <div></div>
    </a>
    <a class="project column" href>
      <div></div>
    </a>
    <a class="project column" href>
      <div></div>
    </a>
    <a class="project column" href>
      <div></div>
    </a>
  </div>
</template>
<style>
.project-menu {
  margin-top: 6.25rem;
}
.feature-project {
  background-color: #aaa;
  height: 640px;
  --width: 12;
}
.project {
  border: 1px solid #aaa;
  height: 480px;
  --width: 6;
}
.project-menu a {
  position: relative;
}
.project-menu a::before {
  background-color: red;
  content: '';
  display: block;
}
</style>
