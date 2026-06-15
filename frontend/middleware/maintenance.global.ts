/* middleware/maintenance.global.ts */
import { useMaintenanceStore } from '~/stores/maintenance'
import { useAdminStore } from '~/stores/useAdminStore'

export default defineNuxtRouteMiddleware(async (to) => {
  // Les bots (Google, Bing) ne sont jamais redirigés
  if (process.server) {
    const headers = useRequestHeaders()
    const userAgent = headers['user-agent'] || ''
    const isBot = /bot|crawler|spider|crawling|googlebot|bingbot/i.test(userAgent)
    
    if (isBot) {
      return // Les bots ne sont jamais redirigés
    }
  }
  
  // BYPASS temporaire - Permet accès au login admin
  if (to.path.includes('/admin/login') || to.path.includes('/admin')) {
    return
  }

  const maintenanceStore = useMaintenanceStore()
  const adminStore = useAdminStore()

  // Charge l'état de maintenance si pas encore fait
  if (!maintenanceStore._loaded) {
    try {
      await maintenanceStore.fetch()
    } catch (error) {
      console.error('[maintenance.middleware] Erreur fetch:', error)
      maintenanceStore.enabled = false
      maintenanceStore._loaded = true
    }
  }

  const enabled = maintenanceStore.enabled
  const isAdmin = adminStore.isAdmin

  // Les admins peuvent toujours naviguer
  if (isAdmin) {
    return
  }

  // Si maintenance activée et pas sur /maintenance
  if (enabled && !to.path.includes('/maintenance')) {
    return navigateTo('/maintenance')
  }

  // Si maintenance désactivée et sur /maintenance
  if (!enabled && to.path.includes('/maintenance')) {
    return navigateTo('/')
  }
})













