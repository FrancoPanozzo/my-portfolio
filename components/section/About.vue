<script lang="ts" setup>
const { t, tm } = useI18n({
  useScope: 'local'
})

const techStack = [
  {
    icon: 'logos:vue',
    name: 'Vue.js'
  },
  {
    icon: 'logos:nuxt-icon',
    name: 'Nuxt.js'
  },
  {
    icon: 'logos:javascript',
    name: 'Javascript'
  },
  {
    icon: 'logos:typescript-icon',
    name: 'Typescript'
  },
  {
    icon: 'logos:tailwindcss-icon',
    name: 'Tailwind CSS'
  }
]

interface tm<T> {
  loc: {
    source: T
  }
}
</script>

<template>
  <Container class="mb-32">
    <div class="flex gap-16">
      <div class="flex-1">
        <SectionTitle :title="t('title')" class="mb-8" />

        <div class="flex flex-col gap-8 mb-16 text-lg md:text-xl">
          <p v-for="p in tm('text') as tm<string>[]">
            {{ p.loc.source }}
          </p>
        </div>
      </div>
      <div class="relative hidden w-[350px] lg:block">
        <div class="absolute inset-0 gradient"></div>
        <NuxtImg class="object-cover w-full h-full" src="/img/me-cartoon.png" />
      </div>
    </div>
    <SectionTitle :title="t('subtitle')" size="md" class="mb-8" />
    <div class="flex flex-col gap-8 md:gap-10 md:flex-row">
      <div class="flex items-center gap-2" v-for="tech in techStack">
        <Icon :name="tech.icon" class="size-9" /><span class="font-medium">{{ tech.name }}</span>
      </div>
    </div>
  </Container>

  <Separator />
</template>

<style>
.gradient {
  background: radial-gradient(circle, rgba(254, 252, 242, 0) 75%, rgba(254, 252, 242, 1) 80%);
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "About me",
    "subtitle": "My preferred stack",
    "text": [
      "Hi! I'm Franco Panozzo, a web dev from La Pampa, Argentina. I started coding with C++ and Java as part of a math competition, over 10 years ago. In 2020 I switched from studying medicine to web development and I've loved every moment working on the industry ever since. I currently work as a fullstack web developer, with a focus on frontend technologies and freelance projects.",
      "I'm passionate about what I do beyond the coding, and I'm always looking for new challenges to improve my skills. I'm a big fan of the Vue ecosystem, and I'm always looking out to learn the cutting edge technologies.",
      "Reading, football and learning languages are some of my hobbies, that's the reason I speak Spanish, English and French fluently."
    ]
  },
  "fr": {
    "title": "À propos",
    "subtitle": "Mon stack préféré",
    "text": [
      "Salut! Je m'appelle Franco Panozzo, un développeur web de La Pampa, Argentine. J'ai commencé à coder avec C++ et Java dans le cadre d'une compétition mathématique, il y a plus de 10 ans. En 2020, j'ai abandonné mes études de médecine pour me consacrer au développement web et j'ai adoré chaque instant de travail dans l'industrie depuis. Je travaille actuellement en tant que développeur web fullstack, avec une spécialisation dans les technologies frontend et les projets freelance.",
      "Je suis passionné par ce que je fais au-delà du codage, et je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences. Je suis un grand fan de l'écosystème Vue, et je suis toujours à l'affût des dernières technologies.",
      "La lecture, le football et l'apprentissage des langues font partie de mes hobbies, c'est pourquoi je parle couramment l'espagnol, l'anglais et le français."
    ]
  },
  "es": {
    "title": "Sobre mí",
    "subtitle": "Mi stack preferido",
    "text": [
      "¡Hola! Soy Franco Panozzo, un desarrollador web de La Pampa, Argentina. Comencé a programar con C++ y Java como parte de una competencia de matemáticas hace más de 10 años. En 2020, cambié de estudiar medicina a desarrollo web y desde entonces he disfrutado cada momento trabajando en la industria. Actualmente trabajo como desarrollador web fullstack, con un enfoque en tecnologías frontend y proyectos freelance.",
      "Soy apasionado por lo que hago más allá de la programación, y siempre estoy buscando nuevos desafíos para mejorar mis habilidades. Soy un gran fanático del ecosistema Vue y siempre estoy atento para aprender las últimas tecnologías.",
      "La lectura, el fútbol y aprender idiomas son algunos de mis pasatiempos, por eso hablo español, inglés y francés con fluidez."
    ]
  }
}
</i18n>
