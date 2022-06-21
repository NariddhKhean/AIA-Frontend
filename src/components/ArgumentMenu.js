import React from 'react';

const ArgumentMenu = (props) => {
  return (
    <div className="absolute top-4 left-80 w-72 overflow-y-auto pt-4 px-3 bg-white rounded">
      <div className="pb-4 border-gray-200 text-sm font-mono font-black text-gray-800 select-none">arguments</div>
      {props.argsList.map((element, i) => <div key={i}>{element}</div>)}
    </div>
  );
};

export default ArgumentMenu;
