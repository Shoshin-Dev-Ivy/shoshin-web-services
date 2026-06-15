<template>
  <div class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">

    <h3 class="text-lg font-black text-sky-700 dark:text-orange-400">
      {{ title }}
    </h3>

    <p class="mt-4 text-sky-700 dark:text-white">
      {{ text }}
    </p>

    <p class="mt-6 text-sm font-black text-sky-700 dark:text-white">
      {{ date }}
    </p>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  date: string
}>()
</script>