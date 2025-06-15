import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, OnDestroy } from '@angular/core';

interface Card {
  id: number;
  title: string;
  target: number;
}
@Component({
  selector: 'app-marketopportunity',
  imports: [CommonModule],
  templateUrl: './marketopportunity.component.html',
  styleUrl: './marketopportunity.component.less'
})
export class MarketopportunityComponent implements AfterViewInit, OnDestroy{
  cards: Card[] = [
    { id: 1, title: 'Market Size', target: 4800000000 },
    { id: 2, title: 'Potential Users', target: 250000000 },
    { id: 3, title: 'Global Reach', target: 195 },
  ];

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
}
