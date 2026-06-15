<!-- components/FacebookEmbed.vue -->
<template>
  <div v-if="consent.facebook">
    <iframe
      :src="facebookSrc"
      width="340"
      height="500"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  facebookSrc: {
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



