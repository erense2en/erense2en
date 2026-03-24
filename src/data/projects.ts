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
    icon: ['fab', 'paypal'],
  },
  {
    title: 'Discord',
    description:
      "My own discord server",
    href: 'https://discord.gg/1974',
    icon: ['fab', 'discord'],
  },
  
]
