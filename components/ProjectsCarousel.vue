<!-- components/ProjectsCarousel.vue -->
<template>
  <div class="carousel-wrapper relative py-8 px-4 sm:px-6">

    <!-- Titre de section -->
    <div class="flex items-center mb-6 mt-10 sm:mt-12 md:mt-6 lg:mt-12 xl:mt-12 2xl:mt-4" id="item-4">
      <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-2 size-12 2xl:ml-24 shrink-0" />
      <h2 class="text-2xl font-black text-sky-700 dark:text-white my-4 ml-4">{{ $t("Projets") }}</h2>
    </div>

    <div class="text-center mb-8">
      <h3 class="text-xl">{{ $t("Aperçu1") }}</h3>
      <h3 class="text-xl mt-2">{{ $t("Aperçu2") }}</h3>
    </div>

    <!-- Carrousel -->
    <div class="relative">
      <Swiper
        :modules="modules"
        effect="coverflow"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :navigation="{
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next',
        }"
        :pagination="{ clickable: true, el: '.swiper-custom-pagination' }"
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :loop="true"
        :grab-cursor="true"
        class="projects-swiper py-10"
      >
      <!-- Crm immobilier -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/CrmImmo.webp" alt="Aperçu du tableau de bord CRM IMMO"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black flex-wrap justify-center pb-14">
                 Crm immobilier
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("ProjetCrm") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2026") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Infra") }}</p>
                <p class="projet text-sm text-white/80">Docker · Nginx</p>
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Angular</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">Symfony · PostgreSQL</p>
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Prometheus") }}</p>
                <p class="projet text-sm text-white/80">Prometheus</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      <!-- Le Monsieur d'en Face -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/Le_Monsieur d_en_Face.webp" alt="Aperçu de la page d'accueil Le Monsieur d'en Face"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black flex-wrap justify-center pb-14">
                 Le Monsieur<span class="monsieur-break">d'en Face</span>
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("NewLeMonsieur2") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2026") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Nuxt.js · JavaScript · Tailwind.css</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">Node.js · Express.js · PostgreSQL · Neon</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- KZEN -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/KZEN.png" alt="Aperçu de la page login KZEN"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                {{ $t("KZEN") }}
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("ProjetKZEN") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2025") }} - {{ $t("2026") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Nuxt.js · JavaScript · Tailwind.css</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">Node.js · Express.js · PostgreSQL · Neon</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- Portfolio SWS -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/HomeSWS.webp" alt="Aperçu de la page d'accueil du portfolio Shoshin Web Services"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                {{ $t("Portfolio") }}
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("ProjetPortfolio") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2024") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Nuxt.js · TypeScript · Tailwind.css</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">Node.js · Express.js · PostgreSQL · Neon</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P7 Groupomania -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeGroupomania.webp" alt="Aperçu de la page d'accueil Groupomania"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                P7 Groupomania
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet7") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2023") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Vue.js · JavaScript</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">MySQL · Node.js</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P6 Hot Takes -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeHotTakes.webp" alt="Aperçu de la page d'accueil Hot Takes"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                P6 Hot Takes
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet6") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2021") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">Angular</p>
                <p class="projet font-black text-orange-300 text-sm mt-2">{{ $t("Backend") }}</p>
                <p class="projet text-sm text-white/80">Node.js · NoSQL (MongoDB)</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P5 Kanap -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeKanap.webp" alt="Aperçu de la page d'accueil Kanap"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                P5 Kanap
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet5") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2021") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet font-black text-orange-300 text-sm">{{ $t("Frontend") }}</p>
                <p class="projet text-sm text-white/80">JavaScript</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P4 La Chouette Agence -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeLaChouetteAgence.webp" alt="Aperçu de la page d'accueil La Chouette Agence"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black flex-wrap justify-center pb-14">
                 P4 La chouette<span class="agence-break">agence</span>
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet4") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2021") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet text-sm text-white/80">SEO</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P3 Ohmyfood -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeOhmyfood.webp" alt="Aperçu de la page d'accueil Ohmyfood"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                P3 Ohmyfood
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet3") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2021") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet text-sm text-white/80">{{ $t("Projet3Techno") }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <!-- P2 Reservia -->
        <SwiperSlide class="project-slide">
          <div class="card bg-sky-600 dark:bg-sky-800 shadow-2xl overflow-hidden h-full">
            <figure class="h-48 overflow-hidden">
              <img src="assets/images/homeReservia.webp" alt="Aperçu de la page d'accueil Reservia"
                class="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </figure>
            <div class="card-body p-5">
              <h2 class="card-title text-white dark:text-orange-400 text-lg font-black justify-center pb-14">
                P2 Reservia
              </h2>
              <p class="projet text-sm text-white/90">{{ $t("Projet2") }}</p>
              <p class="projet font-black text-base text-white/90">{{ $t("2021") }}</p>
              <div class="mt-3 space-y-1">
                <p class="projet text-sm text-white/80">{{ $t("Projet2Techno") }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <!-- Boutons navigation custom -->
      <button
        class="swiper-btn-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 rounded-full bg-orange-400 hover:bg-orange-500
               text-white shadow-lg flex items-center justify-center
               transition-all duration-200 hover:scale-110 focus:outline-none
               -ml-4 lg:-ml-5"
        aria-label="Projet précédent"
      >
        <Icon name="heroicons:chevron-left-20-solid" class="size-5" />
      </button>

      <button
        class="swiper-btn-next absolute right-0 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 rounded-full bg-orange-400 hover:bg-orange-500
               text-white shadow-lg flex items-center justify-center
               transition-all duration-200 hover:scale-110 focus:outline-none
               -mr-4 lg:-mr-5"
        aria-label="Projet suivant"
      >
        <Icon name="heroicons:chevron-right-20-solid" class="size-5" />
      </button>
    </div>

    <!-- Pagination custom -->
    <div class="swiper-custom-pagination flex justify-center mt-4 gap-2" />

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [EffectCoverflow, Navigation, Pagination, Autoplay]
</script>

<style scoped>
/* Forcer "Agence" à la ligne uniquement sur 344px / 360px / 375px */
@media (max-width: 375px) {
  .agence-break {
    flex-basis: 100%;
    text-align: center;
  }
}

@media (min-width: 376px) {
  .agence-break::before {
    content: none;
  }
}

/* Forcer "d'en Face" à la ligne uniquement sur 344px / 360px / 375px */
@media (max-width: 375px) {
  .monsieur-break {
    flex-basis: 100%;
    text-align: center;
  }
}

@media (min-width: 376px) {
  .monsieur-break::before {
    content: none;
  }
}


/* Largeur fixe des slides pour l'effet coverflow */
.project-slide {
  width: 300px !important;
  height: auto;
}

/* Galaxy Z Fold 5 et très petits écrans (< 375px) */
@media (max-width: 374px) {
  .project-slide {
    width: 280px !important;
  }
}

@media (min-width: 768px) {
  .project-slide {
    width: 340px !important;
  }
}

/* Pagination dots custom */
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background-color: #0369a1; /* sky-700 */
  opacity: 0.4;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #fb923c; /* orange-400 */
  opacity: 1;
  transform: scale(1.3);
}

/* Slides non actifs légèrement estompés */
:deep(.swiper-slide:not(.swiper-slide-active)) {
  opacity: 0.65;
  transition: opacity 0.4s ease;
}

:deep(.swiper-slide-active) {
  opacity: 1;
}
</style>