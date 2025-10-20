import {Component, signal} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {Sheep} from '../../models/sheep';
import {form, Field, required, minLength} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-sheep-dialog',
  imports: [
    MatDialogActions,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatDialogContent,
    MatFormField,
    MatButton,
    MatDialogTitle,
    MatError,
    Field,
    JsonPipe
  ],
  template:`
    <h2 mat-dialog-title>Add a New Space Sheep</h2>
    <mat-dialog-content>
      <form class="sheep-form">
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-label>Sheep Name</mat-label>
          <input matInput [field]="sheepForm.name" placeholder="Enter sheep name">
          @if (sheepForm.name().touched() && sheepForm.name().errors(); as errors) {
            @for(error of errors; track $index){
              <mat-error>
               {{error.message || 'Invalid input'}}
              </mat-error>
            }
          }
        </mat-form-field>

        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-label>Description</mat-label>
          <textarea matInput [field]="sheepForm.description" placeholder="Describe this cosmic sheep" rows="4"></textarea>
          @if (sheepForm.description().touched() && sheepForm.description().errors(); as errors) {
            @for(error of errors; track $index){
              <mat-error>
                {{error.message  || 'Invalid input'}}
              </mat-error>
            }
          }
        </mat-form-field>

      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="accent" [disabled]="sheepForm().invalid()" (click)="onSubmit()">Add Sheep</button>
    </mat-dialog-actions>
  `,
  styleUrl: './sheep-dialog.scss'
})
export class SheepDialog {

  sheep  = signal<Sheep>({
    id:9999,
    name:'',
    description:'',
    imageUrl:'assets/images/unknown.webp',
    species:'sheep',
    likes:0,
    category:'unknown'
  })

  sheepForm= form(this.sheep,(path)=> {
    required(path.name, {message:"You have to provide a name"});
    minLength(path.name,3);
    required(path.description);
    minLength(path.description,10);
  })

  constructor(
    private dialogRef: MatDialogRef<SheepDialog>
  ) {

  }

  onSubmit(): void {
    if (this.sheepForm().valid()) {
      const newSheep: Partial<Sheep> = this.sheepForm().value();
      this.dialogRef.close(newSheep);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
