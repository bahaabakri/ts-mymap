import { faker } from "@faker-js/faker";
import { MapLocation, Mappable } from "../types";
export class User implements Mappable {
    name:string;
    location:MapLocation
    constructor() {
        this.name = faker.name.fullName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    getMarkerContent(): string {
        return `<h3>User: ${this.name}</h3>`;
    }
}