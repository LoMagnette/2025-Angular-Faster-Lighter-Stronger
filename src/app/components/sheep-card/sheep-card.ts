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
            <mat-icon class="icon">
             @if(sheep.category === 'military'){
              military_tech
            } @else if (sheep.category === 'science'){
              science
            } @else if (sheep.category === 'movie'){
              movie
            }@else{
              not_listed_location
            }
            </mat-icon>
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
