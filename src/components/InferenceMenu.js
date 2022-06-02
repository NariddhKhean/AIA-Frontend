import React from 'react';
import { Link } from 'react-router-dom';

import InferenceItem from './InferenceItem';

const InferenceMenu = (props) => {
  return (
    <div className="absolute top-4 left-4 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <Link to={"/" + props.group} className="flex p-2">
        <span className="text-lg font-mono font-black text-gray-800 select-none">back</span>
      </Link>
      <div className="py-4 mt-2 border-t border-gray-200 text-sm font-mono font-black text-gray-800 select-none">inferences</div>
      <ul className="space-y-2">
        {props.liveLayerNames.map(
          (layerName, i) => <li key={i}><InferenceItem map={props.map} APIURL={props.APIURL} layerID={layerName} group={props.group}/></li>
        )}
      </ul>
    </div>
  );
};

export default InferenceMenu;
