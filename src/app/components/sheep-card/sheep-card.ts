import {Component, effect, inject, input, Input, signal} from '@angular/core';
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
    MatIcon,
    NgIf
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

  likes = signal(0);

  snack = inject(MatSnackBar);


  constructor() {
    effect(() => {
      const likeCount = this.likes()
      if(likeCount > 0){
        this.snack.open(`${this.sheep().name} has been liked ${likeCount} times`);
      }
    });
  }

  likeSheep() {
    this.likes.update(v => v+1);

  }
}
