'use client';

import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const ORG_EMAIL = 'parbatsewasamajnewyork@gmail.com';
const ORG_EIN = '93-3326312';
const LAST_UPDATED_EN = 'July 3, 2026';
const LAST_UPDATED_NE = 'जुलाई ३, २०२६';

type Section = { heading: string; body: string[] };

const content: Record<'en' | 'ne', {
  hero: { eyebrow: string; title: string; accent: string; lead: string };
  updated: string;
  sections: Section[];
}> = {
  en: {
    hero: {
      eyebrow: 'YOUR PRIVACY',
      title: 'Privacy',
      accent: 'Policy',
      lead: 'How Parbat Sewa Samaj New York collects, uses, and protects the information you share with us.',
    },
    updated: `Last updated: ${LAST_UPDATED_EN}`,
    sections: [
      {
        heading: 'Who we are',
        body: [
          `Parbat Sewa Samaj New York ("we," "us," or "our") is a non-profit community organization serving the Parbat diaspora in the New York metropolitan area. Our federal Employer Identification Number (EIN) is ${ORG_EIN}.`,
          `If you have any questions about this policy or your information, you can reach us at ${ORG_EMAIL}.`,
        ],
      },
      {
        heading: 'Information we collect',
        body: [
          'We only collect information you choose to give us. We do not require you to create an account, and we do not track you across other websites.',
          'General inquiries: When you use our contact form, we collect your name, email address, and the message you send. This is submitted through Web3Forms, which delivers it to our email inbox.',
          'Membership applications: When you apply for membership, you are directed to a Google Form where you provide your full name, email address, and phone number, and upload a State ID photo, a citizenship photo (Nepal or US), and a payment screenshot. This information is collected and stored by Google on our behalf.',
        ],
      },
      {
        heading: 'How we use your information',
        body: [
          'We use the information you share only to: respond to your inquiries; review and process membership applications; verify eligibility and payment; and keep you informed about our events, programs, and community activities.',
          'We do not sell, rent, or trade your personal information to anyone, and we do not use it for advertising.',
        ],
      },
      {
        heading: 'Third-party services we use',
        body: [
          'To operate our website and communicate with you, we rely on a small number of trusted third-party services, each with its own privacy policy:',
          'Web3Forms — delivers messages submitted through our contact form to our email.',
          'Google (Forms & Gmail) — receives and stores membership applications and hosts our email inbox.',
          'Facebook — hosts our community page, which we link to from our site.',
          'These providers process your information only to provide their service to us. We encourage you to review their privacy policies.',
        ],
      },
      {
        heading: 'How long we keep your information',
        body: [
          'We keep inquiry messages only as long as needed to respond to and follow up on your request. We retain membership records for as long as you remain a member and as needed for our legitimate record-keeping and legal obligations. You may ask us to delete your information at any time (see "Your rights" below).',
        ],
      },
      {
        heading: 'How we protect your information',
        body: [
          'We take reasonable steps to protect the information you share, and we limit access to it to the volunteers and officers who need it to carry out our work. Membership documents (such as ID and citizenship photos) are handled with particular care and are not shared publicly. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          `You may ask us to see, correct, or delete the personal information we hold about you. To make a request, email us at ${ORG_EMAIL} and we will respond within a reasonable time.`,
        ],
      },
      {
        heading: "Children's privacy",
        body: [
          'Our website and forms are intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us and we will delete it.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: [
          'We may update this policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically.',
        ],
      },
      {
        heading: 'Contact us',
        body: [
          `If you have questions or requests about your privacy, contact us at ${ORG_EMAIL}.`,
        ],
      },
    ],
  },
  ne: {
    hero: {
      eyebrow: 'तपाईंको गोपनीयता',
      title: 'गोपनीयता',
      accent: 'नीति',
      lead: 'पर्वत सेवा समाज न्यु योर्कले तपाईंले साझा गर्नुभएको जानकारी कसरी सङ्कलन, प्रयोग र सुरक्षा गर्छ।',
    },
    updated: `पछिल्लो पटक अद्यावधिक: ${LAST_UPDATED_NE}`,
    sections: [
      {
        heading: 'हामी को हौं',
        body: [
          `पर्वत सेवा समाज न्यु योर्क ("हामी" वा "हाम्रो") न्यु योर्क महानगर क्षेत्रमा रहेको पर्वत डायस्पोरालाई सेवा गर्ने एक गैरनाफामुखी सामुदायिक संस्था हो। हाम्रो संघीय Employer Identification Number (EIN) ${ORG_EIN} हो।`,
          `यस नीति वा तपाईंको जानकारीबारे कुनै प्रश्न भएमा ${ORG_EMAIL} मा हामीलाई सम्पर्क गर्न सक्नुहुन्छ।`,
        ],
      },
      {
        heading: 'हामीले सङ्कलन गर्ने जानकारी',
        body: [
          'हामी तपाईंले दिन चाहनुभएको जानकारी मात्र सङ्कलन गर्छौं। तपाईंले खाता बनाउनुपर्दैन, र हामी तपाईंलाई अन्य वेबसाइटहरूमा ट्र्याक गर्दैनौं।',
          'सामान्य सोधपुछ: तपाईंले हाम्रो सम्पर्क फारम प्रयोग गर्दा, हामी तपाईंको नाम, इमेल ठेगाना र तपाईंले पठाउनुभएको सन्देश सङ्कलन गर्छौं। यो Web3Forms मार्फत हाम्रो इमेलमा पठाइन्छ।',
          'सदस्यता आवेदन: तपाईंले सदस्यताको लागि आवेदन दिँदा, तपाईंलाई Google Form मा पठाइन्छ जहाँ तपाईं आफ्नो पूरा नाम, इमेल र फोन नम्बर दिनुहुन्छ, र राज्य परिचयपत्र फोटो, नागरिकता फोटो (नेपाल वा अमेरिका) र भुक्तानी स्क्रिनसट अपलोड गर्नुहुन्छ। यो जानकारी हाम्रो तर्फबाट Google द्वारा सङ्कलन र भण्डारण गरिन्छ।',
        ],
      },
      {
        heading: 'हामी तपाईंको जानकारी कसरी प्रयोग गर्छौं',
        body: [
          'तपाईंले साझा गर्नुभएको जानकारी हामी केवल यी कामका लागि प्रयोग गर्छौं: तपाईंको सोधपुछको जवाफ दिन; सदस्यता आवेदन समीक्षा र प्रक्रिया गर्न; योग्यता र भुक्तानी प्रमाणित गर्न; र हाम्रा कार्यक्रम, गतिविधि तथा सामुदायिक सूचनाहरूबारे तपाईंलाई जानकारी दिन।',
          'हामी तपाईंको व्यक्तिगत जानकारी कसैलाई बेच्दैनौं, भाडामा दिँदैनौं वा साटासाट गर्दैनौं, र विज्ञापनका लागि प्रयोग गर्दैनौं।',
        ],
      },
      {
        heading: 'हामीले प्रयोग गर्ने तेस्रो-पक्ष सेवाहरू',
        body: [
          'हाम्रो वेबसाइट सञ्चालन गर्न र तपाईंसँग सम्पर्क गर्न, हामी केही विश्वसनीय तेस्रो-पक्ष सेवाहरूमा भर पर्छौं, जसको आ-आफ्नै गोपनीयता नीति हुन्छ:',
          'Web3Forms — सम्पर्क फारमबाट पठाइएका सन्देशहरू हाम्रो इमेलमा पुर्‍याउँछ।',
          'Google (Forms र Gmail) — सदस्यता आवेदनहरू प्राप्त र भण्डारण गर्छ र हाम्रो इमेल होस्ट गर्छ।',
          'Facebook — हाम्रो सामुदायिक पृष्ठ होस्ट गर्छ, जसलाई हामीले साइटबाट लिङ्क गरेका छौं।',
          'यी सेवाहरूले तपाईंको जानकारी हामीलाई सेवा प्रदान गर्न मात्र प्रयोग गर्छन्। हामी तपाईंलाई तिनका गोपनीयता नीतिहरू पढ्न सुझाव दिन्छौं।',
        ],
      },
      {
        heading: 'हामी तपाईंको जानकारी कति समय राख्छौं',
        body: [
          'हामी सोधपुछका सन्देशहरू तपाईंको अनुरोधको जवाफ र अनुगमन गर्न आवश्यक भएसम्म मात्र राख्छौं। सदस्यता अभिलेखहरू तपाईं सदस्य रहेसम्म र हाम्रो अभिलेख तथा कानुनी दायित्वका लागि आवश्यक भएसम्म राख्छौं। तपाईं जुनसुकै बेला आफ्नो जानकारी मेटाउन अनुरोध गर्न सक्नुहुन्छ (तल "तपाईंका अधिकार" हेर्नुहोस्)।',
        ],
      },
      {
        heading: 'हामी तपाईंको जानकारी कसरी सुरक्षित गर्छौं',
        body: [
          'तपाईंले साझा गर्नुभएको जानकारी सुरक्षित गर्न हामी उचित कदम चाल्छौं, र यसमा पहुँच केवल आवश्यक स्वयंसेवक र पदाधिकारीहरूमा सीमित गर्छौं। सदस्यताका कागजातहरू (जस्तै परिचयपत्र र नागरिकता फोटो) विशेष सावधानीका साथ ह्यान्डल गरिन्छ र सार्वजनिक रूपमा साझा गरिँदैन। तथापि, इन्टरनेटमा कुनै पनि प्रसारण वा भण्डारण विधि पूर्ण रूपमा सुरक्षित हुँदैन, र हामी पूर्ण सुरक्षाको ग्यारेन्टी दिन सक्दैनौं।',
        ],
      },
      {
        heading: 'तपाईंका अधिकार',
        body: [
          `हामीसँग रहेको तपाईंको व्यक्तिगत जानकारी हेर्न, सच्याउन वा मेटाउन तपाईं अनुरोध गर्न सक्नुहुन्छ। अनुरोध गर्न ${ORG_EMAIL} मा इमेल गर्नुहोस्, हामी उचित समयभित्र जवाफ दिनेछौं।`,
        ],
      },
      {
        heading: 'बालबालिकाको गोपनीयता',
        body: [
          'हाम्रो वेबसाइट र फारमहरू वयस्कहरूका लागि हुन्। हामी जानीजानी १३ वर्षमुनिका बालबालिकाबाट व्यक्तिगत जानकारी सङ्कलन गर्दैनौं। कुनै बालबालिकाले हामीलाई जानकारी दिएको हो भन्ने लाग्छ भने, कृपया हामीलाई सम्पर्क गर्नुहोस्, हामी त्यसलाई मेटाउनेछौं।',
        ],
      },
      {
        heading: 'यस नीतिमा परिवर्तन',
        body: [
          'हामी समय-समयमा यो नीति अद्यावधिक गर्न सक्छौं। त्यसो गर्दा, हामी यस पृष्ठको सुरुमा रहेको "पछिल्लो पटक अद्यावधिक" मिति परिवर्तन गर्नेछौं। हामी तपाईंलाई यो पृष्ठ पटक-पटक हेर्न सुझाव दिन्छौं।',
        ],
      },
      {
        heading: 'हामीलाई सम्पर्क गर्नुहोस्',
        body: [
          `तपाईंको गोपनीयताबारे प्रश्न वा अनुरोध भएमा ${ORG_EMAIL} मा हामीलाई सम्पर्क गर्नुहोस्।`,
        ],
      },
    ],
  },
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          accent={t.hero.accent}
          lead={t.hero.lead}
        />

        <section className="mx-auto max-w-[820px] px-[6%] pb-[120px] pt-6">
          <p className="mb-10 text-[13px] font-medium tracking-[1px] text-faint">{t.updated}</p>

          <div className="flex flex-col gap-10">
            {t.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="mb-4 font-serif text-[24px] font-bold leading-[1.25] text-white max-[640px]:text-[21px]">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-[1.85] text-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
