<!-- components/ModeSwitch.vue -->
<template>
  <ClientOnly>
    <div class="relative group">
      <button
        @click="toggleTheme"
        class="flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-300"
        :aria-label="tooltipText"
      >
        <SunIcon
          v-if="isMounted && !enabled"
          class="w-7 h-7 text-yellow-500 hover:text-yellow-600 transition"
        />
        <MoonIcon
          v-else-if="isMounted && enabled"
          class="w-7 h-7 text-gray-300 hover:text-gray-200 transition"
        />
      </button>

      <div
        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none whitespace-nowrap z-10"
      >
        {{ tooltipText }}
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { enabled, toggleTheme } = useTheme()
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
  const htmlHasDark = document.documentElement.classList.contains('dark')
  if (htmlHasDark !== enabled.value) {
    toggleTheme()
  }
})

watch(enabled, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

const tooltipText = computed(() =>
  enabled.value ? t('ToLight') : t('ToDark')
)
</script>


