<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local'
})

const cardsData = [
  {
    title: 'Zenllo',
    img: '/img/zenllo.jpeg',
    date: 'May 2024',
    description:
      'Web app MVP for a marketing startup. Includes a login system with Google SSO leveraging Supabase as a backend. Integrations with Google Ads and Meta Ads APIs for the custom business logic. Dark mode and internationalization as bonus.',
    url: 'https://zenllo.vercel.app/',
    tech: [
      {
        icon: 'logos:vue',
        name: 'Vue 3'
      },
      {
        icon: 'logos:nuxt-icon',
        name: 'Nuxt 3'
      },
      {
        icon: 'logos:typescript-icon',
        name: 'Typescript'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:google-ads',
        name: 'Google Ads API'
      },
      {
        icon: 'logos:meta-icon',
        name: 'Meta Ads API'
      }
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
      {
        icon: 'logos:vue',
        name: 'Vue 3'
      },
      {
        icon: 'logos:nuxt-icon',
        name: 'Nuxt 3'
      },
      {
        icon: 'logos:typescript-icon',
        name: 'Typescript'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:contentful',
        name: 'Contentful'
      },
      {
        icon: 'logos:google-analytics',
        name: 'Google Analytics'
      }
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
      {
        icon: 'logos:vue',
        name: 'Vue 3'
      },
      {
        icon: 'logos:nuxt-icon',
        name: 'Nuxt 3'
      },
      {
        icon: 'logos:typescript-icon',
        name: 'Typescript'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:contentful',
        name: 'Contentful'
      }
    ]
  }
]
</script>

<template>
  <Container>
    <SectionTitle :title="t('title')" :subtitle="t('subtitle')" />
    <div class="flex flex-col gap-16 md:gap-12">
      <ProjectCard v-for="project in cardsData" :project="project" />
    </div>

    <div class="mt-24 flex flex-col gap-6 mx-auto w-fit items-center">
      <span class="text-lg">{{ t('cta_question') }}</span>
      <a href="https://www.the-zeppelin.com/?ref=personal-portfolio" target="_blank">
        <Button class="bg-accent flex items-center gap-2">
          <Icon name="fa6-solid:arrow-up-right-from-square" />{{ t('cta_button') }}
        </Button></a
      >
    </div>
  </Container>

  <Separator />
</template>

<i18n lang="json">
{
  "en": {
    "title": "Portfolio",
    "subtitle": "a couple of my handpicked favorites",
    "cta_question": "Do you want a web app?",
    "cta_button": "Get in touch!"
  },
  "fr": {
    "title": "Portfolio",
    "subtitle": "quelques-uns de mes favoris",
    "cta_question": "Vous voulez une application web?",
    "cta_button": "Contactez-moi!"
  },
  "es": {
    "title": "Portafolio",
    "subtitle": "algunos de mis favoritos",
    "cta_question": "¿Quieres una aplicación web?",
    "cta_button": "¡Ponte en contacto!"
  }
}
</i18n>
