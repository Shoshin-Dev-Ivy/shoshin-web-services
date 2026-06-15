/* server/api/health.frontend.ts */
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    databaseUrlExists: !!config.databaseUrl
  }
})
