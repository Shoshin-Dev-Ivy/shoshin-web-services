<!-- components/IosBanner.vue -->
<template>
  <transition name="fade">
    <div v-if="isVisible" class="fixed top-0 left-0 w-full bg-sky-700 text-white text-center p-2 z-50 flex items-center justify-center">
      <span class="text-lg mr-4 my-6">
         {{ $t("IosBanner") }}
      </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref<boolean>(false)

onMounted(() => {
  const ua: string = window.navigator.userAgent
  const isIOS: boolean = /iP(ad|hone|od)/.test(ua)
  const isSafari: boolean = /^((?!chrome|android).)*safari/i.test(ua)

  if (isIOS && isSafari) {
    isVisible.value = true

    // Masquer le bandeau après 10 secondes
    setTimeout(() => {
      isVisible.value = false
    }, 10000)
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>



