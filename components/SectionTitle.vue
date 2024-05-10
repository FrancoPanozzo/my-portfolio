<script lang="ts" setup>
export interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="mb-10">
    <h2 class="text-5xl font-title">{{ title }}</h2>
    <span v-if="subtitle" class="text-2xl mt-2">{{ subtitle }}</span>
  </div>
</template>
