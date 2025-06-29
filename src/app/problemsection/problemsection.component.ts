import { Component,AfterViewInit, OnDestroy  } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-problemsection',
  imports: [],
  templateUrl: './problemsection.component.html',
  styleUrl: './problemsection.component.less'
})
export class ProblemsectionComponent {
  private scrollTriggers: ScrollTrigger[] = [];

  // ngAfterViewInit() {
  //   const cards = document.querySelectorAll('.problem-card');

  //   cards.forEach((card, index) => {
  //     const tween = gsap.fromTo(card,
  //       { y: 50 * (index + 1), opacity: 0, scale: 0.9 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: card,
  //           start: 'top 80%',
  //           end: 'top 30%',
  //           scrub: true,
  //         }
  //       });

  //     // Extract ScrollTrigger instance and keep it for cleanup
  //     this.scrollTriggers.push(tween.scrollTrigger!);
  //   });

  //   // Background shimmer sweep animation
  //   const bg = document.querySelector('.problem-section');
  //   if (bg) {
  //     // This tween has no ScrollTrigger, so don't push anything here
  //     gsap.to(bg, {
  //       backgroundPosition: '200% 0%',
  //       duration: 20,
  //       ease: 'none',
  //       repeat: -1,
  //     });
  //   }
  // }

  // ngOnDestroy() {
  //   // Kill all ScrollTriggers we tracked
  //   this.scrollTriggers.forEach(st => st.kill());
  // }

}
