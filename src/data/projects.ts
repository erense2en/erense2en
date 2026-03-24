import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'PayPal',
    description:
      "Bon appétit",
    href: 'https://www.paypal.com/paypalme/erensezen',
    icon: ['fas', 'paypal'],
  },
  {
    title: 'Eren Sezen',
    description:
      "My own discord server",
    href: 'https://discord.gg/1974',
    icon: ['fas', 'wifi'],
  },
  
]
