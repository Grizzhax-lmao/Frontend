import googleMapReact from "google-map-react";

export enum LocationActionTypes {
    UPDATE_LOCATION
}

interface UpdateLocationAction {
    type: LocationActionTypes,
    newLocation: googleMapReact.Coords
}

export type LocationAction = UpdateLocationAction;