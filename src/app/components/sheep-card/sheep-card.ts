import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Sheep} from '../../models/sheep';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sheep-card',
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    NgIf
  ],
  template: `
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ sheep.name }}</mat-card-title>
      </mat-card-header>
      <img mat-card-image [src]="sheep.imageUrl">
      <mat-card-content>
        <p>
          {{ sheep.description }}
        </p>
      </mat-card-content>
      <mat-card-actions>
          <button mat-button color="accent" (click)="likeSheep()">
            <mat-icon>
              favorite
            </mat-icon>
            LIKE ({{ sheep.likes }})
          </button>
          <div>
            <ng-container *ngIf="sheep.category === 'military'; else science">
              <mat-icon class="icon">
                military_tech
              </mat-icon>
            </ng-container>
            <ng-template #science>
              <mat-icon *ngIf="sheep.category === 'science'; else movie" class="icon">
                science
              </mat-icon>
            </ng-template>
            <ng-template #movie>
              <mat-icon *ngIf="sheep.category === 'movie'; else unknown" class="icon">
                movie
              </mat-icon>
            </ng-template>
            <ng-template #unknown>
              <mat-icon class="icon">
                not_listed_location
              </mat-icon>
            </ng-template>
          </div>
      </mat-card-actions>
    </mat-card>

  `,
  styleUrl: './sheep-card.scss'
})
export class SheepCard {

  @Input({required: true})
  public sheep!: Sheep;


  likeSheep() {

  }
}
