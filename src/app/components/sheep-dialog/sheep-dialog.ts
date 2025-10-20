import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {Sheep} from '../../models/sheep';

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
    MatError
  ],
  template:`
    <h2 mat-dialog-title>Add a New Space Sheep</h2>
    <mat-dialog-content>
      <form [formGroup]="sheepForm" class="sheep-form">
        <mat-form-field appearance="outline">
          <mat-label>Sheep Name</mat-label>
          <input matInput formControlName="name" placeholder="Enter sheep name">
          @if (sheepForm.get('name')?.invalid) {
            <mat-error>
              Name is required and must be at least 2 characters
            </mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" placeholder="Describe this cosmic sheep" rows="4"></textarea>
          @if (sheepForm.get('description')?.invalid) {
            <mat-error>
              Description is required and must be at least 10 characters
            </mat-error>
          }
        </mat-form-field>

      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="accent" [disabled]="sheepForm.invalid" (click)="onSubmit()">Add Sheep</button>
    </mat-dialog-actions>
  `,
  styleUrl: './sheep-dialog.scss'
})
export class SheepDialog {

  sheepForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SheepDialog>
  ) {
    this.sheepForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['assets/images/unknown.webp'],
      species: ['sheep'],
      likes: [0],
      category: ['unknown']
    });
  }

  onSubmit(): void {
    if (this.sheepForm.valid) {
      const newSheep: Partial<Sheep> = this.sheepForm.value;
      this.dialogRef.close(newSheep);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
