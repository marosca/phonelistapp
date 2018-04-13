import { RouterModule, Routes } from '@angular/router';
import { PhoneListContainer } from './pages/phoneListContainer/phoneListContainer.component';

const app_routes: Routes = [
  { path: 'home', component: PhoneListContainer },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash: false});
