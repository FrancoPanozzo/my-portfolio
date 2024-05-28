export default {
  hero: {
    placeholder: 'Selecciona un idioma',
    hi: '¡Hola! Me llamo',
    i_am: 'soy un',
    role: 'desarrollador web'
  },
  experience: {
    title: 'Experiencia laboral',
    subtitle: 'en desarrollo... También fui repartidor una vez',
    linkedin_cta: '¡Conectemos!',
    download_cv: 'Descarga mi CV',
    jobs: [
      {
        company: 'TMC by Unilabs',
        title: 'Desarrollador Frontend',
        date: 'Rol actual',
        description:
          'Liderando el futuro de la formación en radiología para TMC Academy mediante el desarrollo de plataformas en línea innovadoras para especialistas médicos. Diseñé y desarrollé una solución altamente receptiva para una aplicación web existente. Utilicé tecnologías avanzadas como Microservices, Nuxt y Tailwind dentro de metodologías ágiles.',
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
        title: 'Ingeniero de Software',
        date: 'Julio 2023',
        description:
          'Miembro clave del equipo de Oculist, implementando características de interfaz de usuario de coincidencia de imágenes de aprendizaje automático. Desarrollé filtros de imágenes y mejoré las pestañas de imágenes. Contribuí al equipo de Chieftain enfocándome en el web scraping y los algoritmos de aprendizaje automático para mejorar el reconocimiento y la aplicación de infracciones.',
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
        title: 'Desarrollador Frontend',
        date: 'Junio 2022',
        description:
          'Parte de un pequeño equipo de ingeniería que migra aplicaciones SaaS a una aplicación web unificada. Utilicé Nuxt, Vuex, Vue y Element UI para crear interfaces de usuario interactivas. Me encargué de la interfaz de usuario de Influencers, asegurando una integración perfecta con las API REST. Participé en prácticas ágiles con reuniones diarias y demostraciones regulares.',
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
        title: 'Desarrollador Web',
        date: 'Mayo 2021',
        description:
          'Desarrollé sitios web totalmente receptivos y rediseñé temas personalizados de Wordpress para pequeñas empresas. Creé una aplicación de una sola página utilizando Vanilla JS para mostrar el trabajo de MSF en pandemias. Integré soluciones y bibliotecas de software de terceros para mejorar la funcionalidad del sitio web.',
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
    at: 'en'
  },
  portfolio: {
    title: 'Portafolio',
    subtitle: 'algunos de mis favoritos',
    cta_question: '¿Quieres una aplicación web?',
    cta_button: '¡Ponte en contacto!',
    projects: [
      {
        title: 'Zenllo',
        img: '/img/zenllo.jpeg',
        date: 'Mayo 2024',
        description:
          'Aplicación web MVP para una startup de marketing. Incluye un sistema de inicio de sesión con Google SSO aprovechando Supabase como backend. Integraciones con las API de Google Ads y Meta Ads para la lógica de negocio personalizada. Modo oscuro e internacionalización como bonificación.',
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
        date: 'Febrero 2024',
        description:
          'Una página de destino para una autoescuela española. Integración de Contenful CMS para actualizaciones de contenido fáciles. Conectado a una herramienta de análisis para seguir su tráfico (juego de palabras intencionado) y conversiones.',
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
        date: 'Agosto 2023',
        description:
          'Sitio web para una agencia creativa holandesa. Diseñado adaptando una plantilla para ajustarse al presupuesto y necesidades de los clientes. Implementado utilizando SSR para un buen SEO, tiempos de carga rápidos y confiabilidad. Integración de Contenful CMS para una gestión fácil del contenido.',
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
    title: 'Sobre mí',
    subtitle: 'Mi stack preferido',
    text: [
      '¡Hola! Soy Franco Panozzo, un desarrollador web de La Pampa, Argentina. Comencé a programar con C++ y Java como parte de una competencia de matemáticas hace más de 10 años. En 2020, cambié de estudiar medicina a desarrollo web y desde entonces he disfrutado cada momento trabajando en la industria. Actualmente trabajo como desarrollador web fullstack, con un enfoque en tecnologías frontend y proyectos freelance.',
      'Soy apasionado por lo que hago más allá de la programación, y siempre estoy buscando nuevos desafíos para mejorar mis habilidades. Soy un gran fanático del ecosistema Vue y siempre estoy atento para aprender las últimas tecnologías.',
      'La lectura, el fútbol y aprender idiomas son algunos de mis pasatiempos, por eso hablo español, inglés y francés con fluidez.'
    ]
  }
}
