import React, { useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

import InteractiveMap from '../../components/InteractiveMap';
import InferenceMenu from '../../components/InferenceMenu';
import ToggleMenu from '../../components/ToggleMenu';

const Map = () => {

  const group = 'g1';

  const APIURL = process.env.REACT_APP_BACKEND_URL;
  const mapboxAPIKEY = process.env.REACT_APP_MAPBOX_TOKEN;
  mapboxgl.accessToken = mapboxAPIKEY;

  const mapContainer = useRef(null);
  const [staticLayerNames, setStaticLayerNames] = useState([]);
  function handleSetStaticLayerNames(val) { setStaticLayerNames(val) }
  const [liveLayers, setLiveLayers] = useState({});
  function handleSetLiveLayers(val) { setLiveLayers(val) }

  const [showPrompt, setShowPrompt] = useState(false);
  function handleShowPrompt(val) { setShowPrompt(val) };
  const [prompt, setPrompt] = useState("");
  function handlePrompt(val) { setPrompt(val) };

  const map = InteractiveMap(group, APIURL, mapContainer, staticLayerNames, handleSetStaticLayerNames, liveLayers, handleSetLiveLayers);

  return (
    <div>
      <div className="absolute top-1/2 w-screen text-center text-2xl">map loading...</div>
      <div ref={mapContainer} className="map-container relative" />

      <InferenceMenu group={group} map={map} APIURL={APIURL} liveLayers={liveLayers}/>
      <ToggleMenu map={map} staticLayerNames={staticLayerNames} liveLayers={liveLayers}/>

    </div>
  )
}

/*
{showPrompt &&
  <div id="promptDiv" className="absolute bottom-8 left-1/2 -translate-x-1/2 p-4 bg-gray-50 rounded select-none">
    {prompt}
  </div>
}
*/

export default Map;
