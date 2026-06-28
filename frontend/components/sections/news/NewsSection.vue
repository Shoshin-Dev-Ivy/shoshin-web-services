<template>
  <section class="w-full py-16">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">

      <NewsCard
        v-slide-in="0"
        :title="$t('News4Title')"
        :text="$t('News4Text')"
        :date="$t('News4Date')"
      />

      <NewsCard
        v-slide-in="250"
        :title="$t('News3Title')"
        :text="$t('News3Text')"
        :date="$t('News3Date')"
      />

       <NewsCard
        v-slide-in="350"
        :title="$t('News2Title')"
        :text="$t('News2Text')"
        :date="$t('News2Date')"
      />

      <NewsCard
      v-slide-in="450"
      :title="$t('News1Title')"
      :text="$t('News1Text')"
      :date="$t('News1Date')"
      />
    </div>

  </section>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
</script>