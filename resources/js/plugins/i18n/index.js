import { createI18n } from "vue-i18n";
import ar from '../../locales/ar'
import en from '../../locales/en'

export default new createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    globalInjection: true,
    locale: localStorage.getItem('appLang'),
    fallbackLocale: "en",
    availableLocales: ["en", "ar"],
    messages: { ar, en },
});

