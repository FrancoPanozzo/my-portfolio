export default {
  hero: {
    placeholder: 'Choisissez une langue',
    hi: "Salut! Je m'appelle",
    i_am: 'je suis un',
    role: 'développeur web'
  },
  experience: {
    title: 'Expérience professionnelle',
    subtitle: "en développement... J'ai aussi été livreur une fois",
    linkedin_cta: 'Connectons-nous !',
    download_cv: 'Téléchargez mon CV',
    jobs: [
      {
        company: 'TMC by Unilabs',
        title: 'Développeur Frontend',
        date: 'Rôle actuel',
        description:
          "Je dirige l'avenir de la formation en radiologie pour TMC Academy en développant des plateformes en ligne innovantes pour les spécialistes médicaux. J'ai conçu et développé une solution hautement réactive pour une application web existante. J'ai utilisé des technologies avancées telles que Microservices, Nuxt et Tailwind dans le cadre de méthodologies Agile.",
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
        title: 'Ingénieur Logiciel',
        date: 'Juillet 2023',
        description:
          "Membre clé de l'équipe Oculist, implémentant des fonctionnalités d'interface utilisateur de correspondance d'images d'apprentissage automatique. J'ai développé des filtres d'images et amélioré les onglets d'imagerie. J'ai contribué à l'équipe Chieftain en me concentrant sur le web scraping et les algorithmes d'apprentissage automatique pour améliorer la reconnaissance et l'application des infractions.",
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
        title: 'Développeur Front-End',
        date: 'Juin 2022',
        description:
          "Faisant partie d'une petite équipe d'ingénierie, je migre des applications SaaS vers une application web unifiée. J'ai utilisé Nuxt, Vuex, Vue et Element UI pour créer des interfaces utilisateur interactives. J'ai géré l'interface utilisateur des influenceurs, en veillant à une intégration transparente avec les API REST. J'ai participé à des pratiques Agile avec des réunions régulières et des démonstrations.",
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
        title: 'Développeur Web',
        date: 'Mai 2021',
        description:
          "Développement de sites web entièrement réactifs et refonte de thèmes Wordpress personnalisés pour les petites entreprises. Création d'une application monopage en utilisant Vanilla JS pour présenter le travail de MSF sur les pandémies. Intégration de solutions logicielles et de bibliothèques tierces pour améliorer les fonctionnalités du site web.",
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
    ],
    at: 'chez'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'quelques-uns de mes favoris',
    cta_question: 'Vous voulez une application web?',
    cta_button: 'Contactez-moi!',
    projects: [
      {
        title: 'Zenllo',
        img: '/img/zenllo.jpeg',
        date: 'Mai 2024',
        description:
          'Application web MVP pour une startup marketing. Comprend un système de connexion avec Google SSO en utilisant Supabase comme backend. Intégrations avec les API Google Ads et Meta Ads pour la logique métier personnalisée. Mode sombre et internationalisation en bonus.',
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
        date: 'Février 2024',
        description:
          "Une page de destination pour une auto-école espagnole. Intégration de Contenful CMS pour des mises à jour de contenu faciles. Connecté à un outil d'analyse pour suivre leur trafic (jeu de mots intentionnel) et leurs conversions.",
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
      {
        title: 'Sana Studio',
        img: '/img/sana.jpeg',
        date: 'Août 2023',
        description:
          'Site web pour une agence créative néerlandaise. Conçu en adaptant un modèle pour correspondre au budget et aux besoins des clients. Implémenté en utilisant SSR pour un bon référencement, des temps de chargement rapides et une fiabilité. Intégration de Contenful CMS pour une gestion facile du contenu.',
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
  },
  about: {
    title: 'À propos',
    subtitle: 'Mon stack préféré',
    text: [
      "Salut! Je m'appelle Franco Panozzo, un développeur web de La Pampa, Argentine. J'ai commencé à coder avec C++ et Java dans le cadre d'une compétition mathématique, il y a plus de 10 ans. En 2020, j'ai abandonné mes études de médecine pour me consacrer au développement web et j'ai adoré chaque instant de travail dans l'industrie depuis. Je travaille actuellement en tant que développeur web fullstack, avec une spécialisation dans les technologies frontend et les projets freelance.",
      "Je suis passionné par ce que je fais au-delà du codage, et je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences. Je suis un grand fan de l'écosystème Vue, et je suis toujours à l'affût des dernières technologies.",
      "La lecture, le football et l'apprentissage des langues font partie de mes hobbies, c'est pourquoi je parle couramment l'espagnol, l'anglais et le français."
    ]
  }
}
