import {Component, inject} from '@angular/core';
import {ChangeDetectionService} from './change-detection.service';
import {getRandomPalette} from './util';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-grand-child',
  template: `
    <div class="change-card parent" [style.background-color]="palette.bg" [style.color]="palette.color"
         style="box-shadow:{{palette.glow}}" style="margin-top:200px">
      <p>
        @if (signalMode()) {
          {{ this.service.count()}}
        } @else {
          {{ this.service.count$ | async  }}
        }
      </p>

    </div>
  `,
  imports: [
    AsyncPipe
  ],
  styles: ``
})
export class GrandChildComponent {

   service = inject(ChangeDetectionService);
   palette = getRandomPalette();
   signalMode = this.service.signalMode;


  constructor() {
    this.service.count$.subscribe(next => {
      console.log("GrandChildComponent", next);
      this.palette= getRandomPalette();
    })
  }
}
