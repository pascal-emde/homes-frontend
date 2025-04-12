import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DIALOG_DATA } from "@angular/cdk/dialog";


@Component({
  selector: 'app-new-home-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule],
  template: `
    <div class="new-home-wrapper">
      <article class="new-home-form">
        <section class="listing-apply">
          <div class="new-home-header">
            <div class="header-row">
                <h1>Form Dialog</h1>
              <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
            </div>
            <p style="font-style: italic">Enter form to create a new Home.</p>
          </div>
            
          <!-- FORM GROUP -->
          <form [formGroup]="applyForm">
            <label for="name">Name</label>
            <input id="name" type="text" formControlName="name">

            <label for="city">City</label>
            <input id="city" type="text" formControlName="city">

            <label for="state">State</label>
            <input id="state" type="text" formControlName="state">

            <label for="photo">Photo</label>
            <input id="photo" type="text" formControlName="photo">

            <label for="available-units">Avilable Units</label>
            <input id="available-units" type="number" formControlName="availableUnits">

            <label for="wifi">Wifi</label>
            <input id="wifi" type="checkbox" formControlName="wifi">

            <label for="laundry">Laundry</label>
            <input id="laundry" type="checkbox" formControlName="laundry">

            <label for="price">Price</label>
            <input id="price" type="number" formControlName="price">

            <div class="buttons-vertical">
              <button class="save" type="submit" (click)="saveNewHome()">Save</button>
              <button class="primary" type="submit" (click)="saveNewHomeAndContinue()">Save & Continue</button>
              <button class="cancel" type="cancel" (click)="cancelNewHome()">Cancel</button>
            </div>
          </form>
        </section>
      </article>
    </div>
  `,
  styleUrls: ['./new-home-form.component.css']
})
export class NewHomeFormComponent {
  //data = inject(DIALOG_DATA);
  dialogRef = inject(MatDialogRef<NewHomeFormComponent>)
  applyForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    photo: new FormControl(''),
    availableUnits: new FormControl(''),
    wifi: new FormControl(''),
    laundry: new FormControl(''),
    price: new FormControl('')
  });

  cancelNewHome(): void {
    this.dialogRef.close();
  };

  saveNewHomeAndContinue() {
    const inputValues = this.applyForm.value;
    console.log(inputValues);
    this.applyForm.reset();
  }

  saveNewHome(): void {
    const inputValues = this.applyForm.value;
    console.log(inputValues);
    this.dialogRef.close();
  }
}
