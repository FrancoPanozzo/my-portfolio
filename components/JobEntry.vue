<script lang="ts" setup>
interface Tech {
  icon: string
  name: string
}

export interface Props {
  job: {
    title: string
    company: string
    date: string
    description: string
    tech: Tech[]
    url: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-2">
    <div class="flex gap-8 flex-1 max-w-80">
      <div class="flex-1 flex flex-col">
        <span class="text-xs text-foreground/65">{{ job.date }}</span>
        <SectionTitle :title="job.title" size="md" class="mt-2 mb-1" />
        <span>
          <span class="text-foreground/65">at </span>
          <a
            target="_blank"
            :href="job.url"
            class="font-medium hover:underline decoration-dashed decoration-accent"
            >{{ job.company }}</a
          >
        </span>
        <TechList :tech="job.tech" />
      </div>
    </div>
    <div class="flex-1 text-foreground/70">
      <p class="text-l md:text-xl">
        {{ job.description }}
      </p>
    </div>
  </div>
</template>
