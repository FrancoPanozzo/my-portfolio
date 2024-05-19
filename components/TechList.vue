<script lang="ts" setup>
interface Tech {
  icon: string
  name: string
}
export interface Props {
  tech: Tech[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center mt-4 gap-3 flex-wrap">
    <div v-for="item in tech" class="flex items-center gap-1">
      <Icon :name="item.icon" class="size-4" />
      <span class="text-sm text-foreground/65">{{ item.name }}</span>
    </div>
  </div>
</template>
