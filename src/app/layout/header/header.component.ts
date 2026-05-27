import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

type Language = 'de' | 'en';
type LogoVariant = 'light' | 'blue';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() activeLanguage: Language = 'en';
  @Input() logoVariant: LogoVariant = 'light';

  @Output() languageChange = new EventEmitter<Language>();

  isMenuOpen = false;

  get labels() {
    if (this.activeLanguage === 'de') {
      return {
        about: 'Über mich',
        skills: 'Skills',
        projects: 'Projekte',
        contact: 'Kontakt',
        menuOpen: 'Menü öffnen',
        menuClose: 'Menü schließen',
      };
    }

    return {
      about: 'About me',
      skills: 'Skill set',
      projects: 'My work',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    };
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  setLanguage(language: Language) {
    this.languageChange.emit(language);
    this.closeMenu();
  }
}