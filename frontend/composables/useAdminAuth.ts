/* composables/useAdminAuth.ts */
import { useAdminStore } from '~/stores/useAdminStore'

export const useAdminAuth = () => {
  const adminStore = useAdminStore()

  /**
   * Login admin avec gestion d'erreur
   */
  const login = async (key: string): Promise<boolean> => {
    try {
      await adminStore.login(key)
      return adminStore.isAdmin === true
    } catch (error) {
      console.error('[useAdminAuth] Login échoué:', error)
      return false
    }
  }

  /**
   * Vérifie si l'utilisateur est admin
   */
  const checkAdmin = async (): Promise<boolean> => {
    try {
      await adminStore.refresh()
      return adminStore.isAdmin === true
    } catch (error) {
      console.error('[useAdminAuth] Check échoué:', error)
      return false
    }
  }

  /**
   * Logout admin
   */
  const logout = async (): Promise<void> => {
    try {
      await adminStore.logout()
    } catch (error) {
      console.error('[useAdminAuth] Logout échoué:', error)
      // Clear quand même le state local
      adminStore.clear()
    }
  }

  return {
    login,
    checkAdmin,
    logout,
    isAdmin: computed(() => adminStore.isAdmin),
    checked: computed(() => adminStore.checked)
  }
}