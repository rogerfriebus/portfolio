import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

type Language = 'de' | 'en';

interface LocalizedText {
  de: string;
  en: string;
}

interface Skill {
  name: string;
  iconPath: string;
}

interface Project {
  id: string;
  title: string;
  technologies: string;
  description: LocalizedText;
  previewLabel: string;
  imagePath: string;
  imageAlt: LocalizedText;
  liveUrl: string;
  githubUrl: string;
  isComingSoon?: boolean;
}

interface Reference {
  name: string;
  project: string;
  quote: LocalizedText;
}

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private formBuilder = inject(FormBuilder);

  private readonly emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';
  private readonly emailJsServiceId: string = 'service_229xzf5';
  private readonly emailJsTemplateId: string = 'template_i1hnq5h';
  private readonly emailJsPublicKey: string = 'MFtqMTqlNNBUv8oDi';
  private readonly contactRecipient = 'roger.friebus@gmx.net';

  activeLanguage: Language = this.getStoredLanguage();
  contactSubmitted = false;
  contactSendFailed = false;
  emailConfigurationMissing = false;
  isSending = false;

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
  });

  content = {
    hero: {
      intro: {
        de: 'Hallo! Ich bin Roger',
        en: 'Hello! I am Roger',
      },
      title: {
        de: 'Frontend Developer',
        en: 'Frontend Developer',
      },
      scroll: {
        de: 'Scroll',
        en: 'Scroll',
      },
    },
    about: {
      titleLineOne: {
        de: 'Lass uns',
        en: 'Let’s work',
      },
      titleLineTwo: {
        de: 'zusammen-',
        en: 'together',
      },
      titleLineThree: {
        de: 'arbeiten',
        en: '',
      },
      factsTitle: {
        de: 'Ich bin',
        en: 'I am',
      },
      location: {
        de: 'in Magdeburg',
        en: 'located in Magdeburg',
      },
      remote: {
        de: 'offen für Remote-Arbeit',
        en: 'open to work remote',
      },
      relocate: {
        de: 'kein Umzug',
        en: 'not open to relocate',
      },
      paragraphOne: {
        de: 'Ich entwickle mit Leidenschaft digitale Lösungen, die Arbeit einfacher, klarer und zuverlässiger machen. Mein Hintergrund in Prozessdigitalisierung hilft mir, echte Anforderungen zu verstehen und in nutzbare Webanwendungen zu übersetzen.',
        en: 'I am passionate about building digital solutions that make work easier, clearer and more reliable. My background in process digitalization helps me understand real business requirements and translate them into useful web applications.',
      },
      paragraphTwo: {
        de: 'Ich gehe Probleme strukturiert an: erst den Prozess verstehen, dann Komplexität reduzieren und anschließend eine praktische Lösung bauen. Neue Technologien zu lernen und meine Coding Skills Schritt für Schritt zu verbessern, motiviert mich sehr.',
        en: 'I approach problems in a structured way: first understand the process, then reduce complexity, and finally build a practical solution. I enjoy learning new technologies and improving my coding skills step by step.',
      },
      button: {
        de: 'Nachricht senden',
        en: 'Send a message',
      },
    },
    skills: {
      title: {
        de: 'Skill set',
        en: 'Skill set',
      },
    },
    projects: {
      title: {
        de: 'Meine Projekte',
        en: 'My work',
      },
      intro: {
        de: 'Hier findest du eine Auswahl meiner Projekte. Öffne die Projekte, um meine Fähigkeiten in Aktion zu sehen.',
        en: 'Explore a selection of my work here - interact with projects to see my skills in action.',
      },
      live: {
        de: 'Live testen',
        en: 'Live test',
      },
      github: {
        de: 'Github',
        en: 'Github',
      },
      liveComingSoon: {
        de: 'Live kommt später',
        en: 'Live coming soon',
      },
      githubComingSoon: {
        de: 'Github kommt später',
        en: 'Github coming soon',
      },
    },
    references: {
      title: {
        de: 'Brauchst du einen Teamplayer?',
        en: 'Need a teamplayer?',
      },
      subtitle: {
        de: 'Das sagen Kolleginnen und Kollegen über mich.',
        en: 'Here is what my colleagues say about me.',
      },
    },
    contact: {
      title: {
        de: 'Kontakt',
        en: 'Contact',
      },
      subtitle: {
        de: 'Hast du ein Problem zu lösen?',
        en: 'Got a problem to solve?',
      },
      paragraph: {
        de: 'Kontaktiere mich gerne, wenn du Unterstützung im Frontend brauchst. Ich bringe Struktur, technische Neugier und einen klaren Blick für praktische Lösungen mit.',
        en: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
      },
      highlight: {
        de: 'Du brauchst einen Frontend Developer?',
        en: 'Need a Frontend developer?',
      },
      highlightLink: {
        de: 'Kontaktiere mich!',
        en: 'Contact me!',
      },
      namePlaceholder: {
        de: 'Dein Name',
        en: 'Your name',
      },
      emailPlaceholder: {
        de: 'Deine E-Mail',
        en: 'Your email',
      },
      messagePlaceholder: {
        de: 'Deine Nachricht',
        en: 'Your message',
      },
      button: {
        de: 'Sag hallo ;)',
        en: 'Say hello ;)',
      },
      sending: {
        de: 'Wird gesendet...',
        en: 'Sending...',
      },
      success: {
        de: 'Danke. Deine Nachricht wurde erfolgreich gesendet.',
        en: 'Thank you. Your message has been sent successfully.',
      },
      sendError: {
        de: 'Leider konnte die Nachricht nicht gesendet werden. Bitte versuche es später erneut oder schreibe direkt an roger.friebus@gmx.net.',
        en: 'Unfortunately, the message could not be sent. Please try again later or write directly to roger.friebus@gmx.net.',
      },
      configError: {
        de: 'Der E-Mail-Versand ist noch nicht konfiguriert. Bitte EmailJS Service ID, Template ID und Public Key eintragen.',
        en: 'Email sending is not configured yet. Please add the EmailJS Service ID, Template ID and Public Key.',
      },
      guidance: {
        de: 'Bitte fülle alle Felder aus und akzeptiere die Datenschutzerklärung, um den Button zu aktivieren.',
        en: 'Please complete all fields and accept the privacy policy to enable the button.',
      },
      errors: {
        nameRequired: {
          de: 'Bitte gib deinen Namen ein.',
          en: 'Please enter your name.',
        },
        nameMinLength: {
          de: 'Dein Name sollte mindestens 2 Zeichen enthalten.',
          en: 'Your name should contain at least 2 characters.',
        },
        emailRequired: {
          de: 'Bitte gib deine E-Mail-Adresse ein.',
          en: 'Please enter your email.',
        },
        emailInvalid: {
          de: 'Bitte gib eine gültige E-Mail-Adresse ein.',
          en: 'Please enter a valid email address.',
        },
        messageRequired: {
          de: 'Bitte gib eine Nachricht ein.',
          en: 'Please enter your message.',
        },
        messageMinLength: {
          de: 'Deine Nachricht sollte mindestens 10 Zeichen enthalten.',
          en: 'Your message should contain at least 10 characters.',
        },
        privacyRequired: {
          de: 'Bitte akzeptiere die Datenschutzerklärung.',
          en: 'Please accept the privacy policy.',
        },
      },
    },
  };

  skills: Skill[] = [
    { name: 'Angular', iconPath: '/img/skills/angular.png' },
    { name: 'TypeScript', iconPath: '/img/skills/typescript.png' },
    { name: 'JavaScript', iconPath: '/img/skills/javascript.png' },
    { name: 'HTML', iconPath: '/img/skills/html.png' },
    { name: 'Scrum', iconPath: '/img/skills/scrum.png' },
    { name: 'Supabase', iconPath: '/img/skills/supabase.png' },
    { name: 'Git', iconPath: '/img/skills/git.png' },
    { name: 'CSS', iconPath: '/img/skills/css.png' },
    { name: 'REST-API', iconPath: '/img/skills/rest-api.png' },
  ];

  projects: Project[] = [
    {
      id: 'join',
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: {
        de: 'Task-Manager inspiriert vom Kanban-System. Aufgaben erstellen, organisieren, per Drag and Drop verschieben und Nutzern sowie Kategorien zuordnen.',
        en: 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      },
      previewLabel: 'Join',
      imagePath: '/img/projects/join.png',
      imageAlt: {
        de: 'Screenshot des Projekts Join',
        en: 'Screenshot of the Join project',
      },
      liveUrl: '',
      githubUrl: '',
      isComingSoon: true,
    },
    {
      id: 'pollo-loco',
      title: 'Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: {
        de: 'Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco zu sammeln und gegen verrückte Hühner zu kämpfen.',
        en: 'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      },
      previewLabel: 'El Pollo Loco',
      imagePath: '/img/projects/pollo-loco.png',
      imageAlt: {
        de: 'Screenshot des Projekts Pollo Loco',
        en: 'Screenshot of the Pollo Loco project',
      },
      liveUrl: 'https://pollo-loco.roger-friebus.de',
      githubUrl: 'https://github.com/rogerfriebus/el-pollo-loco',
    },
    {
      id: 'pokedex',
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description: {
        de: 'Basierend auf der PokéAPI stellt dieses Projekt Pokémon-Informationen bereit und katalogisiert sie.',
        en: 'Based on the PokéAPI, this project provides and catalogues Pokémon information.',
      },
      previewLabel: 'Pokédex',
      imagePath: '/img/projects/pokedex.png',
      imageAlt: {
        de: 'Screenshot des Projekts Pokédex',
        en: 'Screenshot of the Pokédex project',
      },
      liveUrl: 'https://pokedex.roger-friebus.de',
      githubUrl: 'https://github.com/rogerfriebus/pokedex',
    },
  ];

  references: Reference[] = [
    {
      name: 'James Rugman',
      project: 'Project Join',
      quote: {
        de: 'Roger ist zuverlässig und freundlich. Er arbeitet strukturiert und schreibt klaren Code. Ich empfehle ihn sehr als Kollegen.',
        en: 'Roger is a reliable and friendly person. He works in a structured way and writes clear code. I highly recommend him as a colleague.',
      },
    },
    {
      name: 'Evelyn Marx',
      project: 'Project Pokédex',
      quote: {
        de: 'Roger arbeitet fokussiert, zuverlässig und lösungsorientiert. Besonders seine strukturierte Vorgehensweise macht die Zusammenarbeit angenehm.',
        en: 'Roger works focused, reliably and solution-oriented. His structured approach makes collaboration very pleasant.',
      },
    },
    {
      name: 'Noah Müller',
      project: 'Project Pollo Loco',
      quote: {
        de: 'Roger hat Inhalte im Team entwickelt, formatiert und geliefert. Er ist zuverlässig und freundlich.',
        en: 'Roger developed, formatted and delivered content in collaboration with the team. He is reliable and friendly.',
      },
    },
  ];

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  get privacyControl() {
    return this.contactForm.get('privacyAccepted');
  }

  setLanguage(language: Language) {
    this.activeLanguage = language;
    this.storeLanguage(language);
  }

  async submitContactForm() {
    this.contactSubmitted = false;
    this.contactSendFailed = false;
    this.emailConfigurationMissing = false;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid || this.isSending) {
      return;
    }

    if (!this.isEmailServiceConfigured()) {
      this.emailConfigurationMissing = true;
      return;
    }

    this.isSending = true;

    try {
      await this.sendContactEmail();
      this.contactSubmitted = true;
      this.contactForm.reset({
        name: '',
        email: '',
        message: '',
        privacyAccepted: false,
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      this.contactSendFailed = true;
    } finally {
      this.isSending = false;
    }
  }

  private async sendContactEmail() {
    const formValue = this.contactForm.getRawValue();
    const name = formValue.name ?? '';
    const email = formValue.email ?? '';
    const message = formValue.message ?? '';

    const payload = {
      service_id: this.emailJsServiceId,
      template_id: this.emailJsTemplateId,
      user_id: this.emailJsPublicKey,
      template_params: {
        from_name: name,
        name,
        from_email: email,
        email,
        reply_to: email,
        message,
        to_email: this.contactRecipient,
        language: this.activeLanguage,
      },
    };

    const response = await fetch(this.emailJsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'EmailJS request failed');
    }
  }

  private isEmailServiceConfigured() {
    return (
      this.emailJsServiceId !== 'YOUR_SERVICE_ID' &&
      this.emailJsTemplateId !== 'YOUR_TEMPLATE_ID' &&
      this.emailJsPublicKey !== 'YOUR_PUBLIC_KEY'
    );
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