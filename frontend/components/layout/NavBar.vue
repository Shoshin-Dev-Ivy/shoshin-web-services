<!-- components/NavBar.vue -->
<template>
    <div class="w-auto">
        <ClientOnly>
        <nav class="md:grid grid-cols-2 md:row-span-4 md:items-center md:justify-items-center">
            <div class="flex justify-center mx-auto md:flex md:items-start md:col-span-2 md:my-2 md:mt-10 md:w-auto 
            md:justify-evenly">
                <div class="flex justify-center 2xl:justify-center sm:ml-6">
                    <img src="assets/images/logo.svg" alt="Logo" class="nav-fix h-16 w-16 my-6 mx-2 sm:ml-4 rounded-full border-2 border-sky-700 dark:border-orange-400 cursor-pointer" @click="showDefinitions" />
                    <div class="nav-fix div flex text-2xl text-orange-400 mt-10 mb-10 -ml-1">
                        <p class="font-black text-orange-400">{</p>
                        <p class="flex text-sky-700 mx-1 dark:text-white">{{ $t("Shoshin") }}</p>
                        <p class="flex text-2xl text-orange-400 font-black mx-1">{{ $t("Web") }}</p> 
                        <p class="flex text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p>  
                        <p class="font-black text-orange-400">}</p>
                    </div>
                </div>
            </div>
            <div class="2xl:hidden">
                <button @click="toggleMenu" value="hamburger"  
                class="hamburger-menu flex flex-col justify-around justify-self-center h-8 w-8 p-1 my-4 ml-2 mb-16 rounded md:hidden" aria-label="Toggle menu"> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                </button> 
            <div v-if="isMenuOpen" class="flex flex-col pt-8 overflow-x-hidden gap-4">
            <NuxtLink class="relative group overflow-hidden flex -mt-10 justify-center text-orange-400 font-black hover:underline hover:underline-offset-8 py-2 dark:text-white text-2xl transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour revenir sur la page d'accueil"
                :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black hover:underline dark:text-white text-2xl hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie services"
                :to="{ path: localePath('/'), hash:'#item-1' }">{{ $t("Services") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie skills"
                :to="{ path: localePath('/'), hash:'#item-2' }">{{ $t("Skills") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie portfolio"
                :to="{ path: localePath('/'), hash:'#item-3' }">{{ $t("Projets") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie contact"
                :to="{ path: localePath('/'), hash:'#item-4' }">{{ $t("Contact") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie news"
                :to="{ path: localePath('/APropos') }">{{ $t("APropos") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <NuxtLink class="relative group overflow-hidden flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 transition-transform transform hover:scale-105 duration-300"
                aria-label="Cliquez ici pour accéder à la partie news"
                :to="{ path: localePath('/'), hash:'#item-5' }">{{ $t("News") }}
                <span class="absolute bottom-0 left-0 w-0 h-0 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </NuxtLink>
              <div class="flex justify-center mb-16">
                <button v-if="adminStore.isAdmin" @click="toggleMaintenance"
                  class="justify-items-center text-sky-700 text-xl xl:text-lg dark:text-white hover:bg-gradient-to-r from-orange-400 -mt-4 px-8 py-6 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl animate-pulse focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
                  {{ enabled ? $t("Desactiver") : $t("Activer") }} {{ $t("MaintenanceToggle") }}
                </button>
              </div>
            </div>
          </div>
            <div class="hidden md:flex md:flex-wrap md:col-span-6 md:mx-auto md:justify-center md:items-center gap-x-6 gap-y-8 2xl:w-full 2xl:justify-center">
              <NuxtLink v-for="({ label, hash, path, aria }, index) in links" :key="index" :aria-label="aria" 
              :to="path ? localePath(path) : { path: localePath('/'), hash }"
              :class="[ 'relative group overflow-hidden text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-2 transition-transform transform hover:scale-105 duration-300',
              enabled ? 'pointer-events-none select-none' : '' ]">
              {{ $t(label) }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 dark:bg-white transition-all duration-300 group-hover:w-full">
              </span>
              </NuxtLink>
              <div class="flex">
                <button v-if="adminStore.isAdmin" @click="toggleMaintenance"
                        class="justify-items-center text-sky-700 text-xl xl:text-lg dark:text-white hover:bg-gradient-to-r from-orange-400 
                        -mt-4 px-8 py-6 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl animate-pulse focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
                        {{ enabled ? $t("Desactiver") : $t("Activer") }} {{ $t("MaintenanceToggle") }}
                </button>
              </div>
            </div>
            <div class="flex justify-center md:mt-20">
                <a href="https://calendly.com/shoshinwebservices" aria-label="Cliquez ici pour prendre un rendez-vous sur l'agenda Calendly" 
                role="button"  cta-button target="_blank">
                    <button class="cta-rdv justify-items-center text-sky-700 text-xl xl:text-lg dark:text-white hover:bg-gradient-to-r from-orange-400 
                    -mt-4 px-8 py-6 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl animate-pulse focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
                        {{ $t("RDV") }}
                    </button>
                </a>
            </div>
            <div class="2xl:col-span-1">
                <div class="mode-switch 2xl:col-span-1 justify-items-center my-10 md:justify-items-center md:my-10">
                    <ModeSwitch />
                </div> 

                <div class="lang-switch justify-self-center my-10">
                    <button @click="setLocale('fr')" role="button" class="dark:text-white text-2xl px-4">
                        <img src="assets/images/flagFR.webp" alt="drapeau français" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400"/>
                    </button>
                    <button @click="setLocale('en')" role="button" class="dark:text-white text-2xl px-4">
                        <img src="assets/images/flagEN.webp" alt="drapeau anglais" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400" />
                    </button>
                    <button @click="setLocale('ja')" role="button" class="dark:text-white text-2xl px-4">
                        <img src="assets/images/flagJA.webp" alt="drapeau japonais" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400"/>
                    </button>
                </div>
            </div>
        </nav>
    </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useHead, useLocalePath, useI18n, useRouter } from '#imports'
import { useAdminStore } from '~/stores/useAdminStore'
import { useMaintenanceStore } from '~/stores/maintenance'

const adminStore = useAdminStore()
const maintenanceStore = useMaintenanceStore()
const enabled = computed(() => maintenanceStore.enabled)
const router = useRouter()
const localePath = useLocalePath()

// Fonction toggle maintenance avec redirection
async function toggleMaintenance() {
  await maintenanceStore.toggle()
  
  // Force la redirection après le toggle
  if (maintenanceStore.enabled) {
    // Maintenance activée -> redirige vers page maintenance
    await router.push(localePath('/maintenance'))
  } else {
    // Maintenance désactivée -> retour à l'accueil
    await router.push(localePath('/'))
  }
}

// Watch pour gérer les changements externes
watch(enabled, (newValue) => {
  const currentPath = router.currentRoute.value.path
  
  if (newValue && !currentPath.includes('/maintenance')) {
    router.push(localePath('/maintenance'))
  } else if (!newValue && currentPath.includes('/maintenance')) {
    router.push(localePath('/'))
  }
})

onMounted(async () => {
  // Fetch maintenance store
  await maintenanceStore.fetch()

  // Refresh admin store si nécessaire
  if (!adminStore.checked) {
    await adminStore.refresh()
  }
  
  // Vérifie l'état initial au montage
  if (maintenanceStore.enabled && !router.currentRoute.value.path.includes('/maintenance')) {
    await router.push(localePath('/maintenance'))
  }
})

const { setLocale } = useI18n()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const showDefinitions = () => {
  const event = new CustomEvent('show-definitions')
  window.dispatchEvent(event)
}

useHead({
  meta: [
    {
      name: 'description',
      content: 'Barre de navigation avec le logo, et les raccourcis Accueil, Compétences, Projets, Contact et un CTA RDV.',
    },
  ],
})

const links = [
  { label: 'Accueil', hash: '', aria: 'Cliquez ici pour revenir sur la page d\'accueil' },
  { label: 'Services', hash: '#item-1', aria: 'Cliquez ici pour accéder à la partie services' },
  { label: 'Skills', hash: '#item-2', aria: 'Cliquez ici pour accéder à la partie skills' },
  { label: 'Projets', hash: '#item-3', aria: 'Cliquez ici pour accéder à la partie projets' },
  { label: 'Contact', hash: '#item-4', aria: 'Cliquez ici pour accéder à la partie contact' },
  { label: 'APropos', path: '/APropos', aria: 'Cliquez ici pour accéder à la partie à propos' },
  { label: 'News', hash: '#item-5', aria: 'Cliquez ici pour accéder à la partie news' },
]
</script>

<style scoped>
</style>

