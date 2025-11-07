import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Faq} from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Signin } from './pages/signin/signin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pricing', component: Pricing },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: 'signin', component: Signin },
  { path: '**', component: NotFound },

];
