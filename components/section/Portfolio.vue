<template>
  <Container>
    <SectionTitle :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')" />
    <div class="flex flex-col gap-16 md:gap-12">
      <ProjectCard v-for="project in $tm('portfolio.projects')" :project="project" />
    </div>

    <div class="flex flex-col items-center gap-6 mx-auto mt-24 w-fit">
      <span class="text-lg">{{ $t('portfolio.cta_question') }}</span>
      <a href="https://www.the-zeppelin.com/?ref=personal-portfolio" target="_blank">
        <Button class="flex items-center gap-2 bg-accent">
          <Icon name="fa6-solid:arrow-up-right-from-square" />{{ $t('portfolio.cta_button') }}
        </Button></a
      >
    </div>
  </Container>

  <Separator />
</template>
