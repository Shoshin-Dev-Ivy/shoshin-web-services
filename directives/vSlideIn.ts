import type { Directive } from 'vue'

export const vSlideIn: Directive<HTMLElement, number> = {
  mounted(el, binding) {
    const delay = binding.value ?? 0

    const reset = () => {
      el.style.transition = 'none'
      el.style.opacity = '0'
      el.style.transform = 'translateX(-40px)'
    }

    const animate = () => {
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      el.style.opacity = '1'
      el.style.transform = 'translateX(0)'
    }

    reset()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
        } else {
          reset()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
  }
}