import { Component, AfterViewInit, HostListener } from '@angular/core';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-herosection',
  imports: [TuiCardLarge],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.less'
})
export class HeroSectionComponent implements AfterViewInit {
  mouseX = 0;
  mouseY = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth) - 0.5;
    this.mouseY = (event.clientY / window.innerHeight) - 0.5;

    // Apply parallax transform to cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, i) => {
      const movement = (i + 1) * 10;
      const x = this.mouseX * movement;
      const y = this.mouseY * movement;
      (card as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }

  ngAfterViewInit() {
    // Additional animations could be initialized here if needed
  }
}
