import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];