import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { N as Nav, F as Footer } from './Footer-Cfgxisrr.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='20px'%20height='20px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20transform='translate(-112.000000,%20-640.000000)'%3e%3cg%20transform='translate(104.000000,%20632.000000)'%3e%3cpolygon%20fill-opacity='0.04'%20fill='%23000000'%20opacity='0'%20points='0%200%2036%200%2036%2036%200%2036'%3e%3c/polygon%3e%3cpolygon%20points='6%206%2030%206%2030%2030%206%2030'%3e%3c/polygon%3e%3cpath%20d='M22,8%20L10,8%20C8.9,8%208,8.9%208,10%20L8,24%20L10,24%20L10,10%20L22,10%20L22,8%20Z'%20fill='%23000000'%20fill-rule='nonzero'%3e%3c/path%3e%3crect%20stroke='%23000000'%20stroke-width='2'%20fill-rule='nonzero'%20x='13'%20y='13'%20width='14'%20height='14'%20rx='2'%3e%3c/rect%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_0 = "" + buildAssetsURL("cloud-pak-2x.uy8oT9wt.jpg");
const _imports_1 = "" + buildAssetsURL("cloud-pak-sm-2x.D_T7BLRU.jpg");
const _imports_2 = "" + buildAssetsURL("experience-guide-2x.Byx7CYqL.jpg");
const _imports_3 = "" + buildAssetsURL("accessibility-2x.CEsjnOiM.jpg");
const _imports_4 = "" + buildAssetsURL("other-2x.B_TnrbPw.jpg");
const _imports_5 = "" + buildAssetsURL("illustration-2x.iyyYNaOJ.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-menu container" }, _attrs))}><a class="feature-project" href="/cloud-pak"><div><p>IBM Cloud Pak for Security</p></div><img${ssrRenderAttr("src", _imports_0)} alt="A user flow diagram for creating dashboards"><img class="cloud-pak-sm"${ssrRenderAttr("src", _imports_1)} alt="A user flow diagram for creating dashboards"></a><a class="project column" href="/experience-guide"><div><p>IBM Security Experience Guide</p></div><img${ssrRenderAttr("src", _imports_2)} alt="Screenshot of the IBM Security Experience Guide"></a><a class="project column" href="/accessibility"><div><p>IBM Accessibility Handbook</p></div><img${ssrRenderAttr("src", _imports_3)} alt="Landing page for the Design section of the IBM Accessibility Handbook"></a><a class="project column" href="/other"><div><p>Other Work</p></div><img${ssrRenderAttr("src", _imports_4)} alt="iPad showing a a device trade-in experience for Sprint"></a><a class="project column" href="/illustration"><div><p>Illustration</p></div><img${ssrRenderAttr("src", _imports_5)} alt="Pink illustration of a free donut shop in a desert"></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const copyText = ref("Copy email");
    const hover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(`<h1 class="title column"> I\u2019m Derrick Ligon, an interaction designer in Atlanta, GA currently working at Google. My background includes branding, visual design, user experience design, and design systems. </h1><div class="roles container"><div class="current-role column"><h3>Currently</h3><div class="role-content"><p class="current-role-text">Interaction Designer @ Google, since 2021</p><div class="email"><p>hello@derrickligon.com</p><textarea id="email-copy" disabled="true" style="${ssrRenderStyle({ "opacity": "0", "position": "absolute" })}">hello@derrickligon.com</textarea><div class="${ssrRenderClass({
        "email-svg-wrapper": true,
        hover: hover.value
      })}"><img alt="click to copy email address"${ssrRenderAttr("src", _imports_0$1)}><div class="copy-text">${ssrInterpolate(copyText.value)}</div></div></div></div></div><div class="previous-roles column"><h3>Previously</h3><ul class="role-content"><li><p>UX Designer @ IBM, 2018\u20132021</p></li><li><p>Designer @ Phobio, 2017\u20132018</p></li><li><p>Visual/UX Designer @ IBM, 2015\u20132017</p></li></ul></div></div>`);
      _push(ssrRenderComponent(ProjectMenu, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dew4Ihr5.mjs.map
