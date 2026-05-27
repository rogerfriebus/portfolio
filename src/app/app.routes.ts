import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Roger Friebus | Frontend Developer',
  },
  {
    path: 'legal-notice',
    component: LegalNoticeComponent,
    title: 'Impressum | Roger Friebus',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Datenschutz | Roger Friebus',
  },
  {
    path: '**',
    redirectTo: '',
  },
];