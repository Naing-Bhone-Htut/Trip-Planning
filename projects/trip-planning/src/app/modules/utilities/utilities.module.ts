import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageCardComponent } from './package-card/package-card.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ScrollTextComponent } from './scroll-text-h1/scroll-text.component';
import { ScrollTextH3Component } from './scroll-text-h3/scroll-text-h3.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';



@NgModule({
  declarations: [
    PackageCardComponent,
    CustomCardComponent,
    ScrollTextComponent,
    ScrollTextH3Component,
    HotelCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PackageCardComponent,
    CustomCardComponent,
    ScrollTextComponent,
    ScrollTextH3Component,
    HotelCardComponent
  ]
})
export class UtilitiesModule { }
