import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import en from '../../messages/en.json';
import ja from '../../messages/ja.json';
import zh_CN from '../../messages/zh-CN.json';
import zh_TW from '../../messages/zh-TW.json';
import es from '../../messages/es.json';
import id from '../../messages/id.json';
import vi from '../../messages/vi.json';

const messagesMap: Record<string, any> = {
  'en': en,
  'ja': ja,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'es': es,
  'id': id,
  'vi': vi
};

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: messagesMap[locale] || en
  };
});
