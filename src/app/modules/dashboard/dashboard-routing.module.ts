import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // {
      //   path: 'shop',
      //   loadChildren: () =>import('../shop/shop.module').then(m => m.ShopModule)
      // },
      // {
      //   path: 'contact',
      //   loadChildren: () =>import('../contact/contact.module').then(m => m.ContactModule)
      // },
      // {
      //   path: 'about',
      //   loadChildren: () =>import('../about/about.module').then(m => m.AboutModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
