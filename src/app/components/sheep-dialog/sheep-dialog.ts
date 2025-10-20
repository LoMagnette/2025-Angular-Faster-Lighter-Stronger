import {Component, signal} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {Sheep} from '../../models/sheep';
import {form, Field} from '@angular/forms/signals';

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
    Field
  ],
  template:`
    <h2 mat-dialog-title>Add a New Space Sheep</h2>
    <mat-dialog-content>
      <form class="sheep-form">
        <mat-form-field appearance="outline">
          <mat-label>Sheep Name</mat-label>
          <input matInput [field]="sheepForm.name" placeholder="Enter sheep name">
          @if (sheepForm.name().invalid()) {
            <mat-error>
              Name is required and must be at least 2 characters
            </mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Description</mat-label>
          <textarea matInput [field]="sheepForm.description" placeholder="Describe this cosmic sheep" rows="4"></textarea>
          @if (sheepForm.description().invalid()) {
            <mat-error>
              Description is required and must be at least 10 characters
            </mat-error>
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

  sheepForm= form(this.sheep)

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
