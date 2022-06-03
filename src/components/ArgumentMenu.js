import React from 'react';

const ArgumentMenu = (props) => {
  return (
    <div className="absolute top-4 left-56 w-48 overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <div className="pb-4 border-gray-200 text-sm font-mono font-black text-gray-800 select-none">arguments</div>
      {props.argsList.map((element, i) => <div key={i} className="py-2">{element}</div>)}
    </div>
  );
};

export default ArgumentMenu;
