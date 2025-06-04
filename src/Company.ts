import { faker } from "@faker-js/faker";
import { MapLocation, Mappable } from "../types";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: MapLocation;
    constructor() {
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    getMarkerContent(): string {
        return `<h3>Company: ${this.companyName}</h3><p>${this.catchPhrase}</p>`;
    }
}