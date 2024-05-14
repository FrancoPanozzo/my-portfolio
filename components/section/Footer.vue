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
  <Container class="md:my-8 my-16">
    <div class="flex items-center justify-between flex-col md:flex-row gap-11">
      <div class="flex items-center gap-5 md:order-2">
        <SocialIcon v-for="social in socialData" :social="social" />
      </div>
      <p class="text-foreground/65">© 2024 Franco Panozzo. All rights reserved</p>
    </div>
  </Container>
</template>
