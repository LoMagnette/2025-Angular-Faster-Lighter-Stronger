import {Component, inject} from '@angular/core';
import {ChangeDetectionService} from './change-detection.service';
import {getBackgroundColor} from './util';

@Component({
  selector: 'app-grand-child',
  template: `
    <div class="change-card parent" [style.background-color]="color">
      <p>Zone: {{count}}</p>
      <p>No Zone: {{service.count()}}</p>
    </div>
  `,
  styles: ``
})
export class GrandChildComponent {

   service = inject(ChangeDetectionService);
   count: number = 0;
   color = "white";


  constructor() {
    this.color= getBackgroundColor();
    this.service.count$.subscribe(next => {
      this.count = next;
      this.color= getBackgroundColor();
    })
  }
}
