import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

type Language = 'de' | 'en';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private router = inject(Router);

  @Input() activeLanguage: Language = 'en';

  get labels() {
    if (this.activeLanguage === 'de') {
      return {
        copyright: '© Roger Friebus 2026',
        legalNotice: 'Impressum',
        privacyPolicy: 'Datenschutz',
        github: 'GitHub',
        email: 'E-Mail',
        linkedin: 'LinkedIn',
        legalAria: 'Rechtliche Links',
        socialsAria: 'Berufliche Profile',
        homeAria: 'Zur Startseite',
      };
    }

    return {
      copyright: '© Roger Friebus 2026',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
      github: 'GitHub',
      email: 'Email',
      linkedin: 'LinkedIn',
      legalAria: 'Legal links',
      socialsAria: 'Professional profiles',
      homeAria: 'Back to homepage',
    };
  }

  navigateToTop(path: string, event: Event) {
    event.preventDefault();

    this.router.navigateByUrl(path).then(() => {
      this.scrollToTop();
    });
  }

  private scrollToTop() {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}