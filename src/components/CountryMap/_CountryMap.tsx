import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import ReactMapGL , {FullscreenControl, Marker} from 'react-map-gl';


const MAP_API = 'pk.eyJ1IjoieWF1aGVuaWJlaWR1ayIsImEiOiJja2o3b2llMzUwcDNwMnJwNWtuOG82MzlpIn0.cNTogxbQEyS45pQYibK8mA'


const CountryMap = ({coordinates}) => {
console.log(coordinates[0])

  const [viewport, setViewport] = useState({
    latitude: 53.9006,
    longitude: 27.5590,
    zoom: 8
  });
  const fullscreenControlStyle= {
    right: 10,
    top: 10
  };
// let lat = Number(coordinates[0])
//   useEffect(()=> {
//       setViewport({...viewport, latitude: lat, longitude: lat})
//   },[])

  return (
    <ReactMapGL
      {...viewport} width={400}  height={400} mapboxApiAccessToken={MAP_API}
      onViewportChange={nextViewport => setViewport(nextViewport)}>
          <FullscreenControl style={fullscreenControlStyle} />
          <Marker latitude={53.9006} longitude={27.5590} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
    </ReactMapGL>
  );
}

export default CountryMap
