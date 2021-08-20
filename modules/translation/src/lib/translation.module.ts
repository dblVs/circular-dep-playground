import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BobComponent } from './bob.component';
import { TranslationComponent } from './translation.component';



@NgModule({
  declarations: [
    TranslationComponent,
    BobComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslationComponent
  ]
})
export class TranslationModule { }
