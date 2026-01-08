import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, unref, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { N as Nav, F as Footer } from './Footer-Cfgxisrr.mjs';
import { P as ProjectIntro, _ as _sfc_main$1$1 } from './ProjectIntro-gLQ6mpcL.mjs';
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

const copy = {
  intro: {
    title: "Other work",
    subtitle: "A collection of smaller, meaningful projects from throughout my career.",
    description: "My career has included a variety of different work up to this point. For some projects, whether it\u2019s the amount of available work examples or documentation or the size of the project, they may nor warrant their own page but the impact of the work or how well it depicts my values, interests, or abilities make them worth including.",
    timeline: "June 2015\u2013June 2020"
  },
  projects: [
    {
      title: "The first set of illustration guidelines included in the IBM Design Language.",
      date: "April 2020",
      company: "IBM Design",
      tags: ["Illustration", "Design systems"],
      paragraphs: [
        {
          text: "From creating illustration to providing feedback to other teams and contractors, from creating guidelines for my immediate team to creating standards to be used across the company, my experience with illustration has been diverse. Most recently, I was part of a small guild of designers across different business who defined illustration principles, styles, and best practices to be included in the IBM Design Language. After work with a smaller team of designers and an outside agencies, we published our first version of illustration guidelines in April of 2020."
        }
      ],
      link: "https://www.ibm.com/design/language/illustration/overview/",
      images: [{}]
    },
    {
      title: "Spreading design stories across IBM.",
      date: "April 2019",
      company: "IBM Design",
      tags: ["Content design", "Visual design", "Design culture"],
      paragraphs: [
        {
          text: "While at IBM, I had the pleasure of contributing to three issues of Variable, an internal design magazine. Variable\u2019s goal is to support the Design Program Office, provide skill growth to designers, and improve the culture of critique across design teams. My role included collaborating with a writer to design their story and providing feedback to other designers."
        },
        {
          text: "\u201CBe it his dedication to typographic craft or his ability to properly scope volunteer efforts alongside his day-to-day work, Derrick continues to go above and beyond. One key aspect of his dedication is his ability to work with others within the critique process. He does so in a way that is constructive, meaningful, and allows for creative conversations that not only improve the work of his teammates but elevates his work as well.\u201D",
          withQuote: true
        },
        {
          text: "\u2014 Patrick Lowden, Variable Editor in Chief"
        }
      ],
      images: [
        {
          src: "other/variable-1.jpg",
          altText: 'Magazine spread with the article title "Back on Track"'
        },
        {
          src: "other/variable-2.jpg",
          altText: 'Magazine spread with the article title "The Fourth Dimension"'
        },
        {
          src: "other/variable-3.jpg",
          altText: "Magazine spread about spinal health with a collage about spine anatomy with a giraffe."
        },
        {
          src: "other/variable-4.jpg",
          altText: "A choose-your-own-adventure spread with scribbled lines going between options."
        },
        {
          src: "other/variable-5.jpg",
          altText: 'Title spread for an article called "Tipping Points" with a blue illustration.'
        }
      ]
    },
    {
      title: "Scaling design across a small company.",
      date: "2017-2018",
      company: "Phobio",
      tags: [
        "Product design",
        "Design strategy",
        "User research",
        "Brand design",
        "Illustration",
        "Visual design"
      ],
      paragraphs: [
        {
          text: "Phobio is a device trade-in and workforce communication company. As one of two designers at a young, small company I was responsible for projects across the company. This included delivering design assets for brand, marketing, and product, working with business leaders to craft the stories for pitches to companies like Apple and Samsung, leading research efforts around user trade-in behaviors, and designing the user experiences for trade-in partnernships with Sprint and Apple. My experience at Phobio pushed my craft and my design leadership. I\u2019m also unable to share examples from some of the partner experiences."
        }
      ],
      images: [
        {
          src: "other/phobio-1.jpg",
          altText: "iPad with a yellow screen showing a trade-in experience for Sprint within Walgreens."
        },
        {
          src: "other/phobio-2.jpg",
          altText: "iPad with a yellow screen showing a trade-in experience for Sprint within Walgreens."
        },
        {
          src: "other/phobio-3.jpg",
          altText: "Screenshot of the Phobio intranet redesign."
        }
      ]
    },
    {
      title: "Helping legal teams manage legal matters and respond to litigation.",
      date: "2015-2016",
      company: "IBM Design",
      tags: [
        "Product design",
        "Visual design",
        "User research",
        "Design systems"
      ],
      paragraphs: [
        {
          text: "The first product I worked on at IBM was called StoredIQ for Legal. Approximately 90% of corporate cases are settled prior to the collection process because companies have no insight into their employee data. StoredIQ was created to eliminate the complexity, pain, and cost associated with managing legal matters and litigation. I was both a product designer and visual lead on the team. Here are some highlights from my time on the team:"
        },
        {
          list: [
            "Lead a visual update of the product to better align with the IBM Design Language.",
            "Participated in a user research session at the headquarters of a major automobile company based in LA. This helped us better understand the paralegals we were designing for and invaluable for planning our next release.",
            "Delivered designs for new features and improved experiences around data collection and legal matter management throughout two product release cycles.",
            "Embedding with our global engineering team for a 2-week \u201Cwar room\u201D in B\xF6blingen, Germany."
          ]
        }
      ],
      contact: {
        text: "If you\u2019re interested in learning more about this project please reach out. Teammate case studies: ",
        teammates: [
          {
            name: "McKenzie Carlile",
            link: "http://www.mckenziecarlile.com/ibm.html"
          },
          {
            name: "Chengqi Zhu",
            link: "http://chengqizhu.com/"
          }
        ]
      },
      images: [
        {
          src: "other/iq-1.jpg",
          altText: "Data collection detail page that lists task details and a list of users."
        },
        {
          src: "other/iq-2.jpg",
          altText: "Photo of me facilitating a journey map exercise during a user testing session with Toyota."
        },
        {
          src: "other/iq-3.jpg",
          altText: "Screenshot of a interview template creation process for paralegals."
        },
        {
          src: "other/iq-4.jpg",
          altText: "Dialog for adding custodians to a data requesting with a second screenshot of an empty state illustration in the back."
        },
        {
          src: "other/iq-5.jpg",
          altText: "Zoomed in detail image of the comment section of a task overview UI."
        }
      ]
    },
    {
      title: "A place to learn and share your coffee experiences with others.",
      date: "2018",
      tags: ["Product design", "Mobile design"],
      paragraphs: [
        {
          text: "Like with a lot of people, coffee is a big part of my daily routine. It\u2019s also a part of my work history and even more so for my wife, Caryn. So when we were looking for a project to work on together, it seemed like a great place to start. With her looking for more experience with React Native and me wanting to explore new tools and more mobile design, we decided to work on a coffee app that we called Brew. The goal was to create a place for beginners to learn more about coffee and to perfect different brew methods while also serving as a place for more experienced brewers to share their knowledge. It\u2019s an ongoing project, and one we pick up here and there when we\u2019re looking for a side project."
        }
      ],
      images: [
        {
          src: "other/brew-1.jpg",
          altText: "Three iPhone screens showing different pages within a DIY coffee brewing app."
        },
        {
          src: "other/brew-2.jpg",
          altText: "Three iPhone screens showing different pages within a DIY coffee brewing app."
        }
      ]
    }
  ]
};
const _imports_0 = "" + buildAssetsURL("other-1.CniHKWMj.webm");
const _imports_1 = "" + buildAssetsURL("other-1.CjVxBcqS.mp4");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectPreview",
  __ssrInlineRender: true,
  props: {
    copy: {}
  },
  setup(__props) {
    const currentSlide = ref(0);
    const getImgUrl = (path) => {
      return new URL(`../assets/imgs/${path}`, globalThis._importMeta_.url).href;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-b6c2e6d7><div class="content column" data-v-b6c2e6d7>`);
      if (__props.copy.images.length === 1) {
        _push(`<div class="preview-video" data-v-b6c2e6d7><video width="100%" muted autoplay loop playsinline disableRemotePlayback currentTime="0" alt="Video scrolling through the illustration overview page of the IBM Design Language." data-v-b6c2e6d7><source${ssrRenderAttr("src", _imports_0)} type="video/webm" data-v-b6c2e6d7><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-b6c2e6d7></video></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.images.length > 1) {
        _push(`<div class="custom-carousel" data-v-b6c2e6d7><div class="carousel-slide" data-v-b6c2e6d7><!--[-->`);
        ssrRenderList(__props.copy.images, (image, index) => {
          _push(`<img${ssrRenderAttr("src", getImgUrl(image.src))}${ssrRenderAttr("alt", image.altText)} style="${ssrRenderStyle(index === currentSlide.value ? null : { display: "none" })}" data-v-b6c2e6d7>`);
        });
        _push(`<!--]--></div><div class="carousel-controls" data-v-b6c2e6d7><button${ssrIncludeBooleanAttr(currentSlide.value === 0) ? " disabled" : ""} class="carousel-btn" data-v-b6c2e6d7> \u2039 </button><div class="carousel-pagination" data-v-b6c2e6d7><!--[-->`);
        ssrRenderList(__props.copy.images, (image, index) => {
          _push(`<span class="${ssrRenderClass([{ active: index === currentSlide.value }, "pagination-dot"])}" data-v-b6c2e6d7></span>`);
        });
        _push(`<!--]--></div><button${ssrIncludeBooleanAttr(currentSlide.value === __props.copy.images.length - 1) ? " disabled" : ""} class="carousel-btn" data-v-b6c2e6d7> \u203A </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="content left column" data-v-b6c2e6d7><p class="date" data-v-b6c2e6d7>${ssrInterpolate(__props.copy.company ? `${__props.copy.company} | ` : "")}${ssrInterpolate(__props.copy.date)}</p><h2 data-v-b6c2e6d7>${ssrInterpolate(__props.copy.title)}</h2><div class="tags" data-v-b6c2e6d7><!--[-->`);
      ssrRenderList(__props.copy.tags, (tag, index) => {
        _push(`<span data-v-b6c2e6d7>${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(__props.copy.paragraphs, (paragraph, index) => {
        _push(`<div data-v-b6c2e6d7>`);
        if (paragraph.text) {
          _push(`<p class="${ssrRenderClass({ quote: paragraph.withQuote })}" data-v-b6c2e6d7>${ssrInterpolate(paragraph.text)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (paragraph.list) {
          _push(`<ul data-v-b6c2e6d7><!--[-->`);
          ssrRenderList(paragraph.list, (item, index2) => {
            _push(`<li data-v-b6c2e6d7>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (__props.copy.contact) {
        _push(`<div data-v-b6c2e6d7><p data-v-b6c2e6d7>${ssrInterpolate(__props.copy.contact.text)}</p><!--[-->`);
        ssrRenderList(__props.copy.contact.teammates, (teammate, index) => {
          _push(`<a${ssrRenderAttr("href", teammate.link)} data-v-b6c2e6d7>${ssrInterpolate(teammate.name)}${ssrInterpolate(index !== __props.copy.contact.teammates.length - 1 ? ", " : "")}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.copy.link) {
        _push(`<a class="visit-link"${ssrRenderAttr("href", __props.copy.link)} data-v-b6c2e6d7>Visit the site</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectPreview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b6c2e6d7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "other",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(ssrRenderComponent(ProjectIntro, {
        copy: unref(copy).intro
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(copy).projects, (project, index) => {
        _push(ssrRenderComponent(ProjectPreview, {
          key: "project-" + index,
          copy: project
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$1$1, { active: "other" }, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/other.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=other-8fk-JsBH.mjs.map
