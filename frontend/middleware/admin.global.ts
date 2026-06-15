/* middleware/admin.global.ts */
export default defineNuxtRouteMiddleware(async (to) => {
  // Ignore les routes non-admin
  if (!to.path.startsWith('/admin')) return

  // Autorise la page de login
  if (to.path === '/admin/login' || to.path.includes('/admin/login')) return

  const config = useRuntimeConfig()

  try {
    // Vérifie le cookie admin via l'API
    const res = await fetch(`${config.public.apiBaseUrl}/api/admin/check`, {
      credentials: 'include' // Envoie le cookie HttpOnly
    })

    if (!res.ok) {
      console.warn('[admin.middleware] Non authentifié, redirection vers login')
      return navigateTo('/admin/login')
    }
  } catch (error) {
    console.error('[admin.middleware] Erreur:', error)
    return navigateTo('/admin/login')
  }
})