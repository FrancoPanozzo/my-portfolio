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
  <Container class="my-10">
    <div class="flex items-center justify-between">
      <p class="text-foreground/65">© 2024 Franco Panozzo. All rights reserved</p>

      <div class="flex items-center gap-5">
        <SocialIcon v-for="social in socialData" :social="social" />
      </div>
    </div>
  </Container>
</template>
