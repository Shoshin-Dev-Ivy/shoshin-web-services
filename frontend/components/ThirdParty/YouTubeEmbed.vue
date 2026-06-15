<!-- components/YouTubeEmbed.vue -->
<template>
  <div v-if="consent.youtube">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
      title="YouTube video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: {
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

