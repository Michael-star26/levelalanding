import { TuiAvatar, TuiFade, TuiProgress } from '@taiga-ui/kit';
import { TuiBadge } from '@taiga-ui/kit';
import { TuiLet } from '@taiga-ui/cdk';
import { TuiAppearance, TuiIcon } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiArcChart } from '@taiga-ui/addon-charts';
import { AsyncPipe } from '@angular/common';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import {TuiStatus} from '@taiga-ui/kit';
@Component({
  imports: [
    TuiProgress,
    TuiBadge,
    TuiCardLarge,
    TuiLet,
    TuiIcon,
    CommonModule,
    TuiAvatar,
    AsyncPipe,
    TuiAmountPipe,
    TuiArcChart,
    TuiAppearance,
    TuiStatus,
    TuiFade
  ],
    selector: 'app-vision',
    standalone:true,
    templateUrl: './vision.component.html',
    styleUrl: './vision.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,

  })
export class VisionComponent {
  readonly value = [15, 25, 35, 25];
  readonly labels = [
    {
      title:'Early Adopters',
      status:'blue'
    },

    {
      title:'Campus Dominance',
      status:'pink'
    },
    {
      title:'National Expansion',
      status:'grey'
    },
    {
      title:'Global Ecosystem',
      status:'yellow'
    }
  ];
  revenueStreams = [
    {
      title: 'Commission-based sales',
      desc: 'Small commission on every transaction across student communities.',
      icon: '@tui.shopping-cart'
    },
    {
      title: 'Premium Membership',
      desc: 'Unlock exclusive deals, priority services, and personalized offers.',
      icon: '@tui.star'
    },
    {
      title: 'Partnerships & Sponsors',
      desc: 'Collaborations with brands, education partners, and local businesses.',
      icon: '@tui.users'
    },
    {
      title: 'Micro-ads Marketplace',
      desc: 'Hyper-targeted platform ads based on student interests and data.',
      icon: '@tui.chart-bar'
    }
  ];
}

