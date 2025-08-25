import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  showTip = false;
  sparkle = false;
  sparkleX = 0;
  sparkleY = 0;
  particles = Array(8);

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
