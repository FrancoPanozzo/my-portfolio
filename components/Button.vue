<script lang="ts" setup></script>

<template>
  <button
    class="border-foreground text-sm border rounded-full font-semibold py-3 px-6 hover:-translate-y-1 hover:translate-x-1 transition-all hover:shadow-button-hover active:-translate-y-0.5 active:translate-x-0.5 active:shadow-button-click"
  >
    <slot />
  </button>
</template>
