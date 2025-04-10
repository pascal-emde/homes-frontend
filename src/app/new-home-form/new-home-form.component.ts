import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule} from "@angular/material/dialog";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-new-home-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDialogModule, ReactiveFormsModule],
  template: `
    <div class="new-home-wrapper">
      <article class="new-home-form">
        <section class="listing-apply">
            <h1>New Home</h1>
            <p>Edit form to add a new home.</p>
            
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
                <button class="primary" type="submit">OK</button>
                <button class="primary" type="cancel">Cancel</button>
              </div>
            </form>
        </section>
      </article>
    </div>
  `,
  styleUrls: ['./new-home-form.component.css']
})
export class NewHomeFormComponent {
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
}
