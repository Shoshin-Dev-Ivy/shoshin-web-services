<template>
  <section class="w-full py-16">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">

      <NewsCard
      v-slide-in
      :title="$t('News1Title')"
      :text="$t('News1Text')"
      :date="$t('News1Date')"
      />

      <NewsCard
        v-slide-in="150"
        :title="$t('News2Title')"
        :text="$t('News2Text')"
        :date="$t('News2Date')"
      />

      <NewsCard
        v-slide-in="300"
        :title="$t('News3Title')"
        :text="$t('News3Text')"
        :date="$t('News3Date')"
      />

    </div>

  </section>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
</script>