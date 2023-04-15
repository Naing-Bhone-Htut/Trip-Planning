import { Component, Input } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'widget-scroll-text-h1',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent {

  @Input()
  title?:string;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>('.revealUp').forEach((elem: HTMLElement) => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: 'auto' });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: 'auto' });
        },
      });
    });
  }
}
