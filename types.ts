export interface MapLocation {
    lat: number;
    lng: number;
}
export interface Mappable {
    location: MapLocation;
    getMarkerContent(): string;
}