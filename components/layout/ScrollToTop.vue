<!-- components/ScrollToTop.vue -->
<template>
  <Transition name="fade-up-slow">
    <button v-if="visible" @click="scrollToTop" class="fixed bottom-1 right-1 px-1 transition-opacity">
      <Icon name="material-symbols:arrow-circle-up-outline-rounded" class="size-16 bg-orange-400 p-3 rounded-full shadow-lg transition-all" />
    </button>
  </Transition>
</template>

<script setup defer>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

const checkScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  const pageHeight = document.documentElement.scrollHeight
  // Show when close to the bottom (e.g. 200px from the bottom)
  visible.value = scrollPosition >= pageHeight - 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.fade-up-slow-enter-active,
.fade-up-slow-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.fade-up-slow-enter-from,
.fade-up-slow-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-slow-enter-to,
.fade-up-slow-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>