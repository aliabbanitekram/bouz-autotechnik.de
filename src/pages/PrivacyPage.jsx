import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

const SECTIONS = [
  { id: 's1', num: '1', title: 'Datenschutz auf einen Blick' },
  { id: 's2', num: '2', title: 'Hosting & CDN' },
  { id: 's3', num: '3', title: 'Allgemeine Hinweise' },
  { id: 's4', num: '4', title: 'Datenerfassung' },
  { id: 's5', num: '5', title: 'Soziale Medien' },
  { id: 's6', num: '6', title: 'Analyse-Tools & Werbung' },
  { id: 's7', num: '7', title: 'Plugins & Tools' },
  { id: 's8', num: '8', title: 'eCommerce' },
  { id: 's9', num: '9', title: 'Eigene Dienste' },
]

const EN_SECTIONS = [
  {
    id: 's1',
    num: '1',
    title: 'Privacy at a Glance',
    entries: [
      {
        level: 3,
        title: 'General information',
        paragraphs: [
          'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can personally identify you. Detailed information can be found in the full privacy policy below.',
        ],
      },
      {
        level: 3,
        title: 'Data collection on this website',
        paragraphs: [
          'The data processing on this website is carried out by the website operator. The operator contact details can be found in the section “Information on the responsible party” in this privacy policy.',
          'Some data is collected when you provide it to us, for example by entering data in a contact form. Other data is collected automatically or after your consent by our IT systems when you visit the website, especially technical data such as browser, operating system or time of access.',
          'Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze user behavior. If contracts can be initiated or concluded through the website, submitted data may also be processed for offers, orders or other service requests.',
          'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request correction or deletion of this data, to withdraw consent for the future and, under certain circumstances, to request restriction of processing. You also have the right to lodge a complaint with the competent supervisory authority.',
        ],
      },
      {
        level: 3,
        title: 'Analytics tools and third-party tools',
        paragraphs: [
          'When visiting this website, your browsing behavior may be statistically evaluated, mainly using analytics programs. Detailed information on these tools is provided in the following privacy policy.',
        ],
      },
    ],
  },
  {
    id: 's2',
    num: '2',
    title: 'Hosting & CDN',
    entries: [
      {
        level: 3,
        title: 'External hosting',
        paragraphs: [
          'This website is hosted externally. Personal data collected on this website is stored on the servers of the host or hosts. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access data and other data generated through a website.',
          'External hosting is used for contract performance with potential and existing customers and in the interest of secure, fast and efficient provision of our online offer by a professional provider. Where consent is requested, processing is based exclusively on consent pursuant to Art. 6(1)(a) GDPR and Section 25(1) TDDDG. Consent can be withdrawn at any time.',
          'The host will process your data only to the extent necessary to fulfill its service obligations and will follow our instructions regarding this data. The privacy source names KEY WEB AG, Neuwerkstrasse 45/46, 99084 Erfurt, as hosting provider.',
        ],
      },
      {
        level: 4,
        title: 'Data processing agreement',
        paragraphs: [
          'A data processing agreement has been concluded for use of the above service. This legally required agreement ensures that the service provider processes personal data of website visitors only according to our instructions and in compliance with the GDPR.',
        ],
      },
      {
        level: 3,
        title: 'Google Cloud CDN',
        paragraphs: [
          'The website uses the Google Cloud CDN content delivery network provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.',
          'Google provides a globally distributed content delivery network. Technically, the information transfer between your browser and our website is routed through Google’s network. This can improve global availability and performance of the website.',
          'Use of Google Cloud CDN is based on our legitimate interest in providing the website as securely and reliably as possible. Data transfers to the USA are based on the EU Commission’s standard contractual clauses. Further information is available at https://cloud.google.com/terms/eu-model-contract-clause and https://cloud.google.com/cdn/docs/overview?hl=de.',
          'Google is certified under the EU-US Data Privacy Framework. Further information is available at https://www.dataprivacyframework.gov/participant/5780.',
        ],
      },
    ],
  },
  {
    id: 's3',
    num: '3',
    title: 'General Information and Mandatory Information',
    entries: [
      {
        level: 3,
        title: 'Data protection',
        paragraphs: [
          'The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.',
          'When you use this website, various personal data is collected. This privacy policy explains which data we collect, what we use it for, how this happens and for what purpose.',
          'Please note that data transmission on the internet, for example communication by email, may have security gaps. Complete protection of data against access by third parties is not possible.',
        ],
      },
      {
        level: 3,
        title: 'Information on the responsible party',
        paragraphs: [
          'The responsible party for data processing on this website is: Bouz Autotechnik, Musterstrasse 12, 40210 Dusseldorf. Phone: +49 211 000000. Email: info@bouz-autotechnik.de.',
          'The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data, such as names or email addresses.',
        ],
      },
      {
        level: 3,
        title: 'Storage duration and legal bases',
        paragraphs: [
          'Unless a more specific storage period is stated in this privacy policy, your personal data remains with us until the purpose for data processing no longer applies. If you request deletion or withdraw consent, your data will be deleted unless legally permissible reasons for storage remain, such as tax or commercial retention periods.',
          'If you have consented to processing, we process your data on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR for special categories of data. If processing is required for contract performance or pre-contractual measures, Art. 6(1)(b) GDPR applies. Legal obligations are processed under Art. 6(1)(c) GDPR. Processing may also be based on legitimate interests under Art. 6(1)(f) GDPR.',
        ],
      },
      {
        level: 3,
        title: 'Recipients, withdrawal, objection and rights',
        paragraphs: [
          'In the course of business, we work with external parties. Personal data is passed on only where required for contract performance, where legally required, where we have a legitimate interest or where another legal basis permits transfer. Processors receive data only on the basis of a valid data processing agreement.',
          'Many processing operations are possible only with your express consent. You may withdraw consent at any time. The lawfulness of processing carried out before withdrawal remains unaffected.',
          'If data is processed on the basis of Art. 6(1)(e) or (f) GDPR, you may object at any time on grounds relating to your particular situation. If your data is processed for direct marketing, you may object at any time to processing for such advertising.',
          'You have the right to complain to a supervisory authority, the right to data portability, the right to information, correction and deletion, and the right to restriction of processing under the statutory requirements. The website uses SSL or TLS encryption to protect confidential content transmitted to us.',
        ],
      },
    ],
  },
  {
    id: 's4',
    num: '4',
    title: 'Data Collection on this Website',
    entries: [
      {
        level: 3,
        title: 'Cookies',
        paragraphs: [
          'This website uses cookies. Cookies are small data packages stored on your device. They may be temporary session cookies or permanent cookies. Cookies may come from us or from third-party companies and can be technically necessary, used for requested functions, used to optimize the website or used for analytics and advertising.',
          'Necessary cookies are generally stored on the basis of Art. 6(1)(f) GDPR. Where consent for cookies or comparable recognition technologies is requested, processing is based exclusively on that consent pursuant to Art. 6(1)(a) GDPR and Section 25(1) TDDDG. Consent can be withdrawn at any time.',
        ],
      },
      {
        level: 3,
        title: 'Consent with Usercentrics',
        paragraphs: [
          'The privacy source uses the consent technology of Usercentrics GmbH, Sendlinger Strasse 7, 80331 Munich, to obtain and document consent for cookies and certain technologies. When you enter the website, information such as consent status, IP address, browser information, device information and time of visit may be transmitted to Usercentrics.',
          'Usercentrics stores a cookie in your browser to assign granted or withdrawn consent. The collected data is stored until you request deletion, delete the Usercentrics cookie yourself or the purpose no longer applies. Mandatory statutory retention periods remain unaffected.',
          'Use of Usercentrics is based on Art. 6(1)(c) GDPR to obtain legally required consent. A data processing agreement has been concluded for this service.',
        ],
      },
      {
        level: 3,
        title: 'Contact form, email, phone and fax',
        paragraphs: [
          'If you send enquiries through the contact form, the information from the form, including contact details, is stored for processing the request and follow-up questions. This data is not passed on without your consent.',
          'Data submitted through the contact form is processed on the basis of Art. 6(1)(b) GDPR where the enquiry relates to contract performance or pre-contractual measures. In other cases, processing is based on legitimate interest or consent. The data remains with us until deletion is requested, consent is withdrawn or the purpose no longer applies.',
          'If you contact us by email, phone or fax, your enquiry and all resulting personal data are stored and processed to handle your request. The same legal bases and retention principles apply.',
        ],
      },
      {
        level: 3,
        title: 'Registration with Facebook Connect',
        paragraphs: [
          'Instead of direct registration on this website, the privacy source describes possible registration with Facebook Connect, provided by Meta Platforms Ireland Limited. If this function is selected, profile information from Facebook can be transferred to us depending on your privacy settings, for example name, profile picture, email address, Facebook ID, friends list, likes, birthday, gender, country and language.',
          'This data is used to create or provide the account. Use is based on consent. Consent can be withdrawn at any time. Further information is available in Meta’s privacy information.',
        ],
      },
    ],
  },
  {
    id: 's5',
    num: '5',
    title: 'Social Media',
    entries: [
      {
        level: 3,
        title: 'eRecht24 Safe Sharing Tool and Shariff',
        paragraphs: [
          'Content on this website may be shared in social networks in a privacy-friendly way. The eRecht24 Safe Sharing Tool or the Shariff solution can establish direct contact between networks and users only when the user actively clicks one of the buttons.',
          'Automatic transfer of user data to platform operators does not take place merely by entering the page. When the user is logged into a social network, an information window may appear when using social buttons.',
        ],
      },
      {
        level: 3,
        title: 'Facebook, X and Instagram',
        paragraphs: [
          'The privacy source includes integrations for Facebook, X formerly Twitter, and Instagram. These providers may process data such as IP address, page access information and interaction data when social media elements are activated.',
          'Use of these services is generally based on consent under Art. 6(1)(a) GDPR and Section 25(1) TDDDG where consent is requested. Otherwise, it may be based on legitimate interest in visibility on social media. Platform providers may process data in the USA and other third countries, and their respective privacy policies apply.',
        ],
      },
    ],
  },
  {
    id: 's6',
    num: '6',
    title: 'Analytics Tools & Advertising',
    entries: [
      {
        level: 3,
        title: 'Google Analytics',
        paragraphs: [
          'The privacy source includes Google Analytics, a web analytics service by Google Ireland Limited. Google Analytics enables website operators to analyze visitor behavior, such as page views, time spent, operating systems and origin of users. Google may combine this data in a user ID.',
          'Google Analytics uses technologies that enable recognition of users for analyzing behavior, such as cookies or device fingerprinting. Information collected by Google is usually transmitted to and stored on Google servers in the USA.',
          'Use is based on consent under Art. 6(1)(a) GDPR and Section 25(1) TDDDG. IP anonymization is used on the website. Users can prevent storage of cookies through browser settings or use Google’s browser plugin at https://tools.google.com/dlpage/gaoptout?hl=de. A data processing agreement has been concluded with Google.',
        ],
      },
      {
        level: 3,
        title: 'WP Statistics',
        paragraphs: [
          'The privacy source includes WP Statistics to analyze website usage statistically. WP Statistics can collect log files such as IP address, referrer, browser, origin and actions on the website. Data remains on the website operator’s server and the IP address is anonymized.',
        ],
      },
      {
        level: 3,
        title: 'Meta Pixel',
        paragraphs: [
          'The privacy source includes Meta Pixel, provided by Meta Platforms Ireland Limited, for conversion measurement. It allows tracking the behavior of visitors after they click a Meta advertisement and reach the website. This helps evaluate and optimize advertising.',
          'The data is anonymous for the website operator, but Meta may store and process it and connect it with Facebook or Instagram user profiles. Use is based on consent. The source also describes advanced matching, joint responsibility with Meta and data transfers based on standard contractual clauses.',
          'Users can manage advertising settings at https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen or, without a Facebook or Instagram account, at http://www.youronlinechoices.com/de/praferenzmanagement/. Meta is certified under the EU-US Data Privacy Framework.',
        ],
      },
    ],
  },
  {
    id: 's7',
    num: '7',
    title: 'Plugins & Tools',
    entries: [
      {
        level: 3,
        title: 'Google Fonts local hosting',
        paragraphs: [
          'This website uses Google Fonts for uniform font display. The fonts are installed locally. No connection to Google servers is established for this purpose. Further information is available at https://developers.google.com/fonts/faq and in Google’s privacy policy.',
        ],
      },
      {
        level: 3,
        title: 'Google reCAPTCHA',
        paragraphs: [
          'The privacy source includes Google reCAPTCHA, provided by Google Ireland Limited. reCAPTCHA checks whether data entered on the website, for example in a contact form, is entered by a human or by an automated program.',
          'For this purpose, reCAPTCHA analyzes visitor behavior using various characteristics such as IP address, time spent on the website and mouse movements. The analysis runs in the background and data is transmitted to Google. Google acts as a processor under Art. 28 GDPR on the basis of a data processing agreement.',
          'Storage and analysis are based on legitimate interest in protecting the website against abusive automated scraping and spam. Where consent is requested, processing is based on consent under Art. 6(1)(a) GDPR and Section 25(1) TDDDG.',
        ],
      },
    ],
  },
  {
    id: 's8',
    num: '8',
    title: 'eCommerce and Payment Providers',
    entries: [
      {
        level: 3,
        title: 'Customer and contract data',
        paragraphs: [
          'We collect, process and use personal customer and contract data to establish, structure and modify contractual relationships. Usage data is processed only where necessary to enable use of the service or for billing. The legal basis is Art. 6(1)(b) GDPR.',
          'Customer data is deleted after completion of the order or termination of the business relationship and expiry of statutory retention periods. Statutory retention periods remain unaffected.',
        ],
      },
      {
        level: 3,
        title: 'Contract conclusion, online shops, delivery and services',
        paragraphs: [
          'If goods are ordered, personal data may be passed to the transport company responsible for delivery and to the payment service provider responsible for payment processing. Only data required for the respective task is passed on.',
          'For services and digital content, personal data is transmitted to third parties only where necessary for contract processing, for example to the bank handling payment. Further transmission takes place only with express consent. The legal basis is Art. 6(1)(b) GDPR.',
        ],
      },
      {
        level: 3,
        title: 'Payment services and PayPal',
        paragraphs: [
          'The privacy source includes third-party payment services. When making a purchase, payment data such as name, payment amount, bank details or credit card number is processed by the payment provider. The provider’s terms and privacy policies apply.',
          'The source names PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg, as payment service provider. Details are available at https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full and https://www.paypal.com/de/webapps/mpp/ua/privacy-full.',
        ],
      },
    ],
  },
  {
    id: 's9',
    num: '9',
    title: 'Own Services',
    entries: [
      {
        level: 3,
        title: 'Handling applicant data',
        paragraphs: [
          'We offer the possibility to apply to us, for example by email, post or online application form. We process applicant data such as contact and communication data, application documents and notes from interviews only as far as necessary to decide on establishing an employment relationship.',
          'The legal basis is Section 26 BDSG under German law, Art. 6(1)(b) GDPR for general pre-contractual measures and, where consent was given, Art. 6(1)(a) GDPR. Applicant data is shared internally only with persons involved in processing the application.',
          'If the application is successful, submitted data is stored for carrying out the employment relationship. In the application process, public internet research such as Google, LinkedIn and Xing may be carried out on the basis of legitimate interest in obtaining an overall impression from publicly available information.',
          'If no offer is made, an offer is declined or an application is withdrawn, submitted data may be stored for up to six months after the end of the application process on the basis of legitimate interests, especially for evidence in possible disputes. Longer storage may occur with consent or where statutory retention obligations prevent deletion.',
        ],
      },
    ],
  },
]

