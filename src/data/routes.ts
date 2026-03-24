import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  {
    name: 'home',
    href: '/',
    icon: ['fas', 'home'],
  },
  {
    name: 'links',
    href: '/links',
  },
  {
    name: 'blog',
    href: '/blog',
  },
  {
    name: '1337',
    href: 'https://1337.org.tr',
    type: 'dropdown',
  },
]
