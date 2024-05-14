<script lang="ts" setup>
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
</script>

<template>
  <Container class="mb-32">
    <SectionTitle title="About me" />

    <div class="flex flex-col gap-8 text-lg mb-14">
      <p>
        My name is Franco Panozzo, I'm a web developer from La Pampa, Argentina 🇦🇷. I started coding
        with C++ and Java as part of a math competition, over 10 years ago. In 2020 I switched from
        studying medicine to web development and I've loved every moment working on the industry
        ever since.
        <strong class="underline decoration-dashed font-normal decoration-[#f35b25]"
          >I currently work as a fullstack web developer</strong
        >, with a focus on frontend technologies and freelance projects.
      </p>
      <p>
        I'm passionate about what I do beyond the coding, and I'm always looking for new challenges
        to improve my skills.
        <strong class="underline decoration-dashed font-normal decoration-[#0cca98]"
          >I'm a big fan of the Vue ecosystem</strong
        >, and I'm always looking out to learn the cutting edge technologies.
      </p>
      <p>
        Reading, football and learning languages are some of my hobbies, that's the reason
        <strong class="underline decoration-dashed font-normal decoration-[#f3558e]"
          >I speak Spanish, English and French fluently.</strong
        >
      </p>
    </div>

    <SectionTitle title="My preferred stack" size="md" class="mb-8" />
    <div class="flex md:gap-10 flex-col md:flex-row gap-8">
      <div class="flex gap-2 items-center" v-for="tech in techStack">
        <Icon :name="tech.icon" class="size-9" /><span class="font-medium">{{ tech.name }}</span>
      </div>
    </div>
  </Container>

  <Separator />
</template>
