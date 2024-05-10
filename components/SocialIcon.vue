<script lang="ts" setup>
export interface Props {
  social: {
    icon: string
    url: string
  }
}

defineProps<Props>()
</script>

<template>
  <a :href="social.url" target="_blank" class="rounded-full relative group size-10">
    <div
      class="group-hover:bg-foreground rounded-full transition-all size-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:size-12"
    ></div>
    <Icon
      :name="social.icon"
      class="size-6 group-hover:text-background transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </a>
</template>
