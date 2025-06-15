import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface RevenueStream {
  id: number;
  stream: string;
  description: string;
}

@Component({
  selector: 'app-moneytization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moneytization.component.html',
  styleUrl: './moneytization.component.less'
})
export class MoneytizationComponent {
  revenueStreams: RevenueStream[] = [
    { id: 1, stream: 'Transaction Fees', description: 'Small cut from student-to-student and vendor transactions.' },
    { id: 2, stream: 'Subscription Plans', description: 'Premium features for service providers & power users.' },
    { id: 3, stream: 'Campus Partnerships', description: 'Revenue-sharing with institutions for exclusive access.' },
    { id: 4, stream: 'Ad Placements', description: 'Highly targeted, non-intrusive ads for student audience.' }
  ];
}
