import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lng: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/translation.json`)))
    .init(getOptions(lng, 'translation'))
  return i18nInstance
}

export async function useTranslation(lng: string, options = {}) {
  const i18nextInstance = await initI18next(lng)

  return {
    t: i18nextInstance.getFixedT(lng, 'translation', options.keyPrefix),
    i18n: i18nextInstance
  }
}