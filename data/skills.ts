// data/skills.ts

export interface Skill {
  icon: string
  label: string
}

export const mainStack: Skill[] = [
  { icon: 'logos:nodejs', label: 'Node.js' },
  { icon: 'logos:python', label: 'Python' },
  { icon: 'logos:django', label: 'Django' },
  { icon: 'logos:nuxt', label: 'Nuxt.js' },
  { icon: 'skill-icons:tailwindcss-light', label: 'Tailwind CSS' },
  { icon: 'logos:postgresql', label: 'PostgreSQL' },
  { icon: 'logos:typescript-icon', label: 'TypeScript' },
  { icon: 'simple-icons:directus', label: 'Directus' },
]

export const secondaryStack: Skill[] = [
  { icon: 'devicon:javascript', label: 'JavaScript' },
  { icon: 'logos:symfony', label: 'Symfony' },
  { icon: 'devicon:angular', label: 'Angular' },
  { icon: 'logos:go', label: 'Go' },
  { icon: 'logos:php', label: 'PHP' },
  { icon: 'devicon:wordpress', label: 'WordPress' },
]

export const infraStack: Skill[] = [
  { icon: 'logos:docker', label: 'Docker' },
  { icon: 'logos:nginx', label: 'Nginx' },
  { icon: 'logos:prometheus', label: 'Prometheus' },
]