<script lang="ts" setup>
const socialData = [
  {
    icon: 'fa6-brands:linkedin-in',
    url: 'https://www.linkedin.com/in/franco-panozzo/'
  },
  {
    icon: 'fa6-brands:github',
    url: 'https://github.com/FrancoPanozzo'
  },
  {
    icon: 'fa6-brands:whatsapp',
    url: 'https://github.com/FrancoPanozzo'
  },
  {
    icon: 'fa6-regular:envelope',
    url: 'https://github.com/FrancoPanozzo'
  }
]
</script>

<template>
  <div class="container flex justify-end max-w-screen-lg px-5 mx-auto lg:px-0">
    <LanguageSelect />
  </div>
  <Container class="relative mt-16">
    <div class="flex flex-col gap-8">
      <p class="text-3xl italic text-center">{{ $t('hero.hi') }}</p>
      <h1 class="mb-4 font-bold leading-none text-center sm:text-8xl text-7xl font-title">
        Franco Panozzo
      </h1>
      <p class="mb-8 text-3xl italic text-center">
        {{ $t('hero.i_am') }}
        <MarkerUnderline>{{ $t('hero.role') }}</MarkerUnderline>
      </p>
      <div class="flex items-center justify-center gap-4">
        <SocialIcon v-for="social in socialData" :social="social" />
      </div>
    </div>
  </Container>

  <Separator />
</template>
