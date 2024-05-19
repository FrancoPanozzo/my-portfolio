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
      return 'text-3xl' // Adjusted size class for 'md'
    case 'lg':
      return 'text-6xl' // Adjusted size class for 'lg'
    default:
      return 'text-6xl'
  }
}

const mapSubtitleSize = (size: string | undefined) => {
  switch (size) {
    case 'md':
      return 'text-xl' // Adjusted size class for 'md'
    case 'lg':
      return 'text-3xl' // Adjusted size class for 'lg'
    default:
      return 'text-3xl'
  }
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col" :class="size !== 'md' ? 'mb-16' : ''">
    <h2 v-if="size === 'md'" :class="mapTitleSize(size) + ' font-title'">
      <Icon v-if="icon" :name="icon" class="size-8 text-primary mr-4" />
      {{ title }}
    </h2>
    <h3 v-else :class="mapTitleSize(size) + ' font-title'">
      <Icon v-if="icon" :name="icon" class="size-6 text-primary mr-2" />{{ title }}
    </h3>
    <span v-if="subtitle" :class="mapSubtitleSize(size) + ' mt-2 italic text-foreground/65'">{{
      subtitle
    }}</span>
  </div>
</template>
