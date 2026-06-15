<!-- components/Footer.vue -->
<template>
        <footer>
        <ClientOnly>
                <div class="flex justify-center mx-auto">
                        <img src="assets/images/logo.svg" alt="logo" class="nav-fix flex h-16 w-16 my-6 mx-2 rounded-full border-2 border-sky-700 dark:border-orange-400"/>
                        <div class="nav-fix div flex text-2xl text-orange-400 mt-10 mb-10 -ml-1">
                                <p class="font-black text-orange-400">{</p> 
                                <p class="flex text-sky-700 mx-1 dark:text-white">{{ $t("Shoshin") }}</p>
                                <p class="flex text-2xl text-orange-400 font-black mx-1">{{ $t("Web") }}</p> 
                                <p class="flex text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p>
                                <p class="font-black text-orange-400">}</p>
                        </div>
                </div>
                <div class="flex justify-center mx-auto -mt-12">
                        <h2 class="text-2xl text-orange-400 text-center font-black my-10">{{ $t("Titre") }}</h2>
                </div>

                <ul class="flex justify-center mx-auto -mt-1">
                        <li>
                                <a href="https://www.linkedin.com/in/pierre-tinard-867200207/" aria-label="Cliquez ici pour accéder mon profil LinkedIn" target="_blank">
                                <Icon name="entypo-social:linkedin" class="size-8 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"/>
                                </a>
                        </li>
                        <li>
                                <a href="https://github.com/Shoshin-Dev-Ivy?tab=repositories&q=&type=&language=&sort=name" aria-label="Cliquez ici pour accéder mon profil GitHub" target="_blank">
                                <Icon name="mdi:github" class="size-9 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"/>
                                </a> 
                        </li>
                </ul>
                <div class="flex flex-col justify-center mx-auto mt-4 md:flex-row lg:flex justify-items-normal lg:w-full pb-4">
                        <NuxtLink :to="localePath('/section/mentionslegales')"
                        class="flex justify-center text-sky-700 dark:text-white hover:underline decoration-sky-700 dark:decoration-white underline-offset-4"
                        aria-label="Cliquez ici pour aller sur la page des mentions légales">
                        {{ $t("Mentions") }}
                        </NuxtLink>
                        <p class="flex justify-center text-sky-700 dark:text-white mx-1"></p>
                        <NuxtLink :to="localePath('/section/confidentialite')" class="flex justify-center text-sky-700 dark:text-white hover:underline decoration-sky-700 dark:decoration-white underline-offset-4"
                        aria-label="Cliquez ici pour aller sur la page de confidentialité">
                        {{ $t("Confidentialite") }}
                        </NuxtLink>
                        <p class="flex justify-center text-sky-700 dark:text-white mx-1"></p>
                        <button @click="handleCookieModal" class="flex justify-center text-sky-700 dark:text-white hover:underline decoration-sky-700 dark:decoration-white underline-offset-4"
                        aria-label="Modifier les préférences de cookies">
                                {{ $t("GererCookies") }}
                        </button>
                </div>
                <div>
                        <p class="text-base text-center text-sky-700 dark:text-white pb-4">{{ $t('reCAPTCHA') }}</p>
                        <div class="lg:flex flex-row space-x-2 justify-center">
                                <p class="text-base text-center text-sky-700 dark:text-white pb-4"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-sky-700 dark:decoration-white underline-offset-4">{{ $t('Confidentialite') }}</a>
                                </p>
                                <p class="text-base text-center text-sky-700 dark:text-white pb-4">{{ $t('Et') }} <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="hover:underline decoration-sky-700 dark:decoration-white underline-offset-4">{{ $t('ConditionsUtilisation') }}</a>&nbsp{{ $t('De')}} {{ $t('DeGoogle') }}
                                </p>
                        </div>
                </div>
                <div class="nav-fix scroll flex flex-col justify-center md:flex-row pb-4 lg:flex justify-items-normal lg:w-full">
                        <p class="flex mx-auto md:mx-0 md:mr-6 text-sky-700 dark:text-white">
                        <Icon name="lucide:copyright" class="mr-2 -my-0"/>{{ $t("2026") }} - {{ $t("Shoshin") }} {{ $t("Web") }}  {{ $t("Services") }}
                        </p>
                        <p class="flex mx-auto md:mx-0 text-sky-700 dark:text-white">{{ $t("Droits") }}</p>
                </div>
        </ClientOnly>
        </footer>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useHead, useLocalePath } from '#imports'

import { useAdminStore } from '~/stores/useAdminStore'
import { useMaintenanceStore } from '~/stores/maintenance'

// Initialisation des stores
const adminStore = useAdminStore()
const maintenanceStore = useMaintenanceStore()

// Computed pour footer.vue
const enabled = computed(() => maintenanceStore.enabled)

const localePath = useLocalePath()

onMounted(async () => {
  // Fetch maintenance store
  await maintenanceStore.fetch()

  // Refresh admin store si nécessaire (token déjà géré par plugin)
  if (!adminStore.checked) {
    await adminStore.refresh()
  }
})

// Fonction modal cookies
function handleCookieModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-modal'))
  }
}

// Head du composant
useHead({
  meta: [
    { name: 'description', content: 'Pied de page, footer.' }
  ],
})
</script>

<style>
</style>

