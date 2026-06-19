<template>
  <div class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">
    <h3 class="text-lg font-bold text-sky-700 dark:text-orange-400">
      {{ title }}
    </h3>

    <p class="mt-2 text-sky-700 dark:text-white">
      {{ description }}
    </p>

    <p class="mt-2 text-sky-700 dark:text-white">
      {{ precision }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  precision: String,
})
</script>