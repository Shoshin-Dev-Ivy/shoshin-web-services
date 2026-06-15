<template>
  <div class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">
    <h3 class="text-lg font-bold text-sky-700 dark:text-orange-400">
      {{ title }}
    </h3>

    <p class="mt-2 text-sky-700 dark:text-white">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>