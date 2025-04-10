import { Injectable } from '@angular/core';
import { HousingLocation } from "./housing-location/housing-location";
import { WeatherObject } from "./utils/API Test/weather-object";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  urlBE = 'http://localhost:5288/api/homes';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName,email)
  }

  async callApi(): Promise<WeatherObject[]> {
    const data = await fetch(this.urlBE);
    return await data.json();
  }

  addNewHome(name: string, city: string, state: string, photo: string, availableUnits: number, wifi: boolean, laundry: boolean, price: number){

    this.getAllHousingLocations().then((response ) => {
      const numberOfHousings = response.length;
      const newHome: HousingLocation = {
        id: numberOfHousings,
        name: name,
        city: city,
        state: state,
        photo: photo,
        availableUnits: availableUnits,
        wifi: wifi,
        laundry: laundry,
        price: price
      };

      // Add Home to JSON-DB
    console.log(JSON.stringify(newHome))
    });
  }
}
