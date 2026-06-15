<!-- components/ImagesSwitcher.vue -->
<template>
  <div class="relative w-full h-full overflow-hidden">
    <NuxtImg :src="currentImage"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out"
      :class="{ 'opacity-0': fadingOut, 'opacity-100': !fadingOut }"
      alt="Image switcher"/>
  </div>
</template>

<script setup defer>
import { ref, onMounted } from 'vue'

const image1 = '/images/Bibi3.webp'
const image2 = '/images/aikido.webp'

const currentImage = ref(image1)
const fadingOut = ref(false)

onMounted(() => {
  // Start fade to image2
  setTimeout(() => {
    fadingOut.value = true
    setTimeout(() => {
      currentImage.value = image2
      fadingOut.value = false

      // Wait 10 seconds then return permanently to image1
      setTimeout(() => {
        fadingOut.value = true
        setTimeout(() => {
          currentImage.value = image1
          fadingOut.value = false
        }, 3000) // duration of fade
      }, 2000) // 2 seconds show aikido

    }, 3000) // duration of fade
  }, 100) // slight delay on mount
})
</script>

<style scoped>
/* Optionally, make sure transition is smooth in all browsers */
</style>
