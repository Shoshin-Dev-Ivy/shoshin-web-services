<!-- components/Tooltip.vue -->
<template>
  <div class="relative flex items-center justify-center group">
    <slot></slot>
    <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-sky-900 px-2 py-1 text-base text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  text: String
})
</script>
