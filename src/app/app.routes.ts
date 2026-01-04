import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Faq} from './pages/faq/faq';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Signin } from './pages/signin/signin';
import { Services} from './pages/services/services';
import { Backup} from './pages/backup/backup';
import { Security} from './pages/security/security';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pricing', component: Pricing },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: 'signin', component: Signin },
  { path: "services/control", component: Services},
  { path: "services/backup", component: Backup},
  { path: "services/security", component: Security},
  { path: '**', component: NotFound },

];
