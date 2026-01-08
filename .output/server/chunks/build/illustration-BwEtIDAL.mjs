import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { N as Nav, F as Footer } from './Footer-Cfgxisrr.mjs';
import { P as ProjectIntro, _ as _sfc_main$1 } from './ProjectIntro-gLQ6mpcL.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const copy = {
  intro: {
    title: "Illustration",
    subtitle: "From a box of colored pencils, to a micron pen, to Adobe Illustrator.",
    description: "My earliest memory drawing was getting a sketchbook, some colored pencils, and some stamps for Easter when I was probably 6 or 7. I drew throughout high school and into college. Graphic design was part of the College of Fine Arts so I took drawing and painting classes, and spent a year studying print making on my way to an eventual degree in graphic design. I\u2019ve drawn, or illustrated, as far back as I can remember. Since college that\u2019s mostly been digitally. Whether as a creative outlet or to bring life or delight to product design, the styles vary but it\u2019s still a part of my creative process. "
  },
  illustrations: [
    {
      src: "illustration/illustration-1-2x.png",
      altText: "Purple, white, and black illustration showing a pattern of connected objects on a gray background."
    },
    {
      src: "illustration/illustration-2-2x.png",
      altText: "Illustration showing a small man diving into a coffee chup from the top of a Chemex."
    },
    {
      src: "illustration/illustration-3-2x.png",
      altText: "Blue monochromatic illustration of a 3D copy machine with papers flying around it"
    },
    {
      src: "illustration/illustration-4-2x.png",
      altText: "Illustration showing 16 avatars of different genders and ethnicities."
    },
    {
      src: "illustration/illustration-5-2x.png",
      altText: "Custom lettering that says there is no place like home."
    },
    {
      src: "illustration/illustration-6-2x.png",
      altText: "Multicolored illustration of a simplified mallard"
    },
    {
      src: "illustration/illustration-7-2x.png",
      altText: "Pink illustration of a free donut shop in a desert."
    },
    {
      src: "illustration/illustration-8-2x.png",
      altText: "Split illustration showing a simplified alert on the right and an isometric bar chart on the left with the highest bar in red."
    },
    {
      src: "illustration/illustration-9-2x.png",
      altText: "Orange, black, and white illustration of a man and women in patterned shirts and nikes."
    },
    {
      src: "illustration/illustration-10-2x.png",
      altText: "Illustration of a hairy boy sitting in a school desk throwing paper airplanes."
    },
    {
      src: "illustration/illustration-11-2x.png",
      altText: "Illustration of Lady Bird Johnson, a dog, and a bowl of ramen done in a classic tattoo style."
    },
    {
      src: "illustration/illustration-12-2x.png",
      altText: "Simple line illustration of a maneki-neko."
    },
    {
      src: "illustration/illustration-13-2x.png",
      altText: "Illustration of a tiki cocktail in an Easter Island head mug."
    },
    {
      src: "illustration/illustration-14-2x.png",
      altText: "Illustration of a chemex, aeropress, and v60 coffee brewer with a small woman standing on the aeropress."
    },
    {
      src: "illustration/illustration-15-2x.png",
      altText: "Illustration of a Linea Mini espresso machine with a cactus next to it."
    }
  ]
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "illustration",
  __ssrInlineRender: true,
  setup(__props) {
    const getImgUrl = (path) => {
      return new URL(`../assets/imgs/${path}`, globalThis._importMeta_.url).href;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-adc69a23><div data-v-adc69a23>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(ProjectIntro, {
        wider: true,
        copy: unref(copy).intro
      }, null, _parent));
      _push(`</div><div class="illustration-grid" data-v-adc69a23><!--[-->`);
      ssrRenderList(unref(copy).illustrations, (illustration2, index) => {
        _push(`<img${ssrRenderAttr("alt", illustration2.alt)}${ssrRenderAttr("src", getImgUrl(illustration2.src))} data-v-adc69a23>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { active: "illustration" }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/illustration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const illustration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-adc69a23"]]);

export { illustration as default };
//# sourceMappingURL=illustration-BwEtIDAL.mjs.map
