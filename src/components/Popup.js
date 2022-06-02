import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

export function setUpPopup(map, layerID) {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.current.on('mouseenter', layerID, (e) => {
    map.current.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
  });

  map.current.on('mouseleave', layerID, () => {
    map.current.getCanvas().style.cursor = '';
    popup.remove();
  });
}

export default setUpPopup;
