import {Component, inject, signal} from '@angular/core';
import {ChangeDetectionService} from './change-detection.service';
import {LeftChildComponent} from './left-child.component';
import {ChildComponent} from './child.component';
import {getRandomPalette} from './util';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-change-detection',
  template: `
    <div class="controls">

      <mat-checkbox id="changeMode" type="checkbox" [(ngModel)]="signalMode">

          @if (signalMode()) {
            Zoneless change detection
          } @else {
            Zone change detection
          }
      </mat-checkbox>
      <button (click)="increment()" class="btn btn-primary">Increment</button>
    </div>
    @if (christmasToggle()) {
      <div class="christmas-tree">
        <img src="/assets/images/pine.png" alt="Christmas Tree"/>
      </div>
    }
    <div class="container">
      <div class="change-card parent " [style.background-color]="palette.bg" [style.color]="palette.color"
           style="box-shadow:{{palette.glow}}">
        <p>
          @if (signalMode()) {
            {{ service.count() }}
          } @else {
            {{ service.count$ | async }}
          }
        </p>


      </div>
      <div class="children">
        <app-left-child/>
        <app-child [name]="'RIGHT'"/>
      </div>
    </div>
    <div class="tree">
      <button class="tree-button" (click)="toggleChristmas()">
        <mat-icon>park</mat-icon>
      </button>
    </div>

  `,
  imports: [
    LeftChildComponent,
    ChildComponent,
    AsyncPipe,
    FormsModule,
    MatIcon,
    MatCheckbox,


  ],
  styles: `
    .container {
      margin-top: 20px;

      &.christmas {
        background-image: url("/assets/images/pine.png");
        background-repeat: no-repeat;
      }
    }

    .tree {
      position: absolute;
      bottom: 40px;
      right: 40px;

      button {
        background: none;
        border: none;
        color: white;
      }
    }

    .christmas-tree {
      position: absolute;
      top: 7px;
      left: 500px;

      img {
        height: 1050px
      }
    }

    .controls {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: right;

      .btn {
        margin: 15px;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 15px;
        transition: all 0.3s ease;
        background: linear-gradient(135deg, #8ab4f8 0%, #6b94d8 100%) !important;
        font-size: 18px;

        &:hover {
          transform: scale(1.2);
          color: #a8c4f8;
          background: rgba(138, 180, 248, 0.1);
          background: linear-gradient(135deg, #8ab4f8 0%, #6b94d8 100%) !important;
        }
      }

    }

  `
})
export class ChangeDetectionComponent {

  service = inject(ChangeDetectionService);
  palette = getRandomPalette();
  signalMode = this.service.signalMode;
  christmasToggle = signal(false);


  incrementWithNgZone() {
    this.service.incrementCountObs();
  }

  incrementWithoutZone() {
    this.service.incrementCount();
  }

  protected increment() {
    this.signalMode() ? this.incrementWithoutZone() : this.incrementWithNgZone();
  }

  protected toggleChristmas() {
    console.log("toggleChristmas", this.christmasToggle());
    this.christmasToggle.update(v => !v);
  }
}
