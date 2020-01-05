import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    PageModule
  ],
  exports:[PageModule, CommonModule]
})
export class WidgetsModule { }
