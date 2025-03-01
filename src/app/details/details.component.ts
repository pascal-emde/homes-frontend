import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location/housing-location";
import { Translations } from "../utils/translations";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="detail">
      <img class="listing-photo" [src]="housingLocation?.photo">
     
      <div class="detail-wrapper">
        <section class="listing-description">
          <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
          <p class="listing-location">{{housingLocation?.city}}, {{ housingLocation?.state }} {{ Translations.translateAreaCode(housingLocation?.city + ', ' + housingLocation?.state)}}</p>
        </section>
        
        <section class="listing-features">
          <h2 class="section-heading">About this housing location</h2>
          <ul>
            <li>Units available: {{ housingLocation?.availableUnits }}</li>
            <li>Does this location have wifi: {{ Translations.translateBooleans(housingLocation?.wifi) }}</li>
            <li>Does this location have laundry: {{ Translations.translateBooleans(housingLocation?.laundry) }}</li>
          </ul>
          <p class="pricing">Price: {{ Translations.translateAndFormatPrice(housingLocation?.price) }} $</p>
        </section>
        
        <section class="listing-apply">
          <h2 class="section-heading">For information and appointments please contact us.</h2>
          <button class="primary" type="button" (click)="showApplyNow()">Apply now</button>
        </section>
      </div>
    
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  showApplyNow() {
    alert('Apply Mamaaaaa');
  }

  protected readonly Translations = Translations;
}
