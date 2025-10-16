import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Faq} from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pricing', component: Pricing },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound },
];
