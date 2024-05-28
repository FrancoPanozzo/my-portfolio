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
  job: {
    title: tm<string>
    company: tm<string>
    date: tm<string>
    description: tm<string>
    tech: Tech[]
    url: tm<string>
  }
}

const props = defineProps<Props>()

const j = computed(() => {
  const job = props.job

  return {
    title: job.title.loc.source,
    company: job.company.loc.source,
    date: job.date.loc.source,
    description: job.description.loc.source,
    url: job.url.loc.source,
    tech: job.tech.map((item: Tech) => ({
      icon: item.icon.loc.source,
      name: item.name.loc.source
    }))
  }
})
</script>

<template>
  <div class="flex flex-col gap-6 lg:flex-row" v-if="j">
    <div class="flex gap-8 flex-1 max-w-80">
      <div class="flex-1 flex flex-col">
        <span class="text-xs text-foreground/65">{{ j.date }}</span>
        <SectionTitle :title="j.title" size="md" class="mt-2 mb-1" />
        <span>
          <span class="text-foreground/65">{{ $t('experience.at') + ' ' }}</span>
          <a
            target="_blank"
            :href="j.url"
            class="font-medium hover:underline decoration-dashed decoration-accent"
            >{{ j.company }}</a
          >
        </span>
        <!-- <TechList :tech="j.tech" /> -->
      </div>
    </div>
    <div class="flex-1 text-foreground/70">
      <p class="text-l md:text-xl">
        {{ j.description }}
      </p>
    </div>
  </div>
</template>
