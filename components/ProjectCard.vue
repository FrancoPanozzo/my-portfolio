<script lang="ts" setup>
interface tm<T> {
  loc: {
    source: T
  }
}

interface Tech {
  icon: tm<string>
  name: tm<string>
}

export interface Props {
  project: {
    img: tm<string>
    title: tm<string>
    date: tm<string>
    description: tm<string>
    url: tm<string>
    tech: Tech[]
  }
}

const props = defineProps<Props>()

const p = computed(() => {
  const project = props.project
  return {
    img: project.img.loc.source,
    title: project.title.loc.source,
    date: project.date.loc.source,
    description: project.description.loc.source,
    url: project.url.loc.source,
    tech: project.tech.map((item: Tech) => ({
      icon: item.icon.loc.source,
      name: item.name.loc.source
    }))
  }
})
</script>

<template>
  <a :href="p.url" target="_blank" class="group flex flex-col md:flex-row gap-4 md:gap-8">
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
        :src="p.img"
        :alt="p.title"
      />
    </div>
    <div class="flex flex-col flex-1">
      <!-- <div class="flex items-center gap-1 text-xs text-foreground/65 mt-3 mb-2">
        <Icon name="mdi:calendar" />
        <p>{{ p.date }}</p>
      </div> -->
      <MarkerUnderline>
        <SectionTitle :title="p.title" size="md" class="mb-1 font-title w-fit"
      /></MarkerUnderline>
      <p class="text-foreground/70 text-lg md:text-xl mb-2 mt-5">
        {{ p.description }}
      </p>
      <TechList :tech="p.tech" />
    </div>
  </a>
</template>
