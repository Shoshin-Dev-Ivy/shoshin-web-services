<!-- pages/index.vue -->
<template>
<Head>
  <title>Shoshin Web Services - Développeur Web à Carcassonne</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Meta description pour SEO avec localisation -->
  <meta name="description" content="Services web de qualité à Carcassonne (Occitanie). Conception de solutions numériques sur mesure pour entreprises et organisations. Pierre Tinard, développeur applications web métiers freelance. - Python, TypeScript, Nuxt.js" />

  <!-- Localisation géographique pour SEO -->
  <meta name="geo.region" content="FR-11" />
  <meta name="geo.placename" content="Carcassonne" />
  <meta name="geo.position" content="43.2130;2.3491" />
  <meta name="ICBM" content="43.2130, 2.3491" />

  <!-- Keywords avec localisation -->
  <meta name="keywords" content="développeur web Carcassonne, services web Occitanie, freelance Aude, Shoshin Web Services, Python, TypeScript, Nuxt.js, conception de solutions numériques sur mesure pour entreprises et organisations, Pierre Tinard" />

  <!-- Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:title" content="Shoshin Web Services - Développeur Web à Carcassonne" />
  <meta property="og:description" content="Services web de qualité à Carcassonne (Occitanie). Développement web, Python, TypeScript, Nuxt.js - Conception de solutions numériques sur mesure pour entreprises et organisations." />
  <meta property="og:author" content="Pierre Tinard" />
  <meta property="og:image" content="https://www.shoshin-web-services.com/images/HomeSWS.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://www.shoshin-web-services.com" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shoshin Web Services" />
  <meta property="og:locality" content="Carcassonne" />
  <meta property="og:region" content="Occitanie" />
  <meta property="og:country-name" content="France" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shoshin Web Services - Développeur Web à Carcassonne" />
  <meta name="twitter:description" content="Services web de qualité à Carcassonne (Occitanie). Développement web, conception de solutions numériques sur mesure pour entreprises et organisations - Python, TypeScript, Nuxt.js" />
  <meta name="twitter:image" content="https://www.shoshin-web-services.com/images/HomeSWS.webp" />
  <meta name="twitter:url" content="https://www.shoshin-web-services.com" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.shoshin-web-services.com" />
