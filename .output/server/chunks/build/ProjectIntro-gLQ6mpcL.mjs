import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BottomNav",
  __ssrInlineRender: true,
  props: {
    active: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bottom-nav container" }, _attrs))}><ul class="bottom-nav-links"><li><a href="/">All</a></li><li><span>/</span></li><li><a href="/cloud-pak" class="${ssrRenderClass({ active: __props.active === "cloudPak" })}">Cloud Pak for Security</a></li><li><span>/</span></li><li><a href="/experience-guide" class="${ssrRenderClass({ active: __props.active === "experienceGuide" })}">Experience Guide</a></li><li><span>/</span></li><li><a href="/accessibility" class="${ssrRenderClass({ active: __props.active === "accessibility" })}">IBM Accessibility Handbook</a></li><li><span>/</span></li><li><a href="/other" class="${ssrRenderClass({ active: __props.active === "other" })}">Other Work</a></li><li><span>/</span></li><li><a href="/illustration" class="${ssrRenderClass({ active: __props.active === "illustration" })}">Illustration</a></li></ul></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectIntro",
  __ssrInlineRender: true,
  props: {
    copy: {},
    wider: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3d03c3c3><div class="title container" data-v-3d03c3c3><h1 data-v-3d03c3c3>${ssrInterpolate(__props.copy.title)}</h1></div><div class="project-info container" data-v-3d03c3c3><div class="${ssrRenderClass({ wider: __props.wider, description: true, column: true })}" data-v-3d03c3c3><h2 data-v-3d03c3c3>${ssrInterpolate(__props.copy.subtitle)}</h2><p data-v-3d03c3c3>${(_a = __props.copy.description) != null ? _a : ""}</p></div><div class="spacer column" data-v-3d03c3c3></div><div class="role-description column" data-v-3d03c3c3>`);
      if (__props.copy.role) {
        _push(`<h3 data-v-3d03c3c3>My role</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.role) {
        _push(`<p data-v-3d03c3c3>${ssrInterpolate(__props.copy.role)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.timeline) {
        _push(`<h3 data-v-3d03c3c3>Timeline</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.timeline) {
        _push(`<p data-v-3d03c3c3>${ssrInterpolate(__props.copy.timeline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.teammates) {
        _push(`<h3 class="teammates-heading" data-v-3d03c3c3>My teammates</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.teammates) {
        _push(`<ul class="teammates" data-v-3d03c3c3><!--[-->`);
        ssrRenderList(__props.copy.teammates, (teammate, index) => {
          _push(`<li data-v-3d03c3c3><a${ssrRenderAttr("href", teammate.link)} data-v-3d03c3c3>${ssrInterpolate(teammate.name)},</a><span data-v-3d03c3c3>${ssrInterpolate(teammate.role)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectIntro = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d03c3c3"]]);

export { ProjectIntro as P, _sfc_main$1 as _ };
//# sourceMappingURL=ProjectIntro-gLQ6mpcL.mjs.map
