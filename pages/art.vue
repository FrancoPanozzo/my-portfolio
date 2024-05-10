<script lang="ts" setup>
const cardsData = [
  {
    title: 'Sana Studio',
    img: '/img/sana.jpeg',
    date: '2021-10-10',
    description: 'A website for a ccreative studio in Amsterdam.',
  },
  {
    title: 'Rockauto Escuelas',
    img: '/img/rockauto.jpeg',
    date: '2021-10-10',
    description: 'A landing page for a driving school in Granada, Spain.',
  },
  {
    title: 'Zenllo',
    img: '/img/zenllo.jpeg',
    date: '2021-10-10',
    description: 'An MVP of a webapp for a startup in Buenos Aires.',
  },
  {
    title: 'The Zeppelin',
    img: '/img/zeppelin.jpeg',
    date: '2021-10-10',
    description: 'A website for my digital agency.',
  },
]
</script>

<template>
  <div class="container mx-auto py-20 max-w-screen-lg">
    <h1 class="text-8xl font-bold font-title mb-2">Franco Panozzo</h1>
    <p class="text-4xl">Web developer</p>
    <Separator />
    <div class="flex flex-col gap-8 ">
      <SectionTitle title="Paragraphs" subtitle="with a personal touch"/>
    <p >
      It is a long established fact that
      <strong class="underline decoration-wavy font-normal decoration-[#ef255f]">
        a reader will be distracted</strong
        >
        by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
        is that it has a more-or-less look like readable English. Many desktop
        <strong class="underline decoration-wavy font-normal decoration-[#3e64ff]"
        >publishing packages</strong #fd5f00
        >
        and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. <strong class="underline decoration-wavy font-normal decoration-[#f35b25]"
        >Various versions have evolved</strong> over
        the years, <strong class="underline decoration-wavy font-normal decoration-[#15b7b9]"
        >sometimes </strong>, sometimes on purpose (injected humour and the like).
      </p>
    <p >
      It is a long established fact that
      <strong class="underline decoration-wavy font-normal decoration-[#0cca98]">
        a reader will be distracted</strong
        >
        by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
        is that it has a more-or-less look like readable English. Many desktop
        <strong class="line-through font-normal decoration-[#be0eaa]"
        >publishing packages</strong #fd5f00
        >
        and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. <strong class="underline decoration-wavy font-normal decoration-[#f59d2a]"
        >Various versions have evolved</strong> over
        the years, <strong class="line-through  font-normal decoration-[#b074e9]"
        >sometimes </strong>, sometimes on purpose (injected humour and the like).
      </p>
    </div>
      <Separator />
      <SectionTitle title="Buttons" subtitle="with a twist"/>
      <div class="flex items-center gap-2  ">
        <Button class="bg-[#fce38a]" />
      <Button class="bg-[#ffb26b]" />
      <Button />
      <Button class="bg-[#fcc0c0]" />
      <Button class="bg-[#aea1ea]" />
    </div>
      <div class="flex items-center gap-2 mt-10">
        <Button class="bg-[#dbf094]" />
      <Button class="bg-[#b8eef1]" />
      <Button />
      <Button class="bg-[#9bb4da]" />
      <Button class="bg-[#d89fff]" />
    </div>
      <Separator />
      <SectionTitle title="Project cards" />
      <div class="grid grid-cols-3 gap-10  ">
        <Card v-for="c in cardsData" :title="c.title" :description="c.description" :img="c.img" :date="c.date" />
      </div>
  </div>
</template>
