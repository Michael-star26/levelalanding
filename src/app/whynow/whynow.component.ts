import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface WhyNowPoint {
  id: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-whynow',
  imports: [CommonModule],
  templateUrl: './whynow.component.html',
  styleUrl: './whynow.component.less'
})
export class WhynowComponent {
  points: WhyNowPoint[] = [
    {
      id: 1,
      title: 'Rapid Tech Adoption',
      description: 'With smartphones and fast internet reaching every corner, the timing is perfect for digital platforms to thrive.'
    },
    {
      id: 2,
      title: 'Increasing Student Population',
      description: 'More students than ever are pursuing higher education, creating a growing community that needs connected services.'
    },
    {
      id: 3,
      title: 'Demand for Inclusive Solutions',
      description: 'Students seek platforms that promote equality, affordability, and community — exactly what Levela delivers.'
    }
  ];
}
