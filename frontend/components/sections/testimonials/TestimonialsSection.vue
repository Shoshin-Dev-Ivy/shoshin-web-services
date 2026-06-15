<template>
  <section class="w-full py-16">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">

      <TestimonialsCard
      v-slide-in
      :title="$t('Testimonials1Title')"
      :text1="$t('Testimonials1Text1')"
      :text2="$t('Testimonials1Text2')"
      />

      <TestimonialsCard
      v-slide-in="150"
      :title="$t('Testimonials2Title')"
      :text1="$t('Testimonials2Text1')"
      :text2="$t('Testimonials2Text2')"
      />

    <TestimonialsCard
      v-slide-in="300"
      :title="$t('Testimonials3Title')"
      :text1="$t('Testimonials3Text1')"
      :text2="$t('Testimonials3Text2')"
    />

    </div>

  </section>
</template>

<script setup lang="ts">
import { vSlideIn } from '@/directives/vSlideIn'
</script>