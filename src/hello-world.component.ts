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
