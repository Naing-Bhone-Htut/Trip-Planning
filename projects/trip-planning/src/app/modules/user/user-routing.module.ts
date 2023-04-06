import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LocationsComponent } from './locations/locations.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [{ path: '', component: UserComponent,children: [
  {path: 'home', component:HomeComponent},
  {path: 'booking',component:BookingComponent},
  {path: 'hotels', component:HotelsComponent},
  {path: 'locations', component:LocationsComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
