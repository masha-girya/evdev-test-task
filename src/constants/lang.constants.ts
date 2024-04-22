export type TLang = 'ENG' | 'UA' | 'RU';

export const LANG_CONSTANTS: Record<string, TLang> = {
  eng: 'ENG',
  ua: 'UA',
  ru: 'RU',
} as const;