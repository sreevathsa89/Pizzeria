import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'shop',
    loadChildren: () =>import('../app/modules/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'contact',
    loadChildren: () =>import('../app/modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () =>import('../app/modules/about/about.module').then(m => m.AboutModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }  // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }