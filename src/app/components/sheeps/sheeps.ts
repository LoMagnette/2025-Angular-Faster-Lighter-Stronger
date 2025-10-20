
import {Component, inject} from '@angular/core';
import {SheepCard} from '../sheep-card/sheep-card';
import {Observable} from 'rxjs';
import {Sheep} from '../../models/sheep';
import {SheepService} from '../../services/sheep-service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {SheepDialog} from '../sheep-dialog/sheep-dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sheeps',
  imports: [
    SheepCard,
    NgForOf,
    AsyncPipe,
    MatIconButton,
    MatIcon,
    MatTooltip,
    MatFabButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
  ],
  template: `
    <div class="tools">
      <button mat-icon-button (click)="refreshSheep()" matTooltip="Reload sheep">
        <mat-icon>refresh</mat-icon>
      </button>
    </div>
    <div class="header">
      <h1 class="title">Sheep in Space</h1>
      <p class="subtitle">Discover the legendary astronaut sheep who boldly went where no sheep has gone before</p>
    </div>
    <div class="search-bar">
      <mat-form-field appearance="outline">
        <mat-label>Filter</mat-label>
        <input type="text" matInput ="filter" placeholder="Enter the name of the sheep you're looking for" [(ngModel)]="searchText"/>
      </mat-form-field>
    </div>
    <div class="content">
      <div class="sheep-grid">
        <ng-container *ngFor="let sheep of sheep$ | async">
          <app-sheep-card [sheep]="sheep"/>
        </ng-container>
      </div>
    </div>
      <button mat-fab class="add" (click)="addASheep()">
        <mat-icon>add</mat-icon>
      </button>
  `,
  styleUrl: './sheeps.scss'
})
export class Sheeps {

  sheepService = inject<SheepService>(SheepService);
  sheep$: Observable<Sheep[]> = this.sheepService.getSheep();
  dialog = inject(MatDialog);
  searchText: string = '';


  refreshSheep() {
    this.sheep$ = this.sheepService.getSheep();
  }

  addASheep() {
    const dialogRef = this.dialog.open(SheepDialog, {
      width: '400px',
      panelClass: 'space-theme-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //TODO
      }
    });
  }
}
