import React, { useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax

import InteractiveMap from '../../components/InteractiveMap';
import InferenceMenu from '../../components/InferenceMenu';
import ArgumentMenu from '../../components/ArgumentMenu';
import ToggleMenu from '../../components/ToggleMenu';

const Map = () => {

  const group = 'g3';

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

  var popups = {
      "Accessibility - Physical": [
        "name",
        "elevators",
        "low_sidewalk",
        "sidewalk_width",
        "disabled_parking"
      ],
      "Accessibility - Visual": [
        "name",
        "acoustic_lights",
        "tactile_sidewalks",
        "low_sidewalk"
      ],
      "Bio - Ethnicities": [
        "diversity_index",
        "afro_ratio",
        "asian_ratio",
        "mid_east_ratio",
        "south_asian_ratio",
        "latinx_ratio",
        "european_ratio"
      ],
      "Bio - Income": [
        "INC_FEM_VALUE",
        "INC_MAL_VALUE"
      ],
      "Bio - Population": [
        "tot_men",
        "tot_wom",
        "tot_aus_ratio",
        "tot_foreign_ratio",
        "density"
      ],
      "Bio - Religion": [
        "rom-cath",
        "evang",
        "jew",
        "islam",
        "ortho",
        "other",
        "without"
      ],
      "Urban Diversity - Greenness": [
        "name",
        "tree_counts"
      ],
      "Urban Diversity - Public Image": [
        "name",
        "tree_index",
        "public_toilets",
        "drinking_fountain"
      ]
  };
  const map = InteractiveMap(group, APIURL, mapContainer, staticLayerNames, handleSetStaticLayerNames, liveLayers, handleSetLiveLayers, popups);

  return (
    <div>
      <div className="absolute top-1/2 w-screen text-center text-2xl">map loading...</div>
      <div ref={mapContainer} className="map-container relative" />

      {
        Object.keys(liveLayers).length > 0
          ?<InferenceMenu group={group} map={map} APIURL={APIURL} liveLayers={liveLayers} handleSetInferenceReturned={handleSetInferenceReturned} argsVis={argsVis} handleSetArgsVis={handleSetArgsVis} handleSetArgsList={handleSetArgsList}/>
          :<div></div>
      }
      <ToggleMenu map={map} staticLayerNames={staticLayerNames} liveLayers={liveLayers} inferenceReturned={inferenceReturned} handleSetInferenceReturned={handleSetInferenceReturned} tint="#cee741"/>

      <div className={argsVis}><ArgumentMenu argsList={argsList}/></div>

    </div>
  )
}

export default Map;
