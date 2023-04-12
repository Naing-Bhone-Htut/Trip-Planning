import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent {

  @Input()
  title?:string

  @Input()
  imgUrl?:string
}