</Head>
<ClientOnly>
  <div class="flex justify-center mx-auto -mt-12">
    <div class="text-center text-xl mt-6"><WelcomeMessage /></div>
  </div>
  <div class="flex justify-center mx-auto py-6">
    <Transition
    enter-active-class="transition-opacity duration-[10000ms] ease-in-out"
    leave-active-class="transition-opacity duration-[10000ms] ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="show"
      class="p-4 rounded-lg opacity-100 text-xl text-sky-700 dark:text-white">
      <p class="mb-4 text-center">{{ $t("ShoshinDefinition1") }}</p>
      <p class="text-center">{{ $t("ShoshinDefinition2") }}</p>
    </div>
    </Transition>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-center md:mt-24 md:-mb-20 lg:-mt-2 xl:mt-2">
      <h1 class="text-2xl text-sky-700 mt-2 dark:text-white text-center">{{ $t("PierreTinard") }}</h1>
      <h2 class="text-2xl text-orange-400 font-black my-4 text-center">{{ $t("Titre") }}</h2>
    </div>
    <div class="flex justify-center flex-col avatar mt-4 mb-4 md:mt-28 lg:mt-18 2xl:my-4 2xl:mt-24">
      <div class="image-switcher w-48 rounded-full border-2 self-center border-sky-700 dark:border-orange-400">
        <ImageSwitcher />
      </div>
    </div>
    <div class="flex flex-col text-center">
      <div class="text-2xl text-sky-700 dark:text-white">
        <DisplayTagline />
      </div>
    </div>
    <div class="flex" id="item-1">
      <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
      <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">
        {{ $t("Services") }}
      </h2>
    </div>
    <div class="-mt-16">
      <ServiceIntro />
    </div>
    <section class="py-16 bg-sky-50 dark:bg-sky-900 w-full pt-4">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 items-stretch justify-items-center">
          <div v-slide-in="0">   <ServiceProblems /> </div>
          <div v-slide-in="150"> <ServiceSolutions /> </div>
          <div v-slide-in="300"> <ServiceProcess /> </div>
        </div>
      </div>
    </section>
    <div class="flex" id="item-2">
      <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
      <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Skills") }}</h2>
    </div>
    <div class="max-w-4xl mx-auto px-6 mb-16">
      <p class="text-lg text-gray-700 dark:text-gray-300 text-center">
        <SkillsIntro />
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-20 items-stretch">
      <div class="h-full" v-slide-in="0">
        <SkillCard :title="$t('Skill1Title')" :description="$t('Skill1Description')" />
      </div>
      <div class="h-full" v-slide-in="150">
        <SkillCard :title="$t('Skill2Title')" :description="$t('Skill2Description')" />
      </div>
      <div class="h-full" v-slide-in="300">
        <SkillCard :title="$t('Skill3Title')" :description="$t('Skill3Description')" />
      </div>
      <div class="h-full" v-slide-in="0">
        <SkillCard :title="$t('Skill4Title')" :description="$t('Skill4Description')" />
      </div>
      <div class="h-full" v-slide-in="150">
        <SkillCard :title="$t('Skill5Title')" :description="$t('Skill5Description')" />
      </div>
      <div class="h-full" v-slide-in="300">
        <SkillCard :title="$t('Skill6Title')" :description="$t('Skill6Description')" />
      </div>
  </div>
     <SkillsCarousel
    :title="$t('MainStackTitle')"
    :description="$t('MainStackDescription')"
    :skills="mainStack"
    :speed="3500"
    :reverse="false"
    />
    <SkillsCarousel
    :title="$t('SecondaryStackTitle')"
    :description="$t('SecondaryStackDescription')"
    :skills="secondaryStack"
    :speed="5000"
    :reverse="true"
    />
    <SkillsCarousel
    :title="$t('InfraTitle')"
    :description="$t('InfraDescription')"
    :skills="infraStack"
    :speed="6500"
    :reverse="false"
    />
    <div>
      <div>
        <div>
          <div class="parcours-section flex flex-col" id="item-3">
            <div class="flex items-start">
              <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
              <h2 class="parcours-title text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Parcours") }}</h2>
            </div>
            <ul class="parcours-ul timeline-content timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li class="parcours-li timeline-item">
                 <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10 md:text-start">
                  <time class="font-mono font-black italic">{{ $t("2024") }} / {{ $t("2025") }} / {{ $t("2026") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} Udemy</div>
                  {{ $t("Formation") }} Nuxt.js  /  Tailwind.css <br>
                  {{ $t("Formation") }} Python  /  PostgreSQL  /  Django <br>
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                 <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">{{ $t("2023") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Creation") }}</div>
                  Pierre Tinard (EI)  Shoshin Web Services
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-end mb-10 md:text-start">
                  <time class="font-mono font-black italic">{{ $t("2021") }} / {{ $t("2023") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} {{ $t("DevWeb") }}</div>
                  (OpenClassrooms)<br />
                  {{ $t("Certification") }}   => RNCP code 326T <br />
                  <br />P1 => {{ $t("P1") }} <br />
                  P2 => {{ $t("P2") }} <br />
                  P3 => {{ $t("P3") }} <br />
                  P4 => {{ $t("P4") }} <br />
                  P5 => {{ $t("P5") }} <br />
                  P6 => {{ $t("P6") }} <br />
                  {{ $t("P6Techno") }} <br />
                  P7 => {{ $t("P7")}} <br />
                  {{ $t("P7Techno") }} <br />
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic"> {{ $t("2019") }} / {{ $t("2020") }} </time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Teleconseiller") }} Phone Régie</div>
                 {{ $t("Appel") }} <br />
                  {{ $t("Bancaires") }} <br />
                  {{ $t("Call") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic"> {{ $t("2018") }} </time>
                  <div class="text-lg font-black text-orange-400"> {{ $t("Brevet") }}</div>
                   {{ $t("Animation") }} <br />
                   {{ $t("Pedagogie") }} <br />
                   {{ $t("Reference") }} =>  N° 16-10-18<br />
                   {{ $t("Experience") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">{{ $t("2007") }} / {{ $t("2018") }}</time>
                  <div class="text-lg font-black flex-wrap text-orange-400"> {{ $t("Vente") }}</div>
                  {{ $t("Duree") }} <br>
                  {{ $t("Commerce") }} <br>
                  {{ $t("Responsabilites") }} <br />
                 {{ $t("Activites") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic"> {{ $t("2006") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Lait") }}</div>
                   {{ $t("Fabrication") }}
                  <br />{{ $t("Fromages") }} <br />
                  ENILV La Roche-sur-Foron
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li class="parcours-li timeline-item">
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic"> {{ $t("2004") }} / {{ $t("2005") }}</time>
              <div class="text-lg font-black text-orange-400">{{ $t("DAEU") }}</div>
                  {{ $t("Equivalence") }} <br />
                  {{ $t("Epreuves") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
            </ul>
          </div>
        </div>

      <div class="flex items-center mb-6 mt-10 sm:mt-12 md:mt-6 lg:mt-12 xl:mt-12 2xl:mt-4" id="item-4">
        <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-2 size-12 2xl:ml-24 shrink-0" />
        <h2 class="text-2xl font-black text-sky-700 dark:text-white my-4 ml-4">{{ $t("Projets") }}</h2>
      </div>
      <div class="max-w-4xl mx-auto px-6 mb-16">
        <p class="text-xl text-sky-700 dark:text-white text-center">
          {{ $t("ProjectsIntro1") }}
        </p>
         <p class="text-xl text-sky-700 dark:text-white text-center">
          {{ $t("ProjectsIntro2") }}
        </p>
      </div>

      <ProjectCaseStudies />

      <ProjectsCarousel />

      <div class="flex my-12" id="item-5">
        <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-2 size-12 2xl:ml-24" />
        <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-4 ml-4" id="contact-form">{{ $t("Contact") }}</h2>
      </div>

      <div class="max-w-2xl mx-auto px-6 mb-16 text-center">
        <h3 class="text-xl font-black text-sky-700 dark:text-white">
          {{ $t("ProofTitle") }}
        </h3>
        <p class="mt-4 text-xl text-sky-700 dark:text-white">
          {{ $t("ProofText1") }}
        </p>
         <p class="mt-4 text-xl text-sky-700 dark:text-white">
          {{ $t("ProofText2") }}
        </p>
      </div>

      <ProofBlock />

      <ContactForm />

      <div class="flex items-start" id="item-6">
        <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
        <h2 class="flex text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("News")}}</h2>
      </div>
      <p class="max-w-3xl mx-auto text-xl text-center text-sky-700 dark:text-white mb-12">
        {{ $t("NewsIntro") }}
      </p>

      <NewsSection />
    </div>

    <template>
      <MaintenanceToggleButton v-if="isAdmin" />
    </template>
    </div>
  </div>
</ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '#imports'
import ContactForm from '~/components/ui/ContactForm.vue'
import ImageSwitcher from '~/components/ui/ImageSwitcher.vue'
import WelcomeMessage from '~/components/ui/WelcomeMessage.vue'
import DisplayTagline from '~/components/ui/DisplayTagline.vue'
import { mainStack, secondaryStack, infraStack } from '~/data/skills'
import ServiceIntro from '~/components/sections/services/ServiceIntro.vue'
import ServiceProblems from '~/components/sections/services/ServiceProblems.vue'
import ServiceSolutions from '~/components/sections/services/ServiceSolutions.vue'
import ServiceProcess from '~/components/sections/services/ServiceProcess.vue'
import { vSlideIn } from '@/directives/vSlideIn'
import SkillsIntro from '~/components/sections/skills/SkillsIntro.vue'
import SkillCard from '~/components/sections/skills/SkillCard.vue'
import ProjectCaseStudies from '~/components/sections/projects/ProjectCaseStudies.vue'
import ProofBlock from '~/components/ui/ProofBlock.vue'
import NewsSection from '~/components/sections/news/NewsSection.vue'



const show = ref(false)
const handleShowDefinitions = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 20000)
}

const { checkAdmin } = useAdminAuth()
const isAdmin = ref(false)

onMounted(async () => {
  isAdmin.value = await checkAdmin()
})

onMounted(() => {
  window.addEventListener('show-definitions', handleShowDefinitions)
})

onBeforeUnmount(() => {
  window.removeEventListener('show-definitions', handleShowDefinitions)
})

useHead({
  title: 'Shoshin Web Services',

  meta: [
    { name: 'description', content: 'Des services web de qualité avec des solutions évolutives.' },
    { name: 'author', content: 'Pierre Tinard' },
    {
      name: 'keywords',
      content: 'Shoshin Web Services, portfolio, services web, développement web, freelance, backend, Python, Nuxt, Pierre Tinard',
    }
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Shoshin Web Services",
        "description": "Services web de qualité - Développement web, backend Python, Nuxt.js",
        "url": "https://www.shoshin-web-services.com",
        "image": "https://www.shoshin-web-services.com/images/HomeSWS.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Carcassonne",
          "addressRegion": "Occitanie",
          "postalCode": "11000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.2130",
          "longitude": "2.3491"
        },
        "founder": {
          "@type": "Person",
          "name": "Pierre Tinard"
        },
        "sameAs": [
          "https://www.linkedin.com/in/pierre-tinard"
        ]
      })
    }
  ]
})
</script>