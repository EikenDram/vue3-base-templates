import { createI18n, type FallbackLocale, type Locale } from 'vue-i18n'

import en from '@/locales/en.json'
import { type MessageSchema } from './locales/schema'

export const messages = {
  en: { ...en, $vuetify: 'en' },
} as const

const currentLocale: Locale = localStorage.getItem('locale') ?? import.meta.env.VITE_APP_I18N_LOCALE ?? 'en'
const fallbackLocale: FallbackLocale = import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE ?? 'en'

export const i18n = createI18n<[MessageSchema], 'en'>({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: fallbackLocale,
  messages: messages,
})