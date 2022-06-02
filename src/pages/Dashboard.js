import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

import ToggleItem from '../components/ToggleItem';
import InferenceItem from '../components/InferenceItem';


const Dashboard = () => {

  const APIURL = 'http://localhost:5000';
  const mapboxAPIKEY = process.env.REACT_APP_MAPBOX_TOKEN;
  mapboxgl.accessToken = mapboxAPIKEY;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(16.3738);
  const [lat, setLat] = useState(48.2082);
  const [zoom, setZoom] = useState(13);

  const [staticLayerNames, setStaticLayerNames] = useState([]);
  const [inferenceLayerNames, setInferenceLayerNames] = useState([]);

  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState("");

  function handleShowPrompt(val) {
    setShowPrompt(val);
  }

  function handlePrompt(val) {
    setPrompt(val);
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [
        [16.180145, 48.114976],
        [16.579369, 48.323474],
      ],
    });
  });

  useEffect(() => {
    map.current.once('load', () => {

      // buildings
      map.current.addLayer(
        {
          'id': '3dBuildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate', ['linear'], ['zoom'],
              15, ['get', 'height'], 15.5, ['get', 'height']
            ],
              'fill-extrusion-base': [
              'interpolate', ['linear'], ['zoom'],
              15, ['get', 'min_height'], 15.5, ['get', 'min_height']
            ],
            'fill-extrusion-opacity': [
              'interpolate', ['linear'], ['zoom'],
              15, 0, 16, 0.6
            ]
          }
        }
      );

      // static layers
      fetch(APIURL + '/staticlayers')
        .then(response => response.json())
        .then(fetchedStaticLayerNames => {
          setStaticLayerNames(fetchedStaticLayerNames)
        });

      // inference layers
      fetch(APIURL + '/inferencelayers')
        .then(response => response.json())
        .then(fetchedInferenceLayerNames => {
          setInferenceLayerNames(fetchedInferenceLayerNames)
        });
    });
  });

  useEffect(() => {
    async function updateInferenceLayers() {
      inferenceLayerNames.forEach(async function(layerName) {
        var geojson = await fetch(APIURL + '/inference/' + layerName + '/geo.geojson')
          .then(response => response.json());
        map.current.addSource(layerName + 'Source', {
          type: 'geojson',
          data: geojson
        });

        var style = await fetch(APIURL + '/inference/' + layerName + '/style.json')
          .then(response => response.json());
        style['id'] = layerName;
        style['source'] = layerName + 'Source';
        style['layout'] = {'visibility': 'none'};
        map.current.addLayer(style);
      });
    }
    updateInferenceLayers();
  }, [inferenceLayerNames]);

  useEffect(() => {
    async function updateStaticLayers() {
      staticLayerNames.forEach(async function(layerName) {
        var geojson = await fetch(APIURL + '/static/' + layerName + '/geo.geojson')
          .then(response => response.json());
        map.current.addSource(layerName + 'Source', {
          type: 'geojson',
          data: geojson
        });

        var style = await fetch(APIURL + '/static/' + layerName + '/style.json')
          .then(response => response.json());
        style['id'] = layerName;
        style['source'] = layerName + 'Source';
        style['layout'] = {'visibility': 'none'};
        map.current.addLayer(style);
      });
    }
    updateStaticLayers();
  }, [staticLayerNames]);

  return (
    <div>

      <div className="absolute top-1/2 w-screen text-center text-2xl">map loading...</div>

      <div ref={mapContainer} className="map-container relative" />

      <div className="absolute top-4 left-4 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
        <Link to="/about" className="flex p-2">
          <span className="text-lg font-mono font-black text-gray-800 select-none">logo</span>
        </Link>
        <div className="py-4 mt-2 border-t border-gray-200 text-sm font-mono font-black text-gray-800 select-none">inferences</div>
        <ul className="space-y-2">
          {inferenceLayerNames.map(
            (layerName, i) => <li key={i}><InferenceItem map={map} APIURL={APIURL} layerID={layerName} handleShowPrompt={handleShowPrompt} handlePrompt={handlePrompt}/></li>
          )}
        </ul>
      </div>

      <div className="absolute top-4 right-4 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
        <div className="pb-4 text-sm font-mono font-black text-gray-800 select-none">static layers</div>
        <ul className="pb-4 space-y-2">
          {staticLayerNames.map(
            (layerName, i) => <li key={i}><ToggleItem map={map} layerID={layerName}/></li>
          )}
        </ul>
        <div className="py-4 border-t border-gray-200 text-sm font-mono font-black text-gray-800 select-none">inference layers</div>
        <ul className="space-y-2">
          {inferenceLayerNames.map(
            (layerName, i) => <li key={i}><ToggleItem map={map} layerID={layerName}/></li>
          )}
        </ul>
      </div>

      {showPrompt &&
        <div id="promptDiv" className="absolute bottom-8 left-1/2 -translate-x-1/2 p-4 bg-gray-50 rounded select-none">
          {prompt}
        </div>
      }

    </div>
  );
}

export default Dashboard;
