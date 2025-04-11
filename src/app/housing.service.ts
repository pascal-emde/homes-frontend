//import { URL_HOME_LOCATIONS, URL_BACKEND } from "./utils/global-settings";
import { URLS } from "./utils/global-settings";
import { Injectable } from '@angular/core';
import { HousingLocation } from "./housing-location/housing-location";
import { WeatherObject } from "./utils/API Test/weather-object";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(URLS.HOME_LOCATIONS);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${URLS.HOME_LOCATIONS}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName,email)
  }

  async callApi(): Promise<WeatherObject[]> {
    const data = await fetch(URLS.BACKEND);
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

      //TODO Add Home to JSON-DB --> URL?
    console.log(JSON.stringify(newHome))
    });
  }
}
