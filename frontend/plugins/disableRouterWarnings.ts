 /* plugins/disableRouterWarnings.ts */
export default defineNuxtPlugin(() => {
  const originalWarn = console.warn

  console.warn = (message?: unknown, ...optionalParams: unknown[]) => {
    if (
      typeof message === 'string' &&
      message.includes('No match found for location')
    ) {
      return
    }

    originalWarn(message, ...optionalParams)
  }
})

  