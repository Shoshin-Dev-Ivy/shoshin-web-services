<template>
  <div class="max-w-4xl mx-auto px-6 mb-16 text-center">

    <div v-slide-in="0" class="p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">


      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        <div>
          <p class="font-black text-xl text-sky-700 dark:text-orange-400">
            {{ $t("Proof1Title") }}
          </p>
          <p class="text-base text-sky-700 dark:text-white">
            {{ $t("Proof1Text") }}
          </p>
        </div>

        <div>
          <p class="font-black text-xl text-sky-700 dark:text-orange-400">
            {{ $t("Proof2Title") }}
          </p>
          <p class="text-base text-sky-700 dark:text-white">
            {{ $t("Proof2Text") }}
          </p>
        </div>

        <div>
          <p class="font-black text-xl text-sky-700 dark:text-orange-400">
            {{ $t("Proof3Title") }}
          </p>
          <p class="text-base text-sky-700 dark:text-white">
            {{ $t("Proof3Text") }}
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
</script>