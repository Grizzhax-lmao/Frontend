import React from 'react';
import { useDispatch } from 'react-redux';
import { LocationActionTypes } from 'types/action.types';

import { getLocation } from 'services/geolocation.service';

import Map from 'components/Map';

const Home = () => {

  const dispatch = useDispatch();

  return (
    <div>

      <Map/>
      <button onClick={async () => {
        const newLocation = await getLocation();
        dispatch({type: LocationActionTypes.UPDATE_LOCATION,newLocation})
      }}
      >Find my location</button>

    </div>
  );
}

export default Home;