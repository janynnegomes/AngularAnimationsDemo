import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'token',
    loadChildren: () => import('./token/token.module').then(m => m.TokenModule) },
    { path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
