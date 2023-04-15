import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {

  @Input()
  hotelName?:string

  @Input()
  imgUrl?:string

  @Input()
  location?:string
}
