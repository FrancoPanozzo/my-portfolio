<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local'
})

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
  <Container class="my-0 flex justify-end">
    <LanguageSelect />
  </Container>
  <Container class="mt-16">
    <div class="flex flex-col gap-8">
      <p class="text-3xl italic text-center">{{ t('hi') }}</p>
      <h1 class="sm:text-8xl text-7xl font-bold font-title text-center leading-none mb-4">
        Franco Panozzo
      </h1>
      <p class="text-3xl italic text-center mb-8">
        {{ t('i_am') }}
        <MarkerUnderline>{{ t('role') }}</MarkerUnderline>
      </p>
      <div class="flex items-center justify-center gap-4">
        <SocialIcon v-for="social in socialData" :social="social" />
      </div>
    </div>
  </Container>

  <Separator />
</template>

<i18n lang="json">
{
  "en": {
    "placeholder": "Select a language",
    "hi": "Hi! My name is",
    "i_am": "I'm a",
    "role": "web developer"
  },
  "fr": {
    "placeholder": "Choisissez une langue",
    "hi": "Salut! Je m'appelle",
    "i_am": "je suis un",
    "role": "développeur web"
  },
  "es": {
    "placeholder": "Selecciona un idioma",
    "hi": "Hola! Me llamo",
    "i_am": "soy un",
    "role": "desarrollador web"
  }
}
</i18n>
