import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {HelloWorldComponent} from './hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-hello-world></app-hello-world>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angulars
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimations()]
});
