import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `
    <h2 class="fade-in">Hello World</h2>

    <div class="trial-wrapper">
      <button class="trial-btn" (click)="triggerSparkle()">
        <span class="badge">New</span>
        <span class="timer">⏱</span>
        <span>2-Hour Trial</span>
        <span class="rocket">🚀</span>

        <span
          *ngIf="sparkle"
          class="sparkle-burst"
          (animationend)="sparkle = false"
        >
          <span class="spark" *ngFor="let _ of particles"></span>
        </span>
      </button>

      <div *ngIf="showTip" class="tooltip">
        <div class="tip-header">Try it instantly</div>
        Start a 2‑hour session in seconds — no license server required.
        <div class="tip-footer">
          <span class="hint">Click to begin</span>
          <button (click)="dismissTip()">Dismiss</button>
        </div>
        <span class="tip-arrow"></span>
      </div>
    </div>
  `,
  styles: [
    `
    .fade-in {
      animation: fadeIn 0.6s ease-in forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .trial-wrapper {
      margin-top: 1rem;
      position: relative;
      display: inline-block;
    }

    .trial-btn {
      position: relative;
      border: 1px solid rgba(58, 219, 144, 0.8);
      background: #fff;
      color: #002F2B;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      border-radius: 2px;
      cursor: pointer;
      overflow: hidden;
      transition: transform 0.2s;
    }

    .trial-btn:hover {
      transform: translateY(-1px);
    }

    .trial-btn:active {
      transform: scale(0.98);
    }

    .trial-btn::before {
      content: "";
      position: absolute;
      inset: -6px;
      background: linear-gradient(to right, #9D9AF8, #3ADB90, #00FFA5);
      opacity: 0.25;
      filter: blur(6px);
      z-index: -1;
      animation: glow 5s infinite;
    }

    @keyframes glow {
      0%, 100% { opacity: 0.25; }
      50% { opacity: 0.4; }
    }

    .badge {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      background: #9D9AF8;
      color: #fff;
      font-size: 10px;
      padding: 0 0.25rem;
      font-weight: bold;
      border-radius: 2px;
    }

    .timer {
      background: rgba(58, 219, 144, 0.1);
      border: 1px solid rgba(58, 219, 144, 0.4);
      border-radius: 2px;
      padding: 2px 4px;
      margin-right: 4px;
    }

    .rocket {
      margin-left: 4px;
      opacity: 0.7;
    }

    .sparkle-burst {
      position: absolute;
      inset: 0;
      pointer-events: none;
      animation: burst 0.7s forwards;
    }

    @keyframes burst {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }

    .sparkle-burst .spark {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 3px;
      height: 3px;
      background: #3ADB90;
      border-radius: 2px;
      animation: spark 0.7s forwards;
    }

    .sparkle-burst .spark:nth-child(1) { --tx: 16px; --ty: 0; }
    .sparkle-burst .spark:nth-child(2) { --tx: 11px; --ty: 11px; }
    .sparkle-burst .spark:nth-child(3) { --tx: 0; --ty: 16px; }
    .sparkle-burst .spark:nth-child(4) { --tx: -11px; --ty: 11px; }
    .sparkle-burst .spark:nth-child(5) { --tx: -16px; --ty: 0; }
    .sparkle-burst .spark:nth-child(6) { --tx: -11px; --ty: -11px; }
    .sparkle-burst .spark:nth-child(7) { --tx: 0; --ty: -16px; }
    .sparkle-burst .spark:nth-child(8) { --tx: 11px; --ty: -11px; }

    @keyframes spark {
      to { transform: translate(var(--tx), var(--ty)); opacity: 0; }
    }

    .tooltip {
      position: absolute;
      top: 115%;
      left: 0;
      width: 280px;
      background: #fff;
      border: 1px solid #e2e8f0;
      padding: 0.75rem;
      font-size: 12px;
      color: #334155;
      border-radius: 2px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      animation: tipFade 0.2s ease-out;
    }

    .tip-header {
      color: #9D9AF8;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .tip-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }

    .tip-arrow {
      position: absolute;
      top: -8px;
      left: 24px;
      width: 8px;
      height: 8px;
      background: #fff;
      border-left: 1px solid #e2e8f0;
      border-top: 1px solid #e2e8f0;
      transform: rotate(45deg);
    }

    @keyframes tipFade {
      from { opacity: 0; transform: translateY(-6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    `
  ]
})
export class HelloWorldComponent implements OnInit {
  showTip = false;
  sparkle = false;
  particles = Array(8);

  ngOnInit() {
    this.showTip = true;
    setTimeout(() => (this.showTip = false), 6000);
  }

  triggerSparkle() {
    this.sparkle = false;
    requestAnimationFrame(() => (this.sparkle = true));
  }

  dismissTip() {
    this.showTip = false;
  }
}

