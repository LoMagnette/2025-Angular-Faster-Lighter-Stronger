import {Component, inject} from '@angular/core';
import {GrandChildComponent} from './grand-child.component';
import {getBackgroundColor, getRandomPalette} from './util';
import {ChangeDetectionService} from './change-detection.service';

@Component({
  selector: 'app-left-child',
  template: `
    <div class="container">
      <div class="parent change-card" [style.background-color]="palette.bg" [style.color]="palette.color" style="box-shadow:{{palette.glow}}">
        <p>
          LEFT
        </p>
      </div>
      <div class="children">
        <app-grand-child></app-grand-child>
        <div class="empty"></div>
      </div>
    </div>
  `,
  imports: [
    GrandChildComponent
  ],
  styles: `
    .parent {
      margin-left: auto;
      margin-right: auto;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }
    .empty {
      height: 150px;
      width: 200px;
    }

    .children {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }
  `
})
export class LeftChildComponent {
  palette = getRandomPalette();

  service = inject(ChangeDetectionService);

  constructor() {
    console.log(getBackgroundColor());
    this.service.count$.subscribe(_ => {
      this.palette = getRandomPalette();
    })
  }

}
