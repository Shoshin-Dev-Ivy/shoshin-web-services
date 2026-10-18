<template>
  <section class="w-full py-16">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">

      <NewsCard
        v-slide-in="0"
        :title="$t('News7Title')"
        :text="$t('News7Text')"
        :date="$t('News7Date')"
      />

      <NewsCard
        v-slide-in="150"
        :title="$t('News6Title')"
        :text="$t('News6Text')"
        :date="$t('News6Date')"
      />

      <NewsCard
        v-slide-in="300"
        :title="$t('News5Title')"
        :text="$t('News5Text')"
        :date="$t('News5Date')"
      />

      <NewsCard
        v-slide-in="0"
        :title="$t('News4Title')"
        :text="$t('News4Text')"
        :date="$t('News4Date')"
      />

      <NewsCard
        v-slide-in="150"
        :title="$t('News3Title')"
        :text="$t('News3Text')"
        :date="$t('News3Date')"
      />

       <NewsCard
        v-slide-in="300"
        :title="$t('News2Title')"
        :text="$t('News2Text')"
        :date="$t('News2Date')"
      />

      <NewsCard
      v-slide-in="0"
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