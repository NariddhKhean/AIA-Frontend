import React from 'react';
import { Link } from 'react-router-dom';

import InferenceItem from './InferenceItem';

const InferenceMenu = (props) => {
  return (
    <div className="absolute top-4 left-4 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <div className="pb-4 text-sm font-mono font-black text-gray-800 select-none">inferences</div>
      <ul className="space-y-2">
        {Object.keys(props.liveLayers).map(
          (layerName, i) => <li key={i}><InferenceItem map={props.map} APIURL={props.APIURL} layerID={layerName} group={props.group} inputs={props.liveLayers[layerName]} runningInference={props.runningInference} handleSetRunningInference={props.handleSetRunningInference} argsVis={props.argsVis} handleSetArgsVis={props.handleSetArgsVis} handleSetArgsList={props.handleSetArgsList}/></li>
        )}
      </ul>
    </div>
  );
};

export default InferenceMenu;
