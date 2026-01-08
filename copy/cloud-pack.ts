export default {
  intro: {
    title: 'IBM Cloud Pak for Security',
    subtitle:
      'Designing a common platform to solve security workers’ pain points.',
    description:
      'On Cloud Pak for Security, I designed experiences for our security platform. This included working with our many product teams to develop common patterns and workflows that were shared across teams. It also included working to understand the needs of security workers so that we could deliver experiences that didn’t just align the designs for our different tools or applications, but that solved our users’ problems and allowed them to detect, investigate, and respond to threats without having to jump between disconnected tools and workflows.',
    role: 'Product Designer, 2020–Present',
    teammates: [
      {
        name: 'Katie Orenstein',
        link: 'http://katieorenste.in/',
        role: ' Design Lead',
      },
      {
        name: 'Peter Vachon',
        link: 'https://www.petervachon.com/',
        role: ' Design Lead',
      },
      {
        name: 'Terra Banal',
        link: 'https://www.linkedin.com/in/terradesigns/',
        role: ' Visual Designer',
      },
      {
        name: 'Michelle Chen',
        link: 'https://www.linkedin.com/in/michellechen929/',
        role: ' Design Researcher',
      },
    ],
  },
  problem: {
    title: 'The problem',
    subtitle:
      'With a growing amount of tools & data spread across large companies, how do they stay secure? ',
    paragraphs: [
      'For businesses today, their security data is spread across different tools and data sources. In most cases, those tools and data sources are all separate and are not connected or integrated. Cloud Pak for Security was created to help solve that problem: connecting your tools and data sources on an open platform to help you uncover threats, gain insights, and respond to threats in a unified experience.',
      'For our platform design team, the problem was also a design system problem. IBM Security has a large portfolio of applications that were built by different teams. They often don’t use the same components or patterns. We weren’t only designing new patterns or solving user problems, we were aligning existing products and understanding the pain points of the designers across IBM Security.',
    ],
  },
  processQuote: {
    quote:
      '“Optimization for our processes and an understanding of areas where we can improve would be huge for us.”',
    author: 'From Security Analyst user testing session',
  },
  process: {
    title: 'Our process',
    subtitle: 'Solving problems to help other people solve problems.',
    paragraphs: [
      'Our team’s process typically included collaboration with product management and our development teams throughout our work. We’d plan and groom for our sprints and releases, then work to understand and define the user needs and business goals. The design team would explore, iterate, and test our solutions while continuing to align with the larger team along the way. With the development team, we’d work through any existing technical restraints, and provide design support while the designs were developed.',
      'Then we’d pick up a new story and start from the beginning. This was our process throughout my time on the team. It allowed us to stay aligned across our smaller teams, and quickly deliver solutions that could scale as we moved forward. One specific project that conveys this process, as well as the problems described before, is the work I lead around the platform’s dashboarding framework.',
      'Security workers have a growing amount and type of data coming from a variety of places that they need displayed within dashboards, and the jobs they do based on this data varies for each user. On top of this, the product teams coming to the platform and building these dashboards didn’t know where to begin. This is where our work came in.',
    ],
  },
  scalable: {
    subtitle:
      'A scalable system for users to create and customize security dashboards.',
    paragraphs: [
      'From a design process standpoint, our team divides larger stories into three phases: Understanding, Exploration, and Delivery. The process takes two to three two-week sprints and for this work, I utilized 3 sprints.',
      'To begin, I spent the first sprint working with product managementt to understand the business requirements and user needs, working with development to understanding technical requirements and existing systems, and working with the rest of our design team to elaborate on user painpoints and our existing design patterns.',
      'Our security team has quite a larger collection of different types of users. For this work we focused on three specific users: a security analyst who is investigating and responding to threats, a security operations center (SOC) manager who is coordinating his team and managing open tickets, and a security executive who is interested in a high level overview for their organization. On top of these users, we also focused on how our solution would work for our design users: other designers and teams building dashboards for their applications. With our users identified, we then started to explore, iterate, and test solutions that would meet their needs.',
    ],
  },
  planning: {
    paragraphs: [
      'To start my explorations, I first created a variety of user flows us our team’s <a href="https://www.andilozano.com/user-flow-kit" target="_blank">user flow kit</a> (created by Andi Lozano and Paula Le). This allowed me to quickly explore different options for creating, configuring, and customizing dashboards and then discuss with product management and development. While aligning on these user flows, we evaluated how they would solve the needs of the users we had identified. How would a security analyst create a dashboard to investigate threats relevant to their organization or how might they use a dashboard to quickly drill down based on an insight they’ve discovered?',
      'With questions like that in mind we began planning for our user testing. Lead by our design researcher, Michelle, we tested a combination of mid and high fidelity prototypes with 5–10 users. We used these sessions to validate designs and further understand our users and their needs.',
      'Outside of validating some of our design decisions, key findings from these sessions included a need to clearly convey the relationship between a widget and the data it’s conveying, the need to visualize the same data query in multiple ways, and the users tendency to quickly duplicate and edit existing dashboards and widgets.',
    ],
  },
  peterQuote: {
    quote:
      '“Derrick’s ability to leverage existing patterns, explore different solutions, and include delightful moments within designs while understanding the entire user flow results in thoughtful experiences.”',
    author:
      'Peter Vachon, Design Principal and Cloud Pak for Security Design Lead',
  },
  findings: {
    subtitle:
      'User research gave us a solution that not only scaled but solved real user needs',
    paragraphs: [
      'With the findings from these sessions, I continued to refine the designs for the MVP version of our dashboarding experience. One of our big challenges was that given our timeline and the limitations we faced, we had to plan for just that: an MVP version. Keeping this in mind, I prototyped interactions beyond the scope of our work in order to see how well what we would be delivering would scale and to help us plan how to continue improving the experience. This included using Flinto, an animated prototyping tool, to explore future interactions like searching within the widget library, card layouts to address the findings mentioned before, and more advanced ways to customize their dashboards.',
      'From here, I worked with our visual designer, Terra, to deliver high fidelity redlines to our development team. With this work, we not only updated the existing designs to be consistent with our current design language, but our users, both security users and application teams, now have a way to create, configure, and customize dashboards and their widgets within Cloud Pak for Security.',
    ],
  },
  next: {
    title: 'What’s next',
    paragraphs: [
      'Our team is currently working on a variety of projects including account creations, multi-account management, and empowering developers to build applications, add-ons, or integrations on our platform. This work is ongoing and I can’t currently publish any examples but please reach out for additional work samples.',
    ],
  },
}
