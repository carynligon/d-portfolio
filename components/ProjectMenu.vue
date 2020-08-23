<template>
  <div class="project-menu container">
    <a class="feature-project" href="/cloud-pak">
      <div>
        <p>IBM Cloud Pak for Security</p>
      </div>
      <img
        src="~/assets/imgs/index/cloud-pak-2x.png"
        alt="A user flow diagram for creating dashboards"
      />
      <img
        class="cloud-pak-sm"
        src="~/assets/imgs/index/cloud-pak-sm-2x.png"
        alt="A user flow diagram for creating dashboards"
      />
    </a>
    <a class="project column" href="/experience-guide">
      <div>
        <p>IBM Security Experience Guide</p>
      </div>
      <img
        src="~/assets/imgs/index/experience-guide-2x.png"
        alt="Screenshot of the IBM Security Experience Guide"
      />
    </a>
    <a class="project column" href="/accessibility">
      <div>
        <p>IBM Accessibility Handbook</p>
      </div>
      <img
        src="~/assets/imgs/index/accessibility-2x.png"
        alt="Landing page for the Design section of the IBM Accessibility Handbook"
      />
    </a>
    <a class="project column" href="/other">
      <div>
        <p>Other Work</p>
      </div>
      <img
        src="~/assets/imgs/index/other-2x.png"
        alt="iPad showing a a device trade-in experience for Sprint"
      />
    </a>
    <a class="project column" href="/illustration">
      <div>
        <p>Illustration</p>
      </div>
      <img
        src="~/assets/imgs/index/illustration-2x.png"
        alt="Pink illustration of a free donut shop in a desert"
      />
    </a>
  </div>
</template>
<style>
.project-menu {
  margin-top: 6.25rem;
}
.feature-project {
  --width: 12;
}
.feature-project img {
  display: block;
  width: 100%;
}
.feature-project img.cloud-pak-sm {
  display: none;
}
.project {
  --width: 6;
}
.project img {
  display: block;
  width: 100%;
}
.project-menu a {
  position: relative;
}
.project-menu a::before {
  background-color: var(--black);
  content: '';
  display: block;
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: 320ms opacity cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.project-menu a:hover::before {
  opacity: 0.9;
}
.project-menu a div {
  align-items: center;
  color: #ffffff;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transition: 320ms opacity cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}
.project-menu a:hover div {
  opacity: 1;
}
.project-menu p {
  font-size: var(--font-size-body-lg);
}
@media (max-width: 768px) {
  .project {
    --width: 12;
  }
  .feature-project img {
    display: none;
  }
  .feature-project img.cloud-pak-sm {
    display: block;
    width: 100%;
  }
}
@media (max-width: 576px) {
  .project-menu {
    margin-top: var(--spacer-3xl);
  }
}
</style>
