import React from 'react';
import { useDispatch } from 'react-redux';
import { LocationActionTypes } from 'types/action.types';

import Map from 'components/Map';

const Home = () => {

  const dispatch = useDispatch();

  return (
    <div>

      <Map/>
      <button onClick={() => dispatch({type: LocationActionTypes.GET_LOCATION})}>Find my location</button>

    </div>
  );
}

export default Home;