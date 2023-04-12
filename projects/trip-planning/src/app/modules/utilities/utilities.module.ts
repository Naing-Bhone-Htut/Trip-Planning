import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from './package-card/package-card.component';
import { CustomCardComponent } from './custom-card/custom-card.component';



@NgModule({
  declarations: [
    PackageCardComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PackageCardComponent,
    CustomCardComponent
  ]
})
export class UtilitiesModule { }
