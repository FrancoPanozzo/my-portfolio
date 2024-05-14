<script lang="ts" setup>
export interface Props {
  title: string
  subtitle?: string
  size?: 'md' | 'lg'
  icon?: string
}

const mapTitleSize = (size: string | undefined) => {
  switch (size) {
    case 'md':
      return 'text-2xl' // Adjusted size class for 'md'
    case 'lg':
      return 'text-5xl' // Adjusted size class for 'lg'
    default:
      return 'text-5xl'
  }
}

const mapSubtitleSize = (size: string | undefined) => {
  switch (size) {
    case 'md':
      return 'text-lg' // Adjusted size class for 'md'
    case 'lg':
      return 'text-2xl' // Adjusted size class for 'lg'
    default:
      return 'text-2xl'
  }
}

defineProps<Props>()
</script>

<template>
  <div class="mb-10 flex flex-col">
    <h3 v-if="size === 'md'" :class="mapTitleSize(size) + ' font-title'">
      <Icon v-if="icon" :name="icon" class="size-8 text-primary mr-4" />
      {{ title }}
    </h3>
    <h2 v-else :class="mapTitleSize(size) + ' font-title'">
      <Icon v-if="icon" :name="icon" class="size-6 text-primary mr-2" />{{ title }}
    </h2>
    <span v-if="subtitle" :class="mapSubtitleSize(size) + ' mt-2 italic'">{{ subtitle }}</span>
  </div>
</template>
