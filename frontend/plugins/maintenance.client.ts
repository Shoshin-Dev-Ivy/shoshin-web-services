/* plugins/maintenance.client.ts */
import { defineNuxtPlugin } from '#app'
import { useMaintenanceStore } from '~/stores/maintenance'

export default defineNuxtPlugin(async () => {
  const maintenance = useMaintenanceStore()

  // Charge l'état de maintenance une seule fois
  if (!maintenance._loaded) {
    try {
      await maintenance.fetch()
    } catch (error) {
      console.error('[plugin:maintenance] Erreur lors du chargement:', error)
      // En cas d'erreur, on considère que la maintenance est désactivée
      maintenance.enabled = false
      maintenance._loaded = true
    }
  }
})