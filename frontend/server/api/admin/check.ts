/* server/api/admin/check.ts */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const res = await fetch(
      `${config.public.apiBase}/api/admin/check`,
      {
        headers: {
          cookie: getHeader(event, 'cookie') || ''
        }
      }
    )

    if (!res.ok) {
      return { authenticated: false }
    }

    return await res.json()
  } catch {
    return { authenticated: false }
  }
})