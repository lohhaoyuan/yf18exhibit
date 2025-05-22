import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'YF18 Exhibit',
  description:
    'cool beans',
  href: 'https://yf18exhibit.vercel.app',
  author: 'haoyuan',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/tags',
    label: 'analysis',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [

]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
