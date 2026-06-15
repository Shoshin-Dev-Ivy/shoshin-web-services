<!-- layouts/default.vue -->
<template>
    <div class="text-black dark:text-white DefaultLayout mx-8">
        <Header />
        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAdminStore } from '~/stores/useAdminStore'

const adminStore = useAdminStore()

onMounted(async () => {
  await adminStore.refresh()
})
</script>
