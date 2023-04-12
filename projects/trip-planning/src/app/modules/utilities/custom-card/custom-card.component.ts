import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {

  @Input()
  imgUrl?:string;

  @Input()
  title?:string;

}
