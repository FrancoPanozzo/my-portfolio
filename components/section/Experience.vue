<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local'
})

const jobs = [
  {
    company: 'TMC by Unilabs',
    title: 'Frontend Developer',
    date: 'Current role',
    description:
      'Leading the future of radiology training for TMC Academy by developing innovative online platforms for medical specialists. Designed and developed a highly responsive solution for an existing web app. Utilized advanced technologies such as Microservices, Nuxt, and Tailwind within Agile methodologies.',
    tech: [
      {
        icon: 'logos:nuxt-icon',
        name: 'Nuxt'
      },
      {
        icon: 'logos:vue',
        name: 'Vue'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:typescript-icon',
        name: 'Typescript'
      }
    ],
    url: 'https://www.telemedicineclinic.com/'
  },
  {
    company: 'Corsearch',
    title: 'Software Engineer',
    date: 'July 2023',
    description:
      'Key member of the Oculist team, implementing machine learning image matching UI features. Developed image filters and enhanced imaging tabs. Contributed to the Chieftain team by focusing on web scraping and machine learning algorithms to improve infringement recognition and enforcement.',
    tech: [
      {
        icon: 'logos:vue',
        name: 'Vue'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:typescript-icon',
        name: 'Typescript'
      }
    ],
    url: 'https://corsearch.com'
  },
  {
    company: 'The Cirqle',
    title: 'Front End Developer',
    date: 'June 2022',
    description:
      'Part of a small engineering team migrating SaaS applications to a unified web-app. Utilized Nuxt, Vuex, Vue, and Element UI to create interactive user interfaces. Owned the Influencers UI, ensuring seamless integration with REST APIs. Engaged in Agile practices with regular standups and demos.',
    tech: [
      {
        icon: 'logos:nuxt-icon',
        name: 'Nuxt'
      },
      {
        icon: 'logos:vue',
        name: 'Vue'
      },
      {
        icon: 'logos:tailwindcss-icon',
        name: 'Tailwind'
      },
      {
        icon: 'logos:element',
        name: 'Element UI'
      }
    ],
    url: 'https://thecirqle.com'
  },
  {
    company: 'Zetenta.com',
    title: 'Web Developer',
    date: 'May 2021',
    description:
      "Developed fully responsive websites and redesigned custom Wordpress themes for small businesses. Created a single-page application using Vanilla JS to showcase MSF's work on pandemics. Integrated third-party software solutions and libraries to enhance website functionality.",
    tech: [
      {
        icon: 'logos:javascript',
        name: 'Vanilla JS'
      },
      {
        icon: 'logos:wordpress-icon',
        name: 'Wordpress'
      },
      {
        icon: 'logos:php',
        name: 'PHP'
      },
      {
        icon: 'logos:vue',
        name: 'Vue'
      }
    ],
    url: 'https://zetenta.com'
  }
]
</script>

<template>
  <Container>
    <SectionTitle :title="t('title')" :subtitle="t('subtitle')" />
    <div class="flex gap-8">
      <div class="w-2 bg-foreground/5 rounded-full"></div>

      <div class="flex flex-col gap-24 mb-12">
        <div v-for="job in jobs" class="relative">
          <div
            class="rounded-full size-4 bg-accent absolute -left-9 -translate-x-1.5 translate-y-8 scale-75"
          ></div>
          <JobEntry :job="job" />
        </div>
      </div>
    </div>
    <div class="mt-12 flex flex-col items-stretch sm:items-center gap-4 mx-auto sm:flex-row w-fit">
      <a href="https://www.linkedin.com/in/franco-panozzo/" target="_blank">
        <Button class="bg-accent flex items-center gap-2 w-full justify-center">
          <Icon name="fa6-brands:linkedin-in" />
          {{ t('linkedin_cta') }}</Button
        ></a
      >
      <a href="/franco-panozzo-cv.pdf" download>
        <Button class="flex items-center gap-2"
          ><Icon name="fa6-solid:download" />{{ t('download_cv') }}</Button
        ></a
      >
    </div>
  </Container>

  <Separator />
</template>

<i18n lang="json">
{
  "en": {
    "title": "Professional experience",
    "subtitle": "development related... I was also delivery guy once",
    "linkedin_cta": "Let's connect!",
    "download_cv": "Download my CV"
  },
  "fr": {
    "title": "Expérience professionnelle",
    "subtitle": "en développement... J'ai aussi été livreur une fois",
    "linkedin_cta": "Connectons-nous!",
    "download_cv": "Téléchargez mon CV"
  },
  "es": {
    "title": "Experiencia laboral",
    "subtitle": "en desarrollo... También fui repartidor una vez",
    "linkedin_cta": "¡Conectemos!",
    "download_cv": "Descarga mi CV"
  }
}
</i18n>
