<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 mb-20">

    <!-- SHOSHIN -->
    <div v-slide-in="0" class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">

      <h3 class="text-2xl font-medium text-sky-700 dark:text-orange-400 text-center">
        {{ $t("Project3Title") }}
      </h3>

      <div class="mt-6 space-y-4 text-black dark:text-white">

        <div>
          <p class="font-black">{{ $t("CaseStudyContext") }}</p>
          <p>{{ $t("Project3Context") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudySolution") }}</p>
          <p>{{ $t("Project3Solution") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudyResult") }}</p>
          <p>{{ $t("Project3Result") }}</p>
        </div>

      </div>
    </div>

    <!-- KZEN -->
    <div v-slide-in="150" class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">

      <h3 class="text-2xl font-medium text-sky-700 dark:text-orange-400 text-center">
        {{ $t("Project1Title") }}
      </h3>

      <div class="mt-6 space-y-4 text-black dark:text-white">

        <div>
          <p class="font-black">{{ $t("CaseStudyContext") }}</p>
          <p>{{ $t("Project1Context") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudySolution") }}</p>
          <p>{{ $t("Project1Solution") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudyResult") }}</p>
          <p>{{ $t("Project1Result") }}</p>
        </div>

      </div>
    </div>

    <!-- CRM -->
    <div v-slide-in="300" class="h-full p-6 rounded-xl bg-white/60 dark:bg-sky-800 shadow">

      <h3 class="text-2xl font-medium text-sky-700 dark:text-orange-400 text-center">
        {{ $t("Project2Title") }}
      </h3>

      <div class="mt-6 space-y-4 text-black dark:text-white">

        <div>
          <p class="font-black">{{ $t("CaseStudyContext") }}</p>
          <p>{{ $t("Project2Context") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudySolution") }}</p>
          <p>{{ $t("Project2Solution") }}</p>
        </div>

        <div>
          <p class="font-black">{{ $t("CaseStudyResult") }}</p>
          <p>{{ $t("Project2Result") }}</p>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
</script>