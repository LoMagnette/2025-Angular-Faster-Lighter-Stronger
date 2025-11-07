import {Component, inject, input, model} from '@angular/core';
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
import {MatSnackBar} from '@angular/material/snack-bar';

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
    MatIcon
  ],
  template: `
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ sheep().name }}</mat-card-title>
      </mat-card-header>
      <img mat-card-image [src]="sheep().imageUrl">
      <mat-card-content>
        <p>
          {{ sheep().description }}
        </p>
      </mat-card-content>
      <mat-card-actions>
          <button mat-button color="accent" (click)="likeSheep()">
            <mat-icon>
              favorite
            </mat-icon>
            LIKE ({{ likes() }})
          </button>
          <div>
            <mat-icon class="icon">
               @switch (sheep().category) {
                 @case ('military') {
                    military_tech
                  }
                  @case ( 'science') {
                    science
                  }
                  @case ('movie') {
                    movie
                  }
                  @default {
                    not_listed_location
                  }
                }
            </mat-icon>
          </div>
      </mat-card-actions>
    </mat-card>

  `,
  styleUrl: './sheep-card.scss'
})
export class SheepCard {

  public sheep = input.required<Sheep>();

  likes = model(0);


  snack = inject(MatSnackBar);


  constructor() {

  }

  likeSheep() {
    this.likes.update(v => v+1);
  }
}
