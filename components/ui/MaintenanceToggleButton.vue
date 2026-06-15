<!-- components/MaintenanceToggleButton.vue -->
<script setup>
import { useMaintenanceStore } from '~/stores/maintenance'

const maintenanceStore = useMaintenanceStore()
</script>

<template>
  <button @click="maintenanceStore.toggle"
    class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
    Activer / désactiver la maintenance
  </button>
</template>