import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';  // Import the MsalGuard
import { ActionPage } from './action/action.page';  // Import the ActionPage component




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',  // Define the route for 'home'
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),  // Assuming you have a HomePageModule
    canActivate: [MsalGuard],  // Protect the home page route

  },
  {
    path: 'action',
    loadChildren: () => import('./action/action.module').then( m => m.ActionPageModule),
    canActivate: [MsalGuard],  // Protect the action page route

  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
