/* stores/maintenance.global.ts */
import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from '#imports'
import { useAdminStore } from '~/stores/useAdminStore'

export default defineNuxtRouteMiddleware(async (to) => {
  // Pas de check si on est déjà sur /maintenance ou /admin
  if (to.path.startsWith('/maintenance') || to.path.startsWith('/admin')) {
    return
  }

  // Si on est en mode API ou autre, on ne check pas
  if (to.path.startsWith('/api')) {
    return
  }

  const adminStore = useAdminStore()

  // Si pas encore vérifié, on refresh
  if (!adminStore.checked) {
    await adminStore.refresh()
  }

  // Si admin => bypass maintenance
  if (adminStore.isAdmin) {
    return
  }

  try {
    const base = useRuntimeConfig().public.apiBase
    const res = await fetch(`${base}/api/maintenance`, { cache: 'no-store' })
    const data = await res.json()

    if (data.enabled) {
      return navigateTo('/maintenance')
    }
  } catch (e) {
    console.error('❌ Erreur middleware maintenance:', e)
    // En cas d'erreur backend, on ne bloque pas l'accès
    return
  }
})
