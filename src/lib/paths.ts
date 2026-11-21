// URL helpers. The site can live under a sub-path (GitHub Pages) or at the root (own domain).
const base = import.meta.env.BASE_URL.replace(/\/+$/, '') + '/';

export type Lang = 'zh' | 'en';

/** Path of a file in public/, for example asset('assets/img/logo.png'). */
export function asset(path: string): string {
  return base + path.replace(/^\/+/, '');
}

/** Returns a function that builds page links for one language. Chinese is the default (no prefix). */
export function makeLink(lang: Lang) {
  return (path = ''): string => base + (lang === 'en' ? 'en/' : '') + path.replace(/^\/+/, '');
}
