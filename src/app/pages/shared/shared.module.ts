import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';
import { PageComponent } from './widgets/page/page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  exports:[CommonModule, WidgetsModule]
})
export class SharedModule { }
