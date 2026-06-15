<!-- components/GoogleMapsEmbed.vue -->
<template>
  <div v-if="consent.maps">
    <iframe
      width="600"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="mapSrc"
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mapSrc: {
    type: String,
    required: false,
    default: ''
  }
})

const consent = computed(() => {
  try {
    const raw = localStorage.getItem('userConsent')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
})
</script>

