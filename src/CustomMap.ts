import { Mappable } from "../types";

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(private mapDiv: HTMLElement) {
        if (!mapDiv) {
            throw new Error("Map div not found");
        }
        this.googleMap = new google.maps.Map(this.mapDiv, {
            zoom: 3,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable:Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.getMarkerContent()
        });
        marker.addListener('click', () => {
            this.openMarkerWindow(infoWindow, marker);
        })
    }
    openMarkerWindow(infoWindow: google.maps.InfoWindow, marker: google.maps.Marker): void {
        infoWindow.open(this.googleMap, marker)
    }
} 