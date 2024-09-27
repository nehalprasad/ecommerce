import I18n from 'i18next';

import en from './en'

I18n.init({
  resources: {
    en
  },
  fallbackLng: 'en',
  whitelist: ['en']
});

export default I18n;