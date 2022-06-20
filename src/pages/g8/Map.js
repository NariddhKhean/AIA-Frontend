import React, { useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

import InteractiveMap from '../../components/InteractiveMap';
import InferenceMenu from '../../components/InferenceMenu';
import ArgumentMenu from '../../components/ArgumentMenu';
import ToggleMenu from '../../components/ToggleMenu';

const Map = () => {

  const group = 'g8';

  const APIURL = process.env.REACT_APP_BACKEND_URL;
  const mapboxAPIKEY = process.env.REACT_APP_MAPBOX_TOKEN;
  mapboxgl.accessToken = mapboxAPIKEY;

  const mapContainer = useRef(null);
  const [staticLayerNames, setStaticLayerNames] = useState([]);
  function handleSetStaticLayerNames(val) { setStaticLayerNames(val) }
  const [liveLayers, setLiveLayers] = useState({});
  function handleSetLiveLayers(val) { setLiveLayers(val) }

  const [inferenceReturned, setInferenceReturned] = useState({});
  function handleSetInferenceReturned(key, val) {
    setInferenceReturned({...inferenceReturned, [key]: val});
  }

  const [argsVis, setArgsVis] = useState("hidden");
  function handleSetArgsVis(val) { setArgsVis(val) }
  const [argsList, setArgsList] = useState([]);
  function handleSetArgsList(val) { setArgsList(val) }

  var popups = {"Score": ["hover"]};

  const map = InteractiveMap(group, APIURL, mapContainer, staticLayerNames, handleSetStaticLayerNames, liveLayers, handleSetLiveLayers, popups);

  return (
    <div>
      <div className="absolute top-1/2 w-screen text-center text-2xl">map loading...</div>
      <div ref={mapContainer} className="map-container relative" />

      <InferenceMenu group={group} map={map} APIURL={APIURL} liveLayers={liveLayers} handleSetInferenceReturned={handleSetInferenceReturned} argsVis={argsVis} handleSetArgsVis={handleSetArgsVis} handleSetArgsList={handleSetArgsList}/>
      <ToggleMenu map={map} staticLayerNames={staticLayerNames} liveLayers={liveLayers} inferenceReturned={inferenceReturned} handleSetInferenceReturned={handleSetInferenceReturned}/>

      <div className={argsVis}><ArgumentMenu argsList={argsList}/></div>

      <div className="absolute bottom-8 right-4">
        <img width={200} src={process.env.PUBLIC_URL + "/" + group + "/key.png"}/>
      </div>

    </div>
  )
}

export default Map;
