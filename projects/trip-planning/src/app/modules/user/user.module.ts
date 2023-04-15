import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LocationsComponent } from './locations/locations.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { UtilitiesModule } from '../utilities/utilities.module';


@NgModule({
  declarations: [
    UserComponent,
    HotelsComponent,
    LocationsComponent,
    BookingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UtilitiesModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
