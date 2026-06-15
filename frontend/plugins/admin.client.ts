/* plugins/admin.client.ts */
import { useAdminStore } from '~/stores/useAdminStore'

export default defineNuxtPlugin(async () => {
  const adminStore = useAdminStore()

  // Vérifie si un cookie admin existe au chargement
  // Le cookie HttpOnly sera automatiquement envoyé avec les requêtes
  await adminStore.refresh()
})