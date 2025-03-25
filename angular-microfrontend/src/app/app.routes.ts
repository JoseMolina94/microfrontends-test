import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user/:login',
    loadComponent: () => 
      import('./user-details').then(m => m.UserDetailsComponent)
  },
  {
    path: 'user',
    loadChildren: () => 
      import('./user-details').then(m => m.USER_DETAILS_ROUTES)
  },
  { 
    path: '', 
    redirectTo: '/user/josemolinag',
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/user/josemolinag'
  }
];