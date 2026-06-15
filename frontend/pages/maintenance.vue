<!-- pages/maintenance.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center -my-48 bg-sky-50 dark:bg-sky-900 text-center p-6">
    <div>
      <h1 class="text-4xl font-bold mb-4 text-sky-700 dark:text-white">🚧 {{ $t("MaintenanceLive") }}</h1>
      <p class="text-lg mb-2 text-sky-700 dark:text-white">{{ $t("Back") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
</style>








