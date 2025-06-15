import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAppearance, TuiButton, TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiCarousel} from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium } from '@taiga-ui/layout';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, OnDestroy } from '@angular/core';
interface RevenueStream {
  id: number;
  stream: string;
  description: string;
}

@Component({
  selector: 'app-moneytization',
  standalone: true,
  imports: [CommonModule,AsyncPipe, TuiAmountPipe, TuiAvatar, TuiButton, TuiCarousel, TuiLoader,TuiCardLarge,TuiAppearance,TuiBadge,TuiButton,TuiIcon,TuiCardMedium],
  templateUrl: './moneytization.component.html',
  styleUrl: './moneytization.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneytizationComponent implements AfterViewInit, OnDestroy{
  @ViewChildren('waveCanvas') waveCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

    private ctxs: CanvasRenderingContext2D[] = [];
    private animationFrameId: number | null = null;
    private time = 0;

    ngAfterViewInit(): void {
      this.setupCanvases();
      this.animate();
    }

    setupCanvases() {
      this.waveCanvases.forEach((canvasRef, i) => {
        const canvas = canvasRef.nativeElement;
        const ctx = canvas.getContext('2d')!;
        this.ctxs[i] = ctx;

        // Set size
        canvas.width = canvas.clientWidth * window.devicePixelRatio;
        canvas.height = canvas.clientHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      });
    }

    animate = () => {
      this.time += 0.02;
      this.ctxs.forEach((ctx, i) => {
        const canvas = this.waveCanvases.toArray()[i].nativeElement;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();

        for (let x = 0; x <= w; x++) {
          const y =
            10 * Math.sin((x * 0.05) + this.time + i) + // wave motion
            h / 2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
      });

      this.animationFrameId = requestAnimationFrame(this.animate);
    };

    ngOnDestroy(): void {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }

    //
  revenueStreams: RevenueStream[] = [
    { id: 1, stream: 'Transaction Fees', description: 'Small cut from student-to-student and vendor transactions.' },
    { id: 2, stream: 'Subscription Plans', description: 'Premium features for service providers & power users.' },
    { id: 3, stream: 'Campus Partnerships', description: 'Revenue-sharing with institutions for exclusive access.' },
    { id: 4, stream: 'Ad Placements', description: 'Highly targeted, non-intrusive ads for student audience.' }
  ];
}
