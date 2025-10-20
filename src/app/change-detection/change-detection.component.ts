import {Component, inject} from '@angular/core';
import {ChangeDetectionService} from './change-detection.service';
import {LeftChildComponent} from './left-child.component';
import {RightChildComponent} from './right-child.component';
import {getBackgroundColor} from './util';

@Component({
  selector: 'app-change-detection',
  template: `
    <div class="container">
      <div class="change-card parent " [style.background-color]="color">
        <button (click)="incrementWithNgZone()" class="btn btn-primary">With zone</button>
        <button (click)="incrementWithoutZone()" class="btn btn-primary">Without zone</button>
      </div>
      <div class="children">
        <app-left-child/>
        <app-right-child/>
      </div>
    </div>

  `,
  imports: [
    LeftChildComponent,
    RightChildComponent
  ],
  styles: `
    .container{
      margin-top: 20px;
    }

  `
})
export class ChangeDetectionComponent {

  service = inject(ChangeDetectionService);
  color = getBackgroundColor();

  incrementWithNgZone() {
    this.service.incrementCountObs();
  }

  incrementWithoutZone() {
    this.service.incrementCount();
  }
}
