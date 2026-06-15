/* utils/loadScript.ts */
export const loadScript = (src: string, async = true, type = 'text/javascript') => {
    return new Promise<void>((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve()
        return
      }
  
      const script = document.createElement('script')
      script.src = src
      script.async = async
      script.type = type
      script.onload = () => resolve()
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
      document.head.appendChild(script)
    })
  }
  