import React from 'react';

import ToggleItem from './ToggleItem';

const ToggleMenu = (props) => {

  return (
    <div className="absolute top-4 right-4 w-48 overflow-y-auto py-4 px-3 bg-white rounded">
      <div className="pb-4 text-sm font-mono font-black text-gray-800 select-none">static layers</div>
      <ul className="pb-4 space-y-2">
        {props.staticLayerNames.map(
          (layerName, i) => <li key={i}><ToggleItem map={props.map} layerID={layerName} inferenceReturned={props.inferenceReturned} handleSetInferenceReturned={props.handleSetInferenceReturned}/></li>
        )}
      </ul>
      <div className="py-4 border-t border-gray-200 text-sm font-mono font-black text-gray-800 select-none">inference layers</div>
      <ul className="space-y-2">
        {Object.keys(props.liveLayers).map(
          (layerName, i) => <li key={i}><ToggleItem map={props.map} layerID={layerName} inferenceReturned={props.inferenceReturned} handleSetInferenceReturned={props.handleSetInferenceReturned}/></li>
        )}
      </ul>
    </div>
  );
};

export default ToggleMenu;
