import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

import InteractiveMap from '../../components/InteractiveMap';
import ToggleItem from '../../components/ToggleItem';
import InferenceItem from '../../components/InferenceItem';

const Map = () => {

  const group = 'g1';

  const APIURL = process.env.REACT_APP_BACKEND_URL;
  const mapboxAPIKEY = process.env.REACT_APP_MAPBOX_TOKEN;
  mapboxgl.accessToken = mapboxAPIKEY;

  const mapContainer = useRef(null);
  const [staticLayerNames, setStaticLayerNames] = useState([]);
  function handleSetStaticLayerNames(val) { setStaticLayerNames(val) }
  const [liveLayerNames, setLiveLayerNames] = useState([]);
  function handleSetLiveLayerNames(val) { setLiveLayerNames(val) }

  const [showPrompt, setShowPrompt] = useState(false);
  function handleShowPrompt(val) { setShowPrompt(val) };
  const [prompt, setPrompt] = useState("");
  function handlePrompt(val) { setPrompt(val) };

  const map = InteractiveMap(group, APIURL, mapContainer, staticLayerNames, handleSetStaticLayerNames, liveLayerNames, handleSetLiveLayerNames);

  return (
    <div>
      <div className="absolute top-1/2 w-screen text-center text-2xl">map loading...</div>

      <div ref={mapContainer} className="map-container relative" />

      <div className="absolute top-4 left-4 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
        <Link to="/g2" className="flex p-2">
          <span className="text-lg font-mono font-black text-gray-800 select-none">back</span>
        </Link>
        <div className="py-4 mt-2 border-t border-gray-200 text-sm font-mono font-black text-gray-800 select-none">inferences</div>
        <ul className="space-y-2">
          {liveLayerNames.map(
            (layerName, i) => <li key={i}><InferenceItem map={map} APIURL={APIURL} layerID={layerName} group={group} handleShowPrompt={handleShowPrompt} handlePrompt={handlePrompt}/></li>
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
          {liveLayerNames.map(
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
  )
}

export default Map;
