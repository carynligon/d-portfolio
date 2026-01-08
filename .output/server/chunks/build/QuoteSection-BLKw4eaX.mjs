import { defineComponent, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContentSection",
  __ssrInlineRender: true,
  props: {
    copy: {}
  },
  setup(__props) {
    const props = __props;
    const paragraphs = computed(() => props.copy.paragraphs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.copy.title) {
        _push(`<h2 class="section-title">${ssrInterpolate(__props.copy.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.subtitle) {
        _push(`<p class="subtitle h3">${ssrInterpolate(__props.copy.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(paragraphs.value, (paragraph, index) => {
        _push(`<p class="paragraph">${paragraph != null ? paragraph : ""}</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContentSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuoteSection",
  __ssrInlineRender: true,
  props: {
    copy: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ea180e3c><p class="${ssrRenderClass({ quote: !__props.copy.noQuotes, h2: true })}" data-v-ea180e3c>${ssrInterpolate(__props.copy.quote)}</p><p class="author h3" data-v-ea180e3c>${ssrInterpolate(__props.copy.author)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuoteSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QuoteSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea180e3c"]]);

export { QuoteSection as Q, _sfc_main$1 as _ };
//# sourceMappingURL=QuoteSection-BLKw4eaX.mjs.map
