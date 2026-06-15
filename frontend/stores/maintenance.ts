/* stores/maintenance.ts */
import { defineStore } from 'pinia'

export const useMaintenanceStore = defineStore('maintenance', {
  state: () => ({
    enabled: false,
    _loaded: false
  }),

  actions: {
    /**
     * Récupère l'état de maintenance depuis l'API
     */
    async fetch() {
      const config = useRuntimeConfig()
      
      try {
        const res = await fetch(`${config.public.apiBaseUrl}/api/maintenance`, {
          credentials: 'include'
        })

        if (res.ok) {
          const data = await res.json()
          this.enabled = data.enabled ?? false
        } else {
          this.enabled = false
        }
      } catch (error) {
        console.error('[maintenance:fetch] Erreur:', error)
        this.enabled = false
      } finally {
        this._loaded = true
      }
    },

    /**
     * Toggle maintenance (admin uniquement)
     */
    async toggle() {
      const config = useRuntimeConfig()
      
      try {
        const res = await fetch(`${config.public.apiBaseUrl}/api/maintenance/toggle`, {
          method: 'POST',
          credentials: 'include' // Envoie le cookie admin
        })

        if (res.ok) {
          const data = await res.json()
          this.enabled = data.enabled
        } else {
          const error = await res.json()
          throw new Error(error.error || 'Toggle failed')
        }
      } catch (error) {
        console.error('[maintenance:toggle] Erreur:', error)
        throw error
      }
    }
  }
})