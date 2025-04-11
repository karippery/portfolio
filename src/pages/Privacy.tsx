import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translation/translations';

const Privacy = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t.privacyTitle || 'Privacy Policy'}</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t.cookiePolicy || 'Cookie Policy'}</h2>
        <p className="mb-4">
          {t.cookieText1 || 'Our website uses cookies to improve user experience.'}
        </p>
        <p className="mb-4">
          {t.cookieText2 || 'We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period).'}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t.typesOfCookies || 'Types of Cookies Used'}</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t.essentialCookies || 'Essential cookies: Necessary for website functionality'}</li>
          <li>{t.analyticsCookies || 'Analytics cookies: Help us understand how visitors interact with our site'}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">{t.manageCookies || 'Managing Cookies'}</h2>
        <p>
          {t.cookieControl || 'You can control and/or delete cookies through your browser settings.'}
        </p>
      </section>
    </div>
  );
};

export default Privacy;