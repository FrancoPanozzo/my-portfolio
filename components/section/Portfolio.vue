<script lang="ts" setup>
const cardsData = [
  {
    title: 'Zenllo',
    img: '/img/zenllo.jpeg',
    date: 'May 2024',
    description:
      'Web app MVP for a marketing startup. Includes a login system with Google SSO leveraging Supabase as a backend. Integrations with Google Ads and Meta Ads APIs for the custom business logic. Dark mode and internationalization as bonus.',
    url: 'https://zenllo.vercel.app/',
    tech: [
      'logos:vue',
      'logos:nuxt-icon',
      'logos:typescript-icon',
      'logos:tailwindcss-icon',
      'logos:google-ads',
      'logos:meta-icon',
      'logos:supabase-icon'
    ]
  },
  {
    title: 'Rockauto Escuelas',
    img: '/img/rockauto.jpeg',
    date: 'February 2024',
    description:
      'A landing page for a spanish driving school. Contenful CMS integration for easy content updates. Hooked up to analytics tool to follow their traffic (pun intended) and conversions.',
    url: 'https://www.rockautoescuelas.com/',
    tech: [
      'logos:vue',
      'logos:nuxt-icon',
      'logos:typescript-icon',
      'logos:tailwindcss-icon',
      'logos:contentful',
      'logos:google-analytics'
    ]
  },

  // {
  //   title: 'The Zeppelin',
  //   img: '/img/zeppelin.jpeg',
  //   date: 'January 2024',
  //   description:
  //     'My digital agency, where I offer my services as a web developer. Adapted a template to quickly spin up a business website. Integrated TypeForm and Calendlly for easy lead generation.',
  //   url: 'https://www.the-zeppelin.com/',
  //   tech: ['logos:vue', 'logos:nuxt-icon', 'logos:typescript-icon', 'logos:tailwindcss-icon']
  // },
  {
    title: 'Sana Studio',
    img: '/img/sana.jpeg',
    date: 'August 2023',
    description:
      'Website for a dutch creative agency. Designed by adapting a template to fit the clients budget and needs. Implemented using SSR for good SEO, fast loading times and reliability. Integrated Contenful CMS for easy content management.',
    url: 'https://www.sana-studio.nl/',
    tech: [
      'logos:vue',
      'logos:nuxt-icon',
      'logos:typescript-icon',
      'logos:tailwindcss-icon',
      'logos:contentful'
    ]
  }
]
</script>

<template>
  <Container>
    <SectionTitle title="Portfolio" subtitle="a couple of my handpicked favorites" />
    <div class="flex flex-col gap-10">
      <ProjectCard v-for="project in cardsData" :project="project" />
    </div>
  </Container>

  <Separator />
</template>
