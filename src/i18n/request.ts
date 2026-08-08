import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import gb from '../../messages/gb.json';
import jp from '../../messages/jp.json';
import cn from '../../messages/cn.json';
import es from '../../messages/es.json';
import id from '../../messages/id.json';
import vn from '../../messages/vn.json';

const messagesMap: Record<string, any> = {
  'gb': gb,
  'jp': jp,
  'cn': cn,
  'es': es,
  'id': id,
  'vn': vn
};

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: messagesMap[locale] || gb
  };
});
