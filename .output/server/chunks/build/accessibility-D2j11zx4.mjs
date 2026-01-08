import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { N as Nav, F as Footer } from './Footer-Cfgxisrr.mjs';
import { P as ProjectIntro, _ as _sfc_main$1$1 } from './ProjectIntro-gLQ6mpcL.mjs';
import { Q as QuoteSection, _ as _sfc_main$1 } from './QuoteSection-BLKw4eaX.mjs';
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
import './server.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("accessibility-1-2x.BDKW9uUx.jpg");
const _imports_1 = "" + buildAssetsURL("accessibility-2-2x.BFwHOIkx.jpg");
const _imports_2 = "" + buildAssetsURL("accessibility-3-2x.BS61KtKU.jpg");
const _imports_3 = "" + buildAssetsURL("accessibility-4-2x.CRGxm_Ms.jpg");
const _imports_4 = "" + buildAssetsURL("accessibility-5-2x.CJw_iiMb.jpg");
const _imports_5 = "" + buildAssetsURL("accessibility-6-2x.CMfQZ6R9.jpg");
const copy = {
  intro: {
    title: "IBM Accessibility Handbook",
    subtitle: "Helping teams across IBM deliver inclusive and accessible products.",
    description: "Accessibility is an important part of the training new designers receive as part of IBM\u2019s new hire design camp program. Designers are given materials they can utilize and take part in accessibility hackathon to build empathy, skills, and an understanding of the role accessibility plays in the design process. Even with the emphasis on accessibility initially, those experiences are often forgotten or not applied. The goal of this project was to empower not only designers, but developers and product managers across IBM to deliver inclusive, accessible products.",
    role: "Designer, 2016",
    teammates: [
      {
        name: "Hayley Hughes",
        link: "https://www.hayley.work/",
        role: "Design Lead"
      },
      {
        name: "Evan Maeda",
        link: "https://www.linkedin.com/in/evanmaeda/",
        role: "Designer"
      }
    ]
  },
  problem: {
    title: "The problem",
    subtitle: "How do you help team view accessibility as part of the whole team\u2019s job instead of someone else\u2019s job?",
    paragraphs: [
      "Within IBM product teams, accessibility is not always a part of the process from the beginning. When it is considered, the responsibility falls on individual members or parts of the team instead of being integral to the full product process. Engineering teams will work to comply with standards in order to deliver code on time or designers may focus on a small portion of accessibility, but it\u2019s not an regular practice for teams. This leads to teams having an incomplete understanding of the role they play in delivering accessible products, how to teach the rest of their team accessible, and a buildup of accessibility debt."
    ]
  },
  stats: {
    quote: "In its first year, the IBM Accessibility Handbook had more than 50k views and over 10k printed copies distributed.",
    noQuotes: true,
    author: "According to John Maeda\u2019s 2017 Design in Tech Report"
  },
  process: {
    title: "Our process",
    subtitle: "Provide new principles and practices for everyone on the team.",
    paragraphs: [
      "IBM Design had an existing series of physical handbooks on various topics for designers to reference during different parts of the design process. Teams liked having the ability to highlight, take notes, and pass it around their teams. With existing templates and a relatively quick turnaround time, the physical handbook was our MVP. We worked with subject matter experts around IBM to create content and resources for designers, developers, and product managers, while designing the layouts and supporting visuals in parallel.",
      "While a physical handbook was our MVP and initial deliverable, we also designed a website and downloadable PDF as well. This allowed for easier access to links, a way to update and add content, and a way to quickly share resources with our global product teams. Both version are still available for teams across IBM and have helped evolve the IBM Accessibility site into what it is today."
    ]
  },
  designForEveryone: {
    subtitle: "Helping teams recognize the value of designing for everyone.",
    paragraphs: [
      "There were process improvements for teams that were able to utilize the Accessibility Handbook. It made it easier for teams to address issues early in the process instead of having to make updates late in release cycles or based on existing debt. More time was also being built into the process from a product management standpoint. This is largely due to a shift in how teams viewed accessibility. Instead of just seeing it as a mandattory step in the process, teams were able to recognize the financial value of design accessible products and the social value of considering diversity, equity, and inclusion in how we build teams and how we build products."
    ]
  },
  outcomes: {
    title: "Outcomes",
    paragraphs: [
      "In 2016, sixty copies were distributed by the head of IBM Design on Capitol Hill at a Congressional hearing on the topic of accessibility. In 2017, John Maeda included IBM as one of two companies leading with action on their promise to design with inclusion in mind and linked to the handbook in his Design in Tech report. "
    ]
  },
  next: {
    title: "What\u2019s next",
    paragraphs: [
      "Our team is currently working on a variety of projects including account creations, multi-account management, and empowering developers to build applications, add-ons, or integrations on our platform. This work is ongoing and I can\u2019t currently publish any examples but please reach out for additional work samples."
    ]
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accessibility",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(ProjectIntro, {
        copy: unref(copy).intro
      }, null, _parent));
      _push(`</div><div class="project-feature-img column"><img${ssrRenderAttr("src", _imports_0)} alt="Cloud Pak for Security homepage with application links and dashboard" aria-labelledby="accessibility-1-caption"><div class="caption" id="accessibility-1-caption"> Design portion of the handbook. Gives designers tips and resources to use throughout their design process. </div></div><div class="content container"><div class="content-sub column">`);
      _push(ssrRenderComponent(QuoteSection, {
        copy: unref(copy).stats
      }, null, _parent));
      _push(`</div><div class="spacer column"></div><div class="content-main column">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        copy: unref(copy).problem
      }, null, _parent));
      _push(`</div></div><div class="project-feature-img column"><img${ssrRenderAttr("src", _imports_1)} alt="Spread from accessibility handboook that says Inclusive Design is Good Business." aria-labelledby="accessibility-2-caption"><div class="caption" id="accessibility-2-caption"> Thomas J. Watson\u2019s \u201Cgood design is good business\u201D is a popular mantra around IBM, but for us good design is inclusive design. </div></div><div class="content container"><div class="content-main column">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        copy: unref(copy).process
      }, null, _parent));
      _push(`</div></div><div class="project-feature-img column"><img${ssrRenderAttr("src", _imports_2)} alt="Two screenshots showing accessibility coding tips and details about color accessibility" aria-labelledby="accessibility-3-caption"><div class="caption" id="accessibility-3s-caption"> The online version allowed us to include the same tips but link to more tools, plugins, and resources. </div></div><div class="content container"><div class="content-sub placeholder column"></div><div class="spacer column"></div><div class="content-main column">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        copy: unref(copy).designForEveryone
      }, null, _parent));
      _push(`</div></div><div class="project-feature-img column" aria-labelledby="accessibility-4-caption"><img${ssrRenderAttr("src", _imports_3)} alt="The cover of the IBM Accessibility Handbook with accessibility related illustrations."></div><div class="img-container container column"><div class="project-feature-img column"><img${ssrRenderAttr("src", _imports_4)} alt="First page of the handbook with the title of One size does not fit all."></div><div class="project-feature-img column"><img${ssrRenderAttr("src", _imports_5)} alt="The online landing page for the offering managemeent section of the handbook."></div><div class="caption" id="accessibility-4-caption"> The layouts and content for the physical copy of the handbook translated easily to the online version. </div></div><div class="content container"><div class="content-sub placeholder column"></div><div class="spacer column"></div><div class="content-main column">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        copy: unref(copy).outcomes
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1$1, { active: "accessibility" }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/accessibility.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=accessibility-D2j11zx4.mjs.map
