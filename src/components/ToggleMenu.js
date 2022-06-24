import React from 'react';

import ToggleItem from './ToggleItem';

const ToggleMenu = (props) => {

  return (
    <div>
      {
        Object.keys(props.liveLayers).length > 0 || props.staticLayerNames.length > 0
          ?<div className="absolute bottom-1/3 top-4 right-4 w-72">
            <div className="overflow-y-auto py-4 px-3 bg-white rounded w-full max-h-full overflow-auto">

              {
                props.staticLayerNames.length > 0
                  ?<div>
                    <div className="pb-4 text-sm font-mono font-black text-gray-800 select-none">static layers</div>
                    <ul className="pb-4 space-y-2">
                      {props.staticLayerNames.map(
                        (layerName, i) => <li key={i}><ToggleItem map={props.map} layerID={layerName} inferenceReturned={props.inferenceReturned} handleSetInferenceReturned={props.handleSetInferenceReturned} tint={props.tint}/></li>
                      )}
                    </ul>
                  </div>
                  :<div></div>
              }
              {
                Object.keys(props.liveLayers).length > 0
                  ?<div>
                    {
                      props.staticLayerNames.length > 0
                        ?<br/>
                        :<div></div>
                    }
                    <div className="pb-4 text-sm font-mono font-black text-gray-800 select-none">inference layers</div>
                    <ul className="space-y-2">
                      {Object.keys(props.liveLayers).map(
                        (layerName, i) => <li key={i}><ToggleItem map={props.map} layerID={layerName} inferenceReturned={props.inferenceReturned} handleSetInferenceReturned={props.handleSetInferenceReturned} tint={props.tint}/></li>
                      )}
                    </ul>
                  </div>
                  :<div></div>
              }
            </div>
          </div>
          :<div></div>
      }
    </div>
  );
};

export default ToggleMenu;
