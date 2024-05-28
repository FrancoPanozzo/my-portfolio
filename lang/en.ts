export default {
  hero: {
    placeholder: 'Select a language',
    hi: 'Hi! My name is',
    i_am: "I'm a",
    role: 'web developer'
  },
  experience: {
    title: 'Professional experience',
    subtitle: 'development related... I was also delivery guy once',
    linkedin_cta: "Let's connect!",
    download_cv: 'Download my CV',
    jobs: [
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
    ],
    at: 'at'
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'a couple of my handpicked favorites',
    cta_question: 'Do you want a web app?',
    cta_button: 'Get in touch!',
    projects: [
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
  },
  about: {
    title: 'About me',
    subtitle: 'My preferred stack',
    text: [
      "Hi! I'm Franco Panozzo, a web dev from La Pampa, Argentina. I started coding with C++ and Java as part of a math competition, over 10 years ago. In 2020 I switched from studying medicine to web development and I've loved every moment working on the industry ever since. I currently work as a fullstack web developer, with a focus on frontend technologies and freelance projects.",
      "I'm passionate about what I do beyond the coding, and I'm always looking for new challenges to improve my skills. I'm a big fan of the Vue ecosystem, and I'm always looking out to learn the cutting edge technologies.",
      "Reading, football and learning languages are some of my hobbies, that's the reason I speak Spanish, English and French fluently."
    ]
  }
}
