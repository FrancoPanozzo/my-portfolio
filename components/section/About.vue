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
        <SectionTitle :title="$t('about.title')" class="mb-8" />

        <div class="flex flex-col gap-8 mb-16 text-lg md:text-xl">
          <p v-for="p in $tm('about.text')">
            {{ p.loc.source }}
          </p>
        </div>
      </div>
      <div class="relative hidden w-[350px] lg:block">
        <div class="absolute inset-0 gradient"></div>
        <NuxtImg class="object-cover w-full h-full" src="/img/me-cartoon.png" />
      </div>
    </div>
    <SectionTitle :title="$t('about.subtitle')" size="md" class="mb-8" />
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
