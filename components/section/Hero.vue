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
  <Container>
    <div class="flex flex-col gap-8">
      <p class="text-3xl italic text-center">Hi, my name is</p>
      <h1 class="text-8xl font-bold font-title text-center leading-none mb-4">Franco Panozzo</h1>
      <p class="text-3xl italic text-center mb-8">
        I'm a
        <strong class="underline decoration-dashed font-normal decoration-[#9c1de7]"
          >web developer
        </strong>
      </p>
      <div class="flex items-center justify-center gap-4">
        <SocialIcon v-for="social in socialData" :social="social" />
      </div>
    </div>
  </Container>

  <Separator />
</template>
