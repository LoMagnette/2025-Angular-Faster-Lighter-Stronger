import {Component} from '@angular/core';

@Component({
  selector: 'app-right-child',
  template: `
    <div class="container">
      <div class="parent change-card">
        RIGHT
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
export class RightChildComponent {

}
