<template>
  <Container>
    <SectionTitle :title="$t('experience.title')" :subtitle="$t('experience.subtitle')" />
    <div class="flex gap-8">
      <div class="w-2 bg-foreground/5 rounded-full"></div>

      <div class="flex flex-col gap-24 mb-12">
        <div v-for="job in $tm('experience.jobs')" class="relative">
          <div
            class="rounded-full size-4 bg-accent absolute -left-9 -translate-x-1.5 translate-y-8 scale-75"
          ></div>
          <JobEntry :job="job" />
        </div>
      </div>
    </div>
    <div class="mt-12 flex flex-col items-stretch sm:items-center gap-4 mx-auto sm:flex-row w-fit">
      <a href="https://www.linkedin.com/in/franco-panozzo/" target="_blank">
        <Button class="bg-accent flex items-center gap-2 w-full justify-center">
          <Icon name="fa6-brands:linkedin-in" />
          {{ $t('experience.linkedin_cta') }}</Button
        ></a
      >
      <a href="/franco-panozzo-cv.pdf" download>
        <Button class="flex items-center gap-2"
          ><Icon name="fa6-solid:download" />{{ $t('experience.download_cv') }}</Button
        ></a
      >
    </div>
  </Container>

  <Separator />
</template>
