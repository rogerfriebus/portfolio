import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

type Language = 'de' | 'en';

interface LocalizedText {
  de: string;
  en: string;
}

interface PrivacySection {
  title: LocalizedText;
  paragraphs: LocalizedText[];
}

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  activeLanguage: Language = this.getStoredLanguage();

  pageTitle: LocalizedText = {
    de: 'Datenschutzerklärung',
    en: 'Privacy Policy',
  };

  intro: LocalizedText = {
    de: 'Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Portfolio-Website verarbeitet werden, zu welchen Zwecken dies geschieht und welche Rechte betroffene Personen haben.',
    en: 'This privacy policy explains which personal data is processed when visiting this portfolio website, for what purposes this happens and what rights data subjects have.',
  };

  sections: PrivacySection[] = [
    {
      title: {
        de: '1. Verantwortlicher',
        en: '1. Controller',
      },
      paragraphs: [
        {
          de: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
          en: 'The controller responsible for data processing on this website is:',
        },
        {
          de: 'Roger Friebus',
          en: 'Roger Friebus',
        },
        {
          de: 'Olvenstedter Scheid 19',
          en: 'Olvenstedter Scheid 19',
        },
        {
          de: '39130 Magdeburg',
          en: '39130 Magdeburg',
        },
        {
          de: 'Deutschland',
          en: 'Germany',
        },
        {
          de: 'E-Mail: roger.friebus@gmx.net',
          en: 'Email: roger.friebus@gmx.net',
        },
      ],
    },
    {
      title: {
        de: '2. Allgemeine Nutzung der Website',
        en: '2. General use of the website',
      },
      paragraphs: [
        {
          de: 'Beim Aufrufen dieser Website werden technisch notwendige Daten verarbeitet, damit die Website im Browser angezeigt werden kann. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei, Browsertyp, Betriebssystem, Referrer-URL und technische Statusinformationen gehören.',
          en: 'When this website is accessed, technically necessary data is processed so that the website can be displayed in the browser. This may include in particular the IP address, date and time of access, requested page or file, browser type, operating system, referrer URL and technical status information.',
        },
        {
          de: 'Die Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und zuverlässigen Betrieb der Website.',
          en: 'The processing takes place for the technical provision, stability and security of the website. The legal basis is Article 6(1)(f) GDPR. The legitimate interest lies in the secure and reliable operation of the website.',
        },
      ],
    },
    {
      title: {
        de: '3. Kontaktformular und Kontaktaufnahme per E-Mail',
        en: '3. Contact form and email contact',
      },
      paragraphs: [
        {
          de: 'Wenn du das Kontaktformular nutzt oder mich per E-Mail kontaktierst, werden die von dir übermittelten Daten verarbeitet. Dazu können Name, E-Mail-Adresse, Nachrichtentext sowie Zeitpunkt der Anfrage gehören.',
          en: 'If you use the contact form or contact me by email, the data you provide will be processed. This may include your name, email address, message text and the time of the request.',
        },
        {
          de: 'Die Daten werden ausschließlich verwendet, um deine Anfrage zu bearbeiten und mit dir in Kontakt zu treten.',
          en: 'The data is used exclusively to process your request and to contact you.',
        },
        {
          de: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage auf vorvertragliche Maßnahmen gerichtet ist, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der Bearbeitung eingehender Anfragen. Soweit eine ausdrückliche Einwilligung abgefragt wird, ist zusätzlich Art. 6 Abs. 1 lit. a DSGVO einschlägig.',
          en: 'The legal basis is Article 6(1)(b) GDPR if your request relates to pre-contractual measures, and otherwise Article 6(1)(f) GDPR. The legitimate interest lies in processing incoming requests. Where explicit consent is requested, Article 6(1)(a) GDPR also applies.',
        },
        {
          de: 'Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
          en: 'The data will be deleted once the request has been finally processed and there are no statutory retention obligations to the contrary.',
        },
      ],
    },
    {
      title: {
        de: '4. Externe Links zu GitHub und LinkedIn',
        en: '4. External links to GitHub and LinkedIn',
      },
      paragraphs: [
        {
          de: 'Diese Website enthält Links zu externen Profilen und Projekten, insbesondere zu GitHub und LinkedIn. Wenn du einen solchen Link anklickst, verlässt du diese Website und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
          en: 'This website contains links to external profiles and projects, in particular GitHub and LinkedIn. If you click such a link, you leave this website and the privacy policies of the respective provider apply.',
        },
        {
          de: 'Ich habe keinen Einfluss darauf, welche Daten die externen Anbieter nach dem Anklicken eines Links verarbeiten.',
          en: 'I have no influence on which data the external providers process after you click a link.',
        },
      ],
    },
    {
      title: {
        de: '5. Cookies und Analyse-Tools',
        en: '5. Cookies and analytics tools',
      },
      paragraphs: [
        {
          de: 'Diese Portfolio-Website verwendet derzeit keine Analyse-Tools und setzt keine eigenen Tracking-Cookies.',
          en: 'This portfolio website currently does not use analytics tools and does not set its own tracking cookies.',
        },
        {
          de: 'Sollten künftig Analyse-, Tracking- oder Marketingdienste eingebunden werden, wird diese Datenschutzerklärung entsprechend aktualisiert.',
          en: 'If analytics, tracking or marketing services are integrated in the future, this privacy policy will be updated accordingly.',
        },
      ],
    },
    {
      title: {
        de: '6. Weitergabe von Daten',
        en: '6. Disclosure of data',
      },
      paragraphs: [
        {
          de: 'Personenbezogene Daten werden nicht verkauft und nicht ohne Rechtsgrundlage an Dritte weitergegeben.',
          en: 'Personal data is not sold and is not passed on to third parties without a legal basis.',
        },
        {
          de: 'Eine technische Verarbeitung durch Hosting- oder Infrastruktur-Anbieter kann erforderlich sein, damit die Website bereitgestellt werden kann.',
          en: 'Technical processing by hosting or infrastructure providers may be necessary in order to provide the website.',
        },
      ],
    },
    {
      title: {
        de: '7. Speicherdauer',
        en: '7. Storage period',
      },
      paragraphs: [
        {
          de: 'Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
          en: 'Personal data is stored only for as long as necessary for the respective purposes or as long as statutory retention obligations exist.',
        },
        {
          de: 'Anfragen über Kontaktformular oder E-Mail werden gelöscht, sobald sie abschließend bearbeitet wurden und keine gesetzlichen Gründe für eine weitere Speicherung bestehen.',
          en: 'Requests sent via contact form or email will be deleted once they have been finally processed and there are no legal reasons for further storage.',
        },
      ],
    },
    {
      title: {
        de: '8. Deine Rechte',
        en: '8. Your rights',
      },
      paragraphs: [
        {
          de: 'Du hast nach Maßgabe der DSGVO das Recht auf Auskunft über die zu deiner Person gespeicherten Daten, Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.',
          en: 'Under the GDPR, you have the right to access the data stored about you, to rectification of inaccurate data, deletion, restriction of processing, data portability and objection to certain types of processing.',
        },
        {
          de: 'Soweit eine Verarbeitung auf deiner Einwilligung beruht, kannst du diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
          en: 'Where processing is based on your consent, you may withdraw that consent at any time with effect for the future.',
        },
        {
          de: 'Zur Ausübung deiner Rechte genügt eine formlose Mitteilung an: roger.friebus@gmx.net.',
          en: 'To exercise your rights, it is sufficient to send an informal message to: roger.friebus@gmx.net.',
        },
      ],
    },
    {
      title: {
        de: '9. Beschwerderecht bei einer Aufsichtsbehörde',
        en: '9. Right to lodge a complaint with a supervisory authority',
      },
      paragraphs: [
        {
          de: 'Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere die Landesbeauftragte für den Datenschutz Sachsen-Anhalt.',
          en: 'You also have the right to lodge a complaint with a data protection supervisory authority. In particular, the State Commissioner for Data Protection of Saxony-Anhalt is responsible.',
        },
        {
          de: 'Landesbeauftragte für den Datenschutz Sachsen-Anhalt',
          en: 'State Commissioner for Data Protection of Saxony-Anhalt',
        },
        {
          de: 'Otto-von-Guericke-Straße 34a, 39104 Magdeburg',
          en: 'Otto-von-Guericke-Straße 34a, 39104 Magdeburg, Germany',
        },
        {
          de: 'E-Mail: poststelle@lfd.sachsen-anhalt.de',
          en: 'Email: poststelle@lfd.sachsen-anhalt.de',
        },
      ],
    },
    {
      title: {
        de: '10. Aktualität dieser Datenschutzerklärung',
        en: '10. Current status of this privacy policy',
      },
      paragraphs: [
        {
          de: 'Diese Datenschutzerklärung kann angepasst werden, wenn sich technische, rechtliche oder inhaltliche Anforderungen ändern.',
          en: 'This privacy policy may be updated if technical, legal or content-related requirements change.',
        },
        {
          de: 'Stand: Mai 2026',
          en: 'Last updated: May 2026',
        },
      ],
    },
  ];

  setLanguage(language: Language) {
    this.activeLanguage = language;
    this.storeLanguage(language);
  }

  private getStoredLanguage(): Language {
    if (typeof localStorage === 'undefined') {
      return 'en';
    }

    const storedLanguage = localStorage.getItem('portfolioLanguage');

    if (storedLanguage === 'de' || storedLanguage === 'en') {
      return storedLanguage;
    }

    return 'en';
  }

  private storeLanguage(language: Language) {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem('portfolioLanguage', language);
  }
}