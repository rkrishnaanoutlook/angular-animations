import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [MatIconModule, MatTabsModule],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  showTip = false;
  sparkle = false;
  sparkleX = 0;
  sparkleY = 0;
  particles = Array(8);

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.iconRegistry.addSvgIcon(
      'rocket',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/rocket.svg'),
    );
    this.iconRegistry.addSvgIcon(
      'timer',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/timer.svg'),
    );
    this.iconRegistry.addSvgIcon(
      'new-badge',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/new-badge.svg'),
    );
  }

  ngOnInit() {
    this.showTip = true;
    setTimeout(() => (this.showTip = false), 6000);
  }

  triggerSparkle(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.sparkleX = event.clientX - rect.left;
    this.sparkleY = event.clientY - rect.top;
    this.sparkle = false;
    requestAnimationFrame(() => (this.sparkle = true));
  }

  dismissTip() {
    this.showTip = false;
  }
}
