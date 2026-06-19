<!-- components/DisplayTagline.vue -->
<template>
    <div v-if="localeReady" class="flex items-center justify-center z-50">
        <div class="text-2xl text-sky-700 dark:text-white px-6 rounded-2xl animate-fade text-center leading-snug">
             <span class="block">
                {{ $t("Tagline1") }}
            </span>

            <span class="block">
                {{ $t("Tagline2") }}
            </span>
            <span class="block">
                {{ $t("Tagline3") }}
            </span>
        </div>
    </div>
</template>

<script setup defer>
import { ref, onMounted } from 'vue'

const localeReady = ref(false)
onMounted(() => {
  localeReady.value = true
})
</script>
    
<style scoped defer>
@keyframes fadeIn {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}

.animate-fade {
animation: fadeIn 10s ease-out forwards;
}
</style>
  