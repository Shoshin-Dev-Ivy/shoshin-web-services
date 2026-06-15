/* stores/useAdminStore.ts */
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    isAdmin: false,
    checked: false,
  }),

  actions: {
    /**
     * Login avec cookie HttpOnly (géré par le backend)
     */
    async login(key: string) {
      const config = useRuntimeConfig()
      
      try {
        const res = await fetch(`${config.public.apiBaseUrl}/api/admin/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // Envoie/reçoit les cookies
          body: JSON.stringify({ key })
        })

        if (res.ok) {
          // Le cookie est automatiquement stocké par le navigateur
          this.isAdmin = true
          this.checked = true
          return true
        } else {
          const data = await res.json()
          throw new Error(data.error || 'Invalid credentials')
        }
      } catch (error) {
        console.error('[admin:login] Erreur:', error)
        this.isAdmin = false
        this.checked = true
        throw error
      }
    },

    /**
     * Vérifie si l'utilisateur est admin via le cookie
     */
    async refresh() {
      const config = useRuntimeConfig()
      
      try {
        const res = await fetch(`${config.public.apiBaseUrl}/api/admin/check`, {
          credentials: 'include' // Envoie le cookie
        })

        this.isAdmin = res.ok
        this.checked = true
      } catch (error) {
        console.error('[admin:refresh] Erreur:', error)
        this.isAdmin = false
        this.checked = true
      }
    },

    /**
     * Logout - supprime le cookie via le backend
     */
    async logout() {
      const config = useRuntimeConfig()
      
      try {
        await fetch(`${config.public.apiBaseUrl}/api/admin/logout`, {
          method: 'POST',
          credentials: 'include'
        })
      } catch (error) {
        console.error('[admin:logout] Erreur:', error)
      } finally {
        this.isAdmin = false
        this.checked = false
      }
    },

    /**
     * Clear local state (sans toucher au cookie)
     */
    clear() {
      this.isAdmin = false
      this.checked = false
    }
  }
})