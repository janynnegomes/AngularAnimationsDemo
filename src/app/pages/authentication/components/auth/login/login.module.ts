import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  bootstrap:[LoginComponent],
  exports:[LoginRoutingModule, CommonModule, LoginComponent], 
})
export class LoginModule { }
