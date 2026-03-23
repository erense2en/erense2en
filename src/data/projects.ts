import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'erensezen.com.tr',
    description:
      "Life is good",
    href: 'https://github.com/erense2en',
    icon: ['fas', 'home'],
  },
  {
    title: 'Eren Sezen',
    description:
      "My own discord server",
    href: 'https://discord.gg/1974',
    icon: ['fas', 'discord'],
  },
  
]
