<script lang="ts" setup>
interface Tech {
  icon: string
  name: string
}

export interface Props {
  project: {
    img: string
    title: string
    date: string
    description: string
    url: string
    tech: Tech[]
  }
}

defineProps<Props>()
</script>

<template>
  <a :href="project.url" target="_blank" class="group flex flex-col md:flex-row gap-4 md:gap-8">
    <div
      class="md:h-56 relative aspect-video rounded-md overflow-hidden border border-foreground group-hover:-translate-y-1 group-hover:translate-x-1 group-active:translate-x-0.5 transition-all group-hover:shadow-button-hover group-active:-translate-y-0.5 group-active:shadow-button-click"
    >
      <NuxtImg
        placeholder
        class="absolute inset-0 w-full h-full aspect-video"
        height="1080"
        width="1920"
        loading="lazy"
        sizes="90vw md:324px lg:452px"
        :src="project.img"
        :alt="project.title"
      />
    </div>
    <div class="flex flex-col flex-1">
      <!-- <div class="flex items-center gap-1 text-xs text-foreground/65 mt-3 mb-2">
        <Icon name="mdi:calendar" />
        <p>{{ project.date }}</p>
      </div> -->
      <SectionTitle
        :title="project.title"
        size="md"
        class="mb-2 underline font-title decoration-dashed decoration-portfolio"
      />
      <p class="text-foreground/70 text-lg md:text-xl my-2">
        {{ project.description }}
      </p>
      <TechList :tech="project.tech" />
    </div>
  </a>
</template>
