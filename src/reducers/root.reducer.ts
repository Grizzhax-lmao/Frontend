import { locationReducer } from 'reducers/location.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>