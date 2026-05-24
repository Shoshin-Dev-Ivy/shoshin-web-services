// data/skills.ts

export interface Skill {
  icon: string
  label: string
}

export const mainStack: Skill[] = [
  { icon: 'logos:nuxt', label: 'Nuxt.js' },
  { icon: 'devicon:angular', label: 'Angular' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
  { icon: 'devicon:javascript', label: 'JavaScript' },
  { icon: 'logos:nodejs', label: 'Node.js' },
  { icon: 'logos:symfony', label: 'Symfony' },
  { icon: 'logos:postgresql', label: 'PostgreSQL' },
  { icon: 'skill-icons:tailwindcss-light', label: 'Tailwind CSS' },
]

export const secondaryStack: Skill[] = [
  { icon: 'logos:python', label: 'Python' },
  { icon: 'logos:django', label: 'Django' },
  { icon: 'logos:php', label: 'PHP' },
  { icon: 'devicon:wordpress', label: 'WordPress' },
  { icon: 'logos:go', label: 'Go' },
]

export const infraStack: Skill[] = [
  { icon: 'logos:docker', label: 'Docker' },
  { icon: 'logos:nginx', label: 'Nginx' },
  { icon: 'logos:prometheus', label: 'Prometheus' },
]