import { LocationState } from 'types/state.types';
import { LocationAction, LocationActionTypes } from 'types/action.types';

export const initialState: LocationState = {
    location: {
        lat: 0,
        lng: 0
    }
}

export const locationReducer = (
        state = initialState,
        action: LocationAction
    ): LocationState => {
        switch(action.type) {
            case LocationActionTypes.GET_LOCATION:
                return state;

            default:
                return state;
        }
}