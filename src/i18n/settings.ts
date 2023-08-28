export const fallbackLng = 'en'
export const languages = ['zh', fallbackLng, 'fr', 'de', 'hi', 'it', 'ja', 'es']
export const countries = {
  'zh': 'Chinese',
  'en': 'English',
  'fr': 'French',
  'de': 'German',
  'hi': 'Hindi',
  'it': 'Italian',
  'ja': 'Japanese',
  'es': 'Spanish'
}

export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}