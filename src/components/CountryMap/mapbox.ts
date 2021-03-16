import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

const setMap = (coordinates : any, getCoordinates: any) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoieWE2IiwiYSI6ImNrbTh4eW1xcDFjZDEydm10NDFsMXlrOTQifQ.Op0dWC0nWMonljXC5GamkQ';
    const map = new mapboxgl.Map({
        container: 'country_map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom:10,
        center: coordinates,
        pitch: 45,
        // bearing: 17.6,
    });
    new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
    map.addControl(new mapboxgl.FullscreenControl())
    
    map.on('load', function () {
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': getCoordinates
                }
            }
        });
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine',
            'layout': {},
            'paint': {
                'fill-color': 'yellow',
                'fill-opacity': 0.4
            }
        });
    
    
    })}

export default setMap;