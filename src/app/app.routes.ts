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
import { EmailsComponent } from './pages/emails/emails';
import { Infogerances } from './pages/infogerances/infogerances';
import { Vps } from './pages/vps/vps';
import { VpsHosting } from './pages/vps-hosting/vps-hosting';
import { Divers } from './pages/divers/divers';
import { WebHosting } from './pages/web-hosting/web-hosting';
import { ItOutsourcing } from './pages/it-outsourcing/it-outsourcing';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pricing', component: Pricing },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contact },
  { path: 'signin', component: Signin },
  { path: "services/control", component: Services},
  { path: "services/backup", component: Backup},
  { path: "services/security", component: Security},
  { path: "services/hosting/emails", component: EmailsComponent},
  { path: "services/infogerance", component: Infogerances},
  { path: "services/hosting/vps", component: Vps},
  { path: "vps-hosting", component: VpsHosting},
  { path: "web-hosting", component: WebHosting},
  { path: "services/divers", component: Divers},
  { path: "it-outsourcing", component: ItOutsourcing},
  { path: '**', component: NotFound },

];
