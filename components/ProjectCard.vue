<script lang="ts" setup>
export interface Props {
  project: {
    img: string
    title: string
    date: string
    description: string
    url: string
    tech: string[]
  }
}

defineProps<Props>()
</script>

<template>
  <a :href="project.url" target="_blank" class="group flex flex-col md:flex-row md:gap-8">
    <div
      class="md:h-52 relative aspect-video rounded-md overflow-hidden border border-foreground group-hover:-translate-y-1 group-hover:translate-x-1 group-active:translate-x-0.5 transition-all group-hover:shadow-button-hover group-active:-translate-y-0.5 group-active:shadow-button-click"
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
      <div>
        <div class="flex items-center gap-1 text-xs text-foreground/65 mt-3">
          <Icon name="mdi:calendar" />
          <p>{{ project.date }}</p>
          <div class="ml-auto flex items-center gap-1">
            <span>tech used</span>
            <Icon v-for="item in project.tech" :name="item" class="size-4" />
          </div>
        </div>
      </div>
      <SectionTitle
        :title="project.title"
        size="md"
        class="mt-2 mb-2 group-hover:underline font-title decoration-dashed decoration-[#ffb26b]"
      />
      <p class="text-foreground/70">
        {{ project.description }}
      </p>
    </div>
  </a>
</template>
