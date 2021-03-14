import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

const setMap = (coordinates) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoieWE2IiwiYSI6ImNrbTh4eW1xcDFjZDEydm10NDFsMXlrOTQifQ.Op0dWC0nWMonljXC5GamkQ';
    const map = new mapboxgl.Map({
        container: 'country_map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom:10,
        center: coordinates,
        pitch: 45,
        // bearing: 17.6,
    });
    var marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());
}

export default setMap;