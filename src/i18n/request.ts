import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import ko from '../../messages/ko.json';
import en from '../../messages/en.json';

const messagesMap: Record<string, any> = {
  ko,
  en
};

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: messagesMap[locale] || ko
  };
});
