import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

type Language = 'de' | 'en';

interface LocalizedText {
  de: string;
  en: string;
}

interface LegalSection {
  title: LocalizedText;
  paragraphs: LocalizedText[];
}

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  activeLanguage: Language = this.getStoredLanguage();

  pageTitle: LocalizedText = {
    de: 'Impressum',
    en: 'Legal Notice',
  };

  intro: LocalizedText = {
    de: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).',
    en: 'Information in accordance with Section 5 of the German Digital Services Act (DDG).',
  };

  sections: LegalSection[] = [
    {
      title: {
        de: 'Anbieter',
        en: 'Provider',
      },
      paragraphs: [
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
      ],
    },
    {
      title: {
        de: 'Kontakt',
        en: 'Contact',
      },
      paragraphs: [
        {
          de: 'E-Mail: roger.friebus@gmx.net',
          en: 'Email: roger.friebus@gmx.net',
        },
      ],
    },
    {
      title: {
        de: 'Verantwortlich für den Inhalt',
        en: 'Responsible for content',
      },
      paragraphs: [
        {
          de: 'Roger Friebus',
          en: 'Roger Friebus',
        },
        {
          de: 'Olvenstedter Scheid 19, 39130 Magdeburg, Deutschland',
          en: 'Olvenstedter Scheid 19, 39130 Magdeburg, Germany',
        },
      ],
    },
    {
      title: {
        de: 'Haftung für Inhalte',
        en: 'Liability for content',
      },
      paragraphs: [
        {
          de: 'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.',
          en: 'The content of this website has been created with great care. However, no guarantee can be given for the accuracy, completeness or timeliness of the content.',
        },
        {
          de: 'Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',
          en: 'As a service provider, I am responsible for my own content on these pages in accordance with general laws. Obligations to remove or block the use of information under general laws remain unaffected.',
        },
      ],
    },
    {
      title: {
        de: 'Haftung für Links',
        en: 'Liability for links',
      },
      paragraphs: [
        {
          de: 'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte übernehme ich keine Gewähr.',
          en: 'This website contains links to external third-party websites over whose content I have no influence. Therefore, I cannot assume any liability for this external content.',
        },
        {
          de: 'Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.',
          en: 'The respective provider or operator of the linked pages is always responsible for their content. If any legal violations become known, such links will be removed immediately.',
        },
      ],
    },
    {
      title: {
        de: 'Urheberrecht',
        en: 'Copyright',
      },
      paragraphs: [
        {
          de: 'Die auf dieser Website erstellten Inhalte, Texte, Bilder und Gestaltungselemente unterliegen dem deutschen Urheberrecht, soweit sie nicht ausdrücklich als Inhalte Dritter gekennzeichnet sind.',
          en: 'The content, texts, images and design elements created on this website are subject to German copyright law unless expressly marked as third-party content.',
        },
        {
          de: 'Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen Zustimmung des jeweiligen Rechteinhabers.',
          en: 'Reproduction, editing, distribution or any other use beyond the limits of copyright law requires the prior consent of the respective rights holder.',
        },
      ],
    },
    {
      title: {
        de: 'Stand',
        en: 'Last updated',
      },
      paragraphs: [
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