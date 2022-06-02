import { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

const InteractiveMap = (group, APIURL, mapContainer, staticLayerNames, handleSetStaticLayerNames, liveLayerNames, handleSetLiveLayerNames) => {

  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [16.3738, 48.2082],
      zoom: 13,
      maxBounds: [
        [16.180145, 48.114976],
        [16.579369, 48.323474],
      ],
    });
  });

  useEffect(() => {
    map.current.once('load', () => {

      // static layers
      fetch(APIURL + '/' + group + '/staticlayers')
        .then(response => response.json())
        .then(fetchedStaticLayerNames => {
          handleSetStaticLayerNames(fetchedStaticLayerNames)
        });

      // live layers
      fetch(APIURL + '/' + group + '/livelayers')
        .then(response => response.json())
        .then(fetchedLiveLayerNames => {
          handleSetLiveLayerNames(fetchedLiveLayerNames)
        });
    });
  });

  useEffect(() => {
    async function updateLiveLayers() {
      liveLayerNames.forEach(async function(layerName) {
        var geojson = await fetch(APIURL + '/live/' + group + '/' + layerName + '/geo.geojson')
          .then(response => response.json());
        map.current.addSource(layerName + 'Source', {
          type: 'geojson',
          data: geojson
        });

        var style = await fetch(APIURL + '/live/' + group + '/' + layerName + '/style.json')
          .then(response => response.json());
        style['id'] = layerName;
        style['source'] = layerName + 'Source';
        style['layout'] = {'visibility': 'none'};
        map.current.addLayer(style);
      });
    }
    updateLiveLayers();
  }, [liveLayerNames]);

  useEffect(() => {
    async function updateStaticLayers() {
      staticLayerNames.forEach(async function(layerName) {
        var geojson = await fetch(APIURL + '/static/' + group + '/' + layerName + '/geo.geojson')
          .then(response => response.json());
        map.current.addSource(layerName + 'Source', {
          type: 'geojson',
          data: geojson
        });

        var style = await fetch(APIURL + '/static/' + group + '/' + layerName + '/style.json')
          .then(response => response.json());
        style['id'] = layerName;
        style['source'] = layerName + 'Source';
        style['layout'] = {'visibility': 'none'};
        map.current.addLayer(style);
      });
    }
    updateStaticLayers();
  }, [staticLayerNames]);

  return map;
}

export default InteractiveMap;
