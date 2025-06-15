import { Component ,AfterViewInit, OnDestroy} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-solutionsection',
  imports: [],
  templateUrl: './solutionsection.component.html',
  styleUrl: './solutionsection.component.less'
})
export class SolutionsectionComponent implements AfterViewInit, OnDestroy {
  private scrollTriggers: ScrollTrigger[] = [];

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.solution-card');

    cards.forEach((card, i) => {
      const tween = gsap.fromTo(card,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.8,
          }
        }
      );
      this.scrollTriggers.push(tween.scrollTrigger!);
    });
  }

  ngOnDestroy() {
    this.scrollTriggers.forEach(st => st.kill());
  }
}
