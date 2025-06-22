// i18n/translations.js
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: {
    welcome: 'Welcome to W',
    login: 'Login with Google',
    post: 'New Post',
    send: 'Send',
    message: 'Write a message...',
    publish: 'Publish',
    writePost: 'Write your post here...'
  },
  ar: {
    welcome: 'مرحباً بك في W',
    login: 'تسجيل الدخول عبر جوجل',
    post: 'منشور جديد',
    send: 'إرسال',
    message: 'اكتب رسالة...',
    publish: 'نشر',
    writePost: 'اكتب منشورك هنا...'
  }
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
