import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <div class="parent change-card">
        <p>{{ name() }}</p>
      </div>
      <div class="children">
        <div class="empty"></div>
        <div class="empty"></div>
      </div>
    </div>
  `,
  imports: [
  ],
  styles: `
  `
})
export class ChildComponent {

  name = input('child');

}