function PrivacyArticle({ sections }) {
  return (
    <article className="min-w-0 max-w-3xl space-y-10">
      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} data-privacy-section="true" className="scroll-mt-28">
          <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">
            {section.num}. {section.title}
          </h2>
          {section.entries.map((entry) => {
            const HeadingTag = entry.level === 4 ? 'h4' : 'h3'
            const headingClass =
              entry.level === 4
                ? 'font-semibold text-brand-black mt-4 mb-1'
                : 'font-heading font-semibold text-lg text-brand-black mt-6 mb-2'

            return (
              <div key={entry.title}>
                <HeadingTag className={headingClass}>{entry.title}</HeadingTag>
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            )
          })}
          {sectionIndex < sections.length - 1 && <hr className="border-brand-black/10 mt-10" />}
        </section>
      ))}
    </article>
  )
}

export default function PrivacyPage() {
  const { i18n } = useTranslation()
  const [activeId, setActiveId] = useState('s1')
  const isEnglish = i18n.language?.startsWith('en')
  const sections = isEnglish ? EN_SECTIONS : SECTIONS
  const pageLabel = isEnglish ? 'Legal' : 'Rechtliches'
  const pageTitle = isEnglish ? 'Privacy Policy' : 'Datenschutzerklärung'
  const asideLabel = isEnglish ? 'On this page' : 'Auf dieser Seite'

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-privacy-section]'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-brand-steelLight text-brand-black">
      <SEO page="privacy" />
      {/* Page hero */}
      <section className="steel-hero-light border-b border-brand-black/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-red font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            {pageLabel}
          </p>
          <h1 className="steel-text-dark font-heading text-4xl font-extrabold sm:text-5xl">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-steelLight py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-10 xl:gap-16 items-start">
            <aside className="hidden xl:block w-52 shrink-0">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-steel mb-3">
                  {asideLabel}
                </p>
                <nav className="flex flex-col gap-0.5">
                  {sections.map(({ id, num, title }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`flex items-start gap-2 px-2.5 py-1.5 rounded-lg text-sm leading-snug transition-colors ${
                        activeId === id
                          ? 'text-brand-red font-semibold bg-brand-red/10'
                          : 'text-brand-steelDark hover:text-brand-black hover:bg-brand-steelLight'
                      }`}
                    >
                      <span className="mt-px text-[10px] font-bold shrink-0 opacity-50">{num}.</span>
                      <span>{title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {isEnglish ? (
              <PrivacyArticle sections={sections} />
            ) : (
            <article className="min-w-0 max-w-3xl space-y-10">
              <section id="s1" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Allgemeine Hinweise</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Datenerfassung auf dieser Website</h3>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Wofür nutzen wir Ihre Daten?</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Analyse-Tools und Tools von Drittanbietern</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s2" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Externes Hosting</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir setzen folgende(n) Hoster ein:</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">KEY WEB AG<br />Neuwerkstraße 45/46<br />99084 Erfurt</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Auftragsverarbeitung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Google Cloud CDN</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir nutzen das Content Delivery Network Google Cloud CDN. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Google bietet ein weltweit verteiltes Content Delivery Network an. Dabei wird technisch der Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Google geleitet. Hierdurch können wir die weltweite Erreichbarkeit und die Leistungsfähigkeit unserer Website erhöhen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Der Einsatz von Google Cloud CDN beruht auf unserem berechtigten Interesse an einer möglichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://cloud.google.com/terms/eu-model-contract-clause" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://cloud.google.com/terms/eu-model-contract-clause</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Weitere Informationen zu Google Cloud CDN finden Sie hier: <a href="https://cloud.google.com/cdn/docs/overview?hl=de" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://cloud.google.com/cdn/docs/overview?hl=de</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/5780</a>.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Auftragsverarbeitung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s3" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Datenschutz</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Bouz Autotechnik<br />Musterstraße 12<br />40210 Düsseldorf</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Telefon: <a href="tel:+49211000000" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">+49 211 000000</a><br />E-Mail: <a href="mailto:info@bouz-autotechnik.de" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">info@bouz-autotechnik.de</a></p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Speicherdauer</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Empfänger von personenbezogenen Daten</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Recht auf Datenübertragbarkeit</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Auskunft, Berichtigung und Löschung</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed">
                  <li className="pl-1">Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li className="pl-1">Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li className="pl-1">Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li className="pl-1">Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s4" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Cookies</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies dieser Datenschutzerklärung entnehmen.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Einwilligung mit Usercentrics</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Website nutzt die Consent-Technologie von Usercentrics, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist die Usercentrics GmbH, Sendlinger Straße 7, 80331 München, Website: <a href="https://usercentrics.com/de/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://usercentrics.com/de/</a> (im Folgenden „Usercentrics").</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie unsere Website betreten, werden folgende personenbezogene Daten an Usercentrics übertragen:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed">
                  <li className="pl-1">Ihre Einwilligung(en) bzw. der Widerruf Ihrer Einwilligung(en)</li>
                  <li className="pl-1">Ihre IP-Adresse</li>
                  <li className="pl-1">Informationen über Ihren Browser</li>
                  <li className="pl-1">Informationen über Ihr Endgerät</li>
                  <li className="pl-1">Zeitpunkt Ihres Besuchs auf der Website</li>
                  <li className="pl-1">Geolocation</li>
                </ul>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Des Weiteren speichert Usercentrics ein Cookie in Ihrem Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf zuordnen zu können. Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern, das Usercentrics-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Usercentrics-Banner auf dieser Website wurde mit Hilfe von eRecht24 konfiguriert. Das erkennen Sie daran, dass im Banner das Logo von eRecht24 auftaucht. Um das eRecht24-Logo im Banner auszuspielen, wird eine Verbindung zum Bildserver von eRecht24 hergestellt. Hierbei wird auch die IP-Adresse übertragen, die jedoch nur in anonymisierter Form in den Server-Logs gespeichert wird. Der Bildserver von eRecht24 befindet sich in Deutschland bei einem deutschen Anbieter. Das Banner selbst wird ausschließlich von Usercentrics zur Verfügung gestellt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Der Einsatz von Usercentrics erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Auftragsverarbeitung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Kontaktformular</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Registrierung mit Facebook Connect</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Statt einer direkten Registrierung auf dieser Website können Sie sich mit Facebook Connect registrieren. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie sich für die Registrierung mit Facebook Connect entscheiden und auf den „Login with Facebook"-/„Connect with Facebook"-Button klicken, werden Sie automatisch auf die Plattform von Facebook weitergeleitet. Dort können Sie sich mit Ihren Nutzungsdaten anmelden. Dadurch wird Ihr Facebook-Profil mit dieser Website bzw. unseren Diensten verknüpft. Durch diese Verknüpfung erhalten wir Zugriff auf Ihre bei Facebook hinterlegten Daten. Dies sind vor allem:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed">
                  <li className="pl-1">Facebook-Name</li>
                  <li className="pl-1">Facebook-Profil- und Titelbild</li>
                  <li className="pl-1">Facebook-Titelbild</li>
                  <li className="pl-1">bei Facebook hinterlegte E-Mail-Adresse</li>
                  <li className="pl-1">Facebook-ID</li>
                  <li className="pl-1">Facebook-Freundeslisten</li>
                  <li className="pl-1">Facebook Likes („Gefällt-mir"-Angaben)</li>
                  <li className="pl-1">Geburtstag</li>
                  <li className="pl-1">Geschlecht</li>
                  <li className="pl-1">Land</li>
                  <li className="pl-1">Sprache</li>
                </ul>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Daten werden zur Einrichtung, Bereitstellung und Personalisierung Ihres Accounts genutzt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Registrierung mit Facebook-Connect und die damit verbundenen Datenverarbeitungsvorgänge erfolgen auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a> und <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/policy.php</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Weitere Informationen finden Sie in den Facebook-Nutzungsbedingungen und den Facebook-Datenschutzbestimmungen. Diese finden Sie unter: <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/about/privacy/</a> und <a href="https://de-de.facebook.com/legal/terms/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/legal/terms/</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s5" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">5. Soziale Medien</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">eRecht24 Safe Sharing Tool</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Inhalte auf dieser Website können datenschutzkonform in sozialen Netzwerken wie Facebook, X &amp; Co. geteilt werden. Diese Seite nutzt dafür das <a href="https://www.e-recht24.de/erecht24-safe-sharing.html" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">eRecht24 Safe Sharing Tool</a>. Dieses Tool stellt den direkten Kontakt zwischen den Netzwerken und Nutzern erst dann her, wenn der Nutzer aktiv auf einen dieser Button klickt. Der Klick auf den Button stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG dar. Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Eine automatische Übertragung von Nutzerdaten an die Betreiber dieser Plattformen erfolgt durch dieses Tool nicht. Ist der Nutzer bei einem der sozialen Netzwerke angemeldet, erscheint bei der Nutzung der Social-Media-Elemente von Facebook, X &amp; Co. ein Informations-Fenster, in dem der Nutzer den Text vor dem Absenden bestätigen kann.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Unsere Nutzer können die Inhalte dieser Seite datenschutzkonform in sozialen Netzwerken teilen, ohne dass komplette Surf-Profile durch die Betreiber der Netzwerke erstellt werden.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Social-Media-Elemente mit Shariff</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, X, Instagram, Pinterest, XING, LinkedIn, Tumblr).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Social-Media-Elemente können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Elemente nur zusammen mit der sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Social-Media-Element aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Facebook</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button" anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/privacy/explanation</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a> und <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/policy.php</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">X (ehemals Twitter)</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Auf dieser Website sind Funktionen des Dienstes X (ehemals Twitter) eingebunden. Diese Funktionen werden angeboten durch den Mutterkonzern X Corp., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. Für die Datenverarbeitung von außerhalb der USA lebenden Personen ist die Niederlassung Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland, verantwortlich.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem X-Server hergestellt. X (ehemals Twitter) erhält dadurch Informationen über den Besuch dieser Website durch Sie. Durch das Benutzen von X (ehemals Twitter) und der Funktion „Re-Tweet" bzw. „Repost" werden die von Ihnen besuchten Websites mit Ihrem X (ehemals Twitter)-Account verknüpft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch X (ehemals Twitter) erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von X (ehemals Twitter) unter: <a href="https://x.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://x.com/de/privacy</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://gdpr.x.com/en/controller-to-controller-transfers.html" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://gdpr.x.com/en/controller-to-controller-transfers.html</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Ihre Datenschutzeinstellungen bei X (ehemals Twitter) können Sie in den Konto-Einstellungen unter <a href="https://x.com/settings/account" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://x.com/settings/account</a> ändern.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/2710" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/2710</a>.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Instagram</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://privacycenter.instagram.com/policy/</a> und <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://privacycenter.instagram.com/policy/</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s6" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">6. Analyse-Tools und Werbung</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Google Analytics</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers zugeordnet.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei der Datenanalyse ein.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://business.safety.google/adscontrollerterms/sccs/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://business.safety.google/adscontrollerterms/sccs/</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/5780</a>.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">IP Anonymisierung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Browser Plugin</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Auftragsverarbeitung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">WP Statistics</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Website nutzt das Analysetool WP Statistics, um Besucherzugriffe statistisch auszuwerten. Anbieter ist Veronalabs, Tatari 64, 10134, Tallinn, Estland (<a href="https://veronalabs.com" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://veronalabs.com</a>).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Mit WP Statistics können wir die Nutzung unserer Website analysieren. WP Statistics erfasst dabei u. a. Logdateien (IP-Adresse, Referrer, verwendete Browser, Herkunft des Nutzers, verwendete Suchmaschine) und Aktionen, die die Websitebesucher auf der Seite getätigt haben (z. B. Klicks und Ansichten).</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die mit WP Statistics erfassten Daten werden ausschließlich auf unserem eigenen Server gespeichert.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot als auch unsere Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">IP-Anonymisierung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir verwenden WP Statistics mit anonymisierter IP. Ihre IP-Adresse wird dabei gekürzt, sodass diese Ihnen nicht mehr direkt zugeordnet werden kann.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Meta-Pixel (ehemals Facebook Pixel)</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Website nutzt zur Konversionsmessung den Besucheraktions-Pixel von Meta. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Meta jedoch auch in die USA und in andere Drittländer übertragen.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Meta-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch kann die Wirksamkeit der Meta-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil bei Facebook oder Instagram möglich ist und Meta die Daten für eigene Werbezwecke, entsprechend der Meta-Datenverwendungsrichtlinie (<a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/about/privacy/</a>) verwenden kann. Dadurch kann Meta das Schalten von Werbeanzeigen auf Seiten von Facebook oder Instagram und sonstigen Werbekanälen ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir nutzen die Funktion des erweiterten Abgleichs innerhalb der Meta-Pixel. Der erweiterte Abgleich ermöglicht uns, verschiedene Arten von Daten (z. B. Wohnort, Bundesland, Postleitzahl, gehashte E-Mail-Adressen, Namen, Geschlecht, Geburtsdatum oder Telefonnummer) unserer Kunden und Interessenten, die wir über unsere Website sammeln an Meta zu übermitteln. Hierdurch können wir unsere Werbekampagnen auf Facebook und Instagram noch präziser auf Personen zuschneiden, die sich für unsere Angebote interessieren. Außerdem verbessert der erweiterte Abgleich Zuordnung von Webseiten-Conversions und erweitert Custom Audiences.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Meta weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, Merrion Road Dublin 4, Dublin, D04 X2K5, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Den Wortlaut der Vereinbarung finden Sie unter: <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a> und <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">In den Datenschutzhinweisen von Meta finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre: <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://de-de.facebook.com/about/privacy/</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sie können außerdem die Remarketing-Funktion „Custom Audiences" im Bereich Einstellungen für Werbeanzeigen unter <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a> deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie kein Konto bei Facebook oder Instagram besitzen, können Sie nutzungsbasierte Werbung von Meta auf der Website der European Interactive Digital Advertising Alliance deaktivieren: <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/4452</a>.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s7" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">7. Plugins und Tools</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Google Fonts (lokales Hosting)</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://policies.google.com/privacy?hl=de</a>.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Google reCAPTCHA</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir nutzen „Google reCAPTCHA" (im Folgenden „reCAPTCHA") auf dieser Website. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Google agiert in diesem Zusammenhang als reiner Auftragsdatenverarbeiter im Sinne von Art. 28 DSGVO und wird die auf diesem Wege erhobenen Daten nicht für eigene Zwecke nutzen. Die Nutzung des Tools erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags (DPA) mit Google.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.dataprivacyframework.gov/participant/5780</a>.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s8" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">8. eCommerce und Zahlungsanbieter</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Verarbeiten von Kunden- und Vertragsdaten</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung und Ablauf der ggf. bestehenden gesetzlichen Aufbewahrungsfristen gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Datenübermittlung bei Vertragsschluss für Online-Shops, Händler und Warenversand</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie Waren bei uns bestellen, geben wir Ihre personenbezogenen Daten an das zur Lieferung betraute Transportunternehmen sowie an den mit der Zahlungsabwicklung beauftragten Zahlungsdienstleister weiter. Es werden nur solche Daten herausgegeben, die der jeweilige Dienstleister zur Erfüllung seiner Aufgabe benötigt. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Sofern Sie eine entsprechende Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO erteilt haben, werden wir Ihre E-Mail-Adresse an das mit der Lieferung betraute Transportunternehmen übergeben, damit dieses Sie per E-Mail über den Versandstatus Ihrer Bestellung informieren kann; Sie können die Einwilligung jederzeit widerrufen.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Zahlungsdienste</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir binden Zahlungsdienste von Drittunternehmen auf unserer Website ein. Wenn Sie einen Kauf bei uns tätigen, werden Ihre Zahlungsdaten (z. B. Name, Zahlungssumme, Kontoverbindung, Kreditkartennummer) vom Zahlungsdienstleister zum Zwecke der Zahlungsabwicklung verarbeitet. Für diese Transaktionen gelten die jeweiligen Vertrags- und Datenschutzbestimmungen der jeweiligen Anbieter. Der Einsatz der Zahlungsdienstleister erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung) sowie im Interesse eines möglichst reibungslosen, komfortablen und sicheren Zahlungsvorgangs (Art. 6 Abs. 1 lit. f DSGVO). Soweit für bestimmte Handlungen Ihre Einwilligung abgefragt wird, ist Art. 6 Abs. 1 lit. a DSGVO Rechtsgrundlage der Datenverarbeitung; Einwilligungen sind jederzeit für die Zukunft widerrufbar.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Folgende Zahlungsdienste / Zahlungsdienstleister setzen wir im Rahmen dieser Website ein:</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">PayPal</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Anbieter dieses Zahlungsdienstes ist PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden „PayPal").</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full</a>.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Details entnehmen Sie der Datenschutzerklärung von PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline break-all">https://www.paypal.com/de/webapps/mpp/ua/privacy-full</a>.</p>
              </section>

              <hr className="border-brand-black/10" />

              <section id="s9" data-privacy-section="true" className="scroll-mt-28">
                <h2 className="font-heading font-bold text-2xl text-brand-black mb-4">9. Eigene Dienste</h2>
                <h3 className="font-heading font-semibold text-lg text-brand-black mt-6 mb-2">Umgang mit Bewerberdaten</h3>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich behandelt werden.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Umfang und Zweck der Datenerhebung</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z. B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.), soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an Personen weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in unseren Datenverarbeitungssystemen gespeichert.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Im Rahmen des Bewerbungsverfahrens führen wir unter Umständen auch eine Internetrecherche Ihrer Person durch. Dies umfasst vor allem die Google-Suche, Linkedin und Xing. Rechtsgrundlage für diese Art der Verarbeitung ist unser berechtigtes Interesse uns ein Gesamteindruck von öffentlich zugänglichen Informationen gemäß Art. 6 Abs. 1 lit. f DSGVO über Sie zu verschaffen.</p>
                <h4 className="font-semibold text-brand-black mt-4 mb-1">Aufbewahrungsdauer der Daten</h4>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht und die physischen Bewerbungsunterlagen vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund eines drohenden oder anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende Aufbewahrung entfällt.</p>
                <p className="text-brand-steelDark text-sm leading-6 sm:text-base sm:leading-relaxed mt-2">Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen.</p>
              </section>
            </article>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}


