export const NAV_CONSTANTS = {
  catalog: {
    title: 'catalog',
    link: '/',
  },
  buy: {
    title: 'buy',
    link: '/',
  },
  sell: {
    title: 'sell',
    link: '/',
  },
  blog: {
    title: 'blog',
    link: '/',
  },
  about: {
    title: 'about',
    link: '/',
  },
  services: {
    title: 'services',
    link: '/',
  },
  contact: {
    title: 'contact',
    link: '/',
  },
} as const;

export const ROUTES_CONSTANTS = {
  ...NAV_CONSTANTS,
  home: {
    title: 'home',
    link: '/',
  },
  supportUkraine: {
    title: 'supportUkraine',
    link: '/',
  },
} as const;