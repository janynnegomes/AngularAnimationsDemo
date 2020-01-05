import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token.component';
import { TokenRoutingModule } from './token-routing.module';



@NgModule({
  declarations: [TokenComponent],
  imports: [
    CommonModule,
    TokenRoutingModule
  ]
})
export class TokenModule { }
