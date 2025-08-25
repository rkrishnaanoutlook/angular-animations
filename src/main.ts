import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {HelloWorldComponent} from './hello-world.component';
import {provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent],
  template: `
    <app-hello-world></app-hello-world>
  `,
})
export class App {
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
