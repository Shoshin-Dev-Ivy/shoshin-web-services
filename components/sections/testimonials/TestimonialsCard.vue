<template>
  <div class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">

    <h3 class="text-lg font-black text-sky-700 dark:text-orange-400">
      {{ title }}
    </h3>

    <p class="mt-4 text-sky-700 dark:text-white whitespace-pre-line leading-relaxed">
      {{ text1 }}
    </p>
     <p class="mt-4 text-sky-700 dark:text-white">
      {{ text2 }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text1: string
  text2: string
}>()
</script>