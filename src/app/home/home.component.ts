import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
      <section>
          <form>
              <input type="text" placeholder="Filter by city" #filter>
              <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
              <button class="primary" type="button" (click)="callApi()">API Call</button>
              <button class="primary" type="button" (click)="addNewHome()">Add New Home</button>
          </form>
      </section>

      <section class="results">
          <app-housing-location *ngFor="let housingLocation of filteredHousingLocationList"
                                [housingLocation]="housingLocation"></app-housing-location>
      </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList = housingLocationList;
    });
   }

   filterResults(text: string) {
    if (!text) this.filteredHousingLocationList = this.housingLocationList;

    this.filteredHousingLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
   }

    callApi() {
        this.housingService.callApi().then((response) => {
            console.log(`API call from backend: \n ${JSON.stringify(response)}`)
        });
    }

    addNewHome() {
      this.housingService.addNewHome("New Home", "Arschhausen", "Derpistan", "Photo String", 69, true, true, 500000);
    }
}
