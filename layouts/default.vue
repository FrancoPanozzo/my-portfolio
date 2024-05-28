<script lang="ts" setup>
//  👇 Use Nuxt I18n's auto-imported
//    composable
const head = useLocaleHead({
  addDirAttribute: true, // Adds dir
  addSeoAttributes: true // Adds lang
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <slot />
    </Body>
  </Html>
</template>
