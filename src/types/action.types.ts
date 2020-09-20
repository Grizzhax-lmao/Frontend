export enum LocationActionTypes {
    GET_LOCATION
}

interface GetLocationAction {
    type: LocationActionTypes,
    payload: null
}

export type LocationAction = GetLocationAction;