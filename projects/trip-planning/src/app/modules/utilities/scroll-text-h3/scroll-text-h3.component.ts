import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-scroll-text-h3',
  templateUrl: './scroll-text-h3.component.html',
  styleUrls: ['./scroll-text-h3.component.css']
})
export class ScrollTextH3Component {


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
              duration: 1.5,
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
              duration: 1.5,
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
