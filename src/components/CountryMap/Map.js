import "mapbox-gl/dist/mapbox-gl.css";
import  { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import './CountryMap.scss';
import { Marker } from "react-mapbox-gl";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoieWF1aGVuaWJlaWR1ayIsImEiOiJja2o3b2llMzUwcDNwMnJwNWtuOG82MzlpIn0.cNTogxbQEyS45pQYibK8mA";

const CountryMap = () => {

  const mapContainer = useRef();
  const [lng, setLng] = useState(27.5590);
  const [lat, setLat] = useState(53.90);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      <Marker
      coordinates={[27.5590, 53.90]}
      anchor="bottom">
      <img src='https://cdn5.vectorstock.com/i/1000x1000/99/84/map-marker-icon-vector-13489984.jpg'/>
    </Marker>
    });
    return () => map.remove();
  }, []);

  return (
    <div className='map-wrapper'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default CountryMap;
