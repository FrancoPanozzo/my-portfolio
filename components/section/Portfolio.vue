<script lang="ts" setup>
const { t, tm } = useI18n({
  useScope: 'local'
})

console.log(tm('projects')[0].img.loc.source)
</script>

<template>
  <Container>
    <SectionTitle :title="t('title')" :subtitle="t('subtitle')" />
    <div class="flex flex-col gap-16 md:gap-12">
      <ProjectCard v-for="project in tm('projects')" :project="project" />
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
    "cta_button": "Get in touch!",
    "projects": [
      {
        "title": "Zenllo",
        "img": "/img/zenllo.jpeg",
        "date": "May 2024",
        "description": "Web app MVP for a marketing startup. Includes a login system with Google SSO leveraging Supabase as a backend. Integrations with Google Ads and Meta Ads APIs for the custom business logic. Dark mode and internationalization as bonus.",
        "url": "https://zenllo.vercel.app/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:google-ads",
            "name": "Google Ads API"
          },
          {
            "icon": "logos:meta-icon",
            "name": "Meta Ads API"
          }
        ]
      },
      {
        "title": "Rockauto Escuelas",
        "img": "/img/rockauto.jpeg",
        "date": "February 2024",
        "description": "A landing page for a spanish driving school. Contenful CMS integration for easy content updates. Hooked up to analytics tool to follow their traffic (pun intended) and conversions.",
        "url": "https://www.rockautoescuelas.com/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          },
          {
            "icon": "logos:google-analytics",
            "name": "Google Analytics"
          }
        ]
      },
      {
        "title": "Sana Studio",
        "img": "/img/sana.jpeg",
        "date": "August 2023",
        "description": "Website for a dutch creative agency. Designed by adapting a template to fit the clients budget and needs. Implemented using SSR for good SEO, fast loading times and reliability. Integrated Contenful CMS for easy content management.",
        "url": "https://www.sana-studio.nl/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          }
        ]
      }
    ]
  },
  "fr": {
    "title": "Portfolio",
    "subtitle": "quelques-uns de mes favoris",
    "cta_question": "Vous voulez une application web?",
    "cta_button": "Contactez-moi!",
    "projects": [
      {
        "title": "Zenllo",
        "img": "/img/zenllo.jpeg",
        "date": "Mai 2024",
        "description": "Application web MVP pour une startup marketing. Comprend un système de connexion avec Google SSO en utilisant Supabase comme backend. Intégrations avec les API Google Ads et Meta Ads pour la logique métier personnalisée. Mode sombre et internationalisation en bonus.",
        "url": "https://zenllo.vercel.app/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:google-ads",
            "name": "Google Ads API"
          },
          {
            "icon": "logos:meta-icon",
            "name": "Meta Ads API"
          }
        ]
      },
      {
        "title": "Rockauto Escuelas",
        "img": "/img/rockauto.jpeg",
        "date": "Février 2024",
        "description": "Une page de destination pour une auto-école espagnole. Intégration de Contenful CMS pour des mises à jour de contenu faciles. Connecté à un outil d'analyse pour suivre leur trafic (jeu de mots intentionnel) et leurs conversions.",
        "url": "https://www.rockautoescuelas.com/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          },
          {
            "icon": "logos:google-analytics",
            "name": "Google Analytics"
          }
        ]
      },
      {
        "title": "Sana Studio",
        "img": "/img/sana.jpeg",
        "date": "August 2023",
        "description": "Site web pour une agence créative néerlandaise. Conçu en adaptant un modèle pour correspondre au budget et aux besoins des clients. Implémenté en utilisant SSR pour un bon référencement, des temps de chargement rapides et une fiabilité. Intégration de Contenful CMS pour une gestion facile du contenu.",
        "url": "https://www.sana-studio.nl/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          }
        ]
      }
    ]
  },
  "es": {
    "title": "Portafolio",
    "subtitle": "algunos de mis favoritos",
    "cta_question": "¿Quieres una aplicación web?",
    "cta_button": "¡Ponte en contacto!",
    "projects": [
      {
        "title": "Zenllo",
        "img": "/img/zenllo.jpeg",
        "date": "Mayo 2024",
        "description": "Aplicación web MVP para una startup de marketing. Incluye un sistema de inicio de sesión con Google SSO aprovechando Supabase como backend. Integraciones con las API de Google Ads y Meta Ads para la lógica de negocio personalizada. Modo oscuro e internacionalización como bonificación.",
        "url": "https://zenllo.vercel.app/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:google-ads",
            "name": "Google Ads API"
          },
          {
            "icon": "logos:meta-icon",
            "name": "Meta Ads API"
          }
        ]
      },
      {
        "title": "Rockauto Escuelas",
        "img": "/img/rockauto.jpeg",
        "date": "Febrero 2024",
        "description": "Una página de destino para una autoescuela española. Integración de Contenful CMS para actualizaciones de contenido fáciles. Conectado a una herramienta de análisis para seguir su tráfico (juego de palabras intencionado) y conversiones.",
        "url": "https://www.rockautoescuelas.com/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          },
          {
            "icon": "logos:google-analytics",
            "name": "Google Analytics"
          }
        ]
      },
      {
        "title": "Sana Studio",
        "img": "/img/sana.jpeg",
        "date": "Agosto 2023",
        "description": "Sitio web para una agencia creativa holandesa. Diseñado adaptando una plantilla para ajustarse al presupuesto y necesidades de los clientes. Implementado utilizando SSR para un buen SEO, tiempos de carga rápidos y confiabilidad. Integración de Contenful CMS para una gestión fácil del contenido.",
        "url": "https://www.sana-studio.nl/",
        "tech": [
          {
            "icon": "logos:vue",
            "name": "Vue 3"
          },
          {
            "icon": "logos:nuxt-icon",
            "name": "Nuxt 3"
          },
          {
            "icon": "logos:typescript-icon",
            "name": "Typescript"
          },
          {
            "icon": "logos:tailwindcss-icon",
            "name": "Tailwind"
          },
          {
            "icon": "logos:contentful",
            "name": "Contentful"
          }
        ]
      }
    ]
  }
}
</i18n>
