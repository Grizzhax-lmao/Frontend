import React from 'react';
import GoogleMapsReact, { fitBounds } from 'google-map-react';
import { MAP_API_KEY } from 'config';

import MapBlock from 'components/MapBlock';

const size = {
	width: 900,
	height: 600
}
const fit = fitBounds(
	{
		ne: {
			lat:43.472200,
			lng:-80.551835
		},
		sw: {
			lat:43.470534,
			lng:-80.553251
		}
	},
	{
		width:size.width,
		height:size.height
	}
)
console.log(fit)

const Map = () => {

	return (
		<div style={styles.container}>

			<GoogleMapsReact
				defaultCenter={fit.center}
				defaultZoom={fit.zoom}
				yesIWantToUseGoogleMapApiInternals
				bootstrapURLKeys={{
					key:MAP_API_KEY,
					language: 'ja'
				}}
				onGoogleApiLoaded={({map,maps}) => {
					console.log(map,maps)
					map.mapTypeId = 'hybrid'
				}}
			>
				
				<MapBlock lat={1/3600 * 1/27 * 1} lng={20}></MapBlock>
				<MapBlock lat={1/3600 * 1/27 * 2} lng={20}></MapBlock>

			</GoogleMapsReact>        

			</div>
	);

} 

const styles = {
    container: {
        height: `${size.height}px`,
        width: `${size.width}px`        
    }
}

export default Map;