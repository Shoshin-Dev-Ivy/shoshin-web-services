<!-- components/SkillsCarousel.vue -->

<template>
  <div class="py-8">

    <div class="text-center mb-8">
      <h3 class="text-2xl font-black text-orange-400 text-center whitespace-pre-line">
        {{ title }}
      </h3>

      <p class="text-sky-700 dark:text-white/80 mt-3 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="20"
      :loop="true"
      :speed="speed"
      :autoplay="{
        delay: 0,
        reverseDirection: reverse,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :breakpoints="{
        640: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      }"
      class="skills-swiper"
    >

      <SwiperSlide
        v-for="skill in skills"
        :key="skill.label"
      >
        <div
          class="flex flex-col items-center justify-center
                 h-40 p-6 rounded-2xl
                 bg-white/60 dark:bg-sky-800
                 backdrop-blur-sm
                 border border-sky-200/50 dark:border-sky-700/50
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >

          <Icon
            :name="skill.icon"
            class="size-16"
          />

          <p class="mt-4 font-semibold text-sky-800 dark:text-white">
            {{ skill.label }}
          </p>

        </div>
      </SwiperSlide>

    </Swiper>

  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import type { Skill } from '~/data/skills'

defineProps<{
  title: string
  description: string
  skills: Skill[]
  reverse?: boolean
  speed?: number
}>()

const modules = [Autoplay]
</script>