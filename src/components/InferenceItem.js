import React, { useState, useCallback } from 'react';
import * as ReactDOM from 'react-dom';

const getInputPoint = async (prompt, props) => {
  props.handlePrompt(
    <div>
      <div className="text-sm font-mono font-black">{props.layerID}</div>
      <div className="text-m italic px-6">{prompt}</div>
    </div>
  );
  props.handleShowPrompt(true);
  var val = await props.map.current.once('click');
  props.handleShowPrompt(false);
  return val;
}

/*
const buildSliderInput = async (prompt, props, min, max) => {
  var slider = <input type="range" min={min} max={max} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>;
  var button = <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ya</button>;
  props.handlePrompt(
    <div>
      <div className="text-sm font-mono font-black">{props.layerID}</div>
      <div className="text-m italic px-6">{prompt}</div>
      <form id="slider">
        {slider}
        {button}
      </form>
    </div>
  );
  props.handleShowPrompt(true);
}
*/

const InferenceItem = (props) => {
  var [loadVisibility, setLoadVisibility] = useState("invisible");
  var [disableButton, setDisableButton] = useState(false);

  const fetchInference = useCallback(() => async () => {
    ReactDOM.flushSync(() => {
      setLoadVisibility("visible");
      setDisableButton(true);
    });

    var input_args = {'model': props.layerID, 'group': props.group};



    // Here is where you can design input interactions

    // Example of point input

    /* 
    var prompt = "first, please select point on map...";
    var arg = await getInputPoint(prompt, props);
    input_args['lat'] = arg.lngLat.lat;
    input_args['lng'] = arg.lngLat.lng;
    */

    // Example of slider input
    // TODO



    await fetch(props.APIURL + '/api', {
      method: 'POST',
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(input_args)
    })
      .then(response => response.json())
      .then(geojson => {props.map.current.getSource(props.layerID + 'Source').setData(geojson)});

    ReactDOM.flushSync(() => {
      setLoadVisibility("invisible");
      setDisableButton(false);
    });
  }, []);

  return (
    <button className="w-full" disabled={disableButton} onClick={fetchInference(props.APIURL, props.map, props.layerID)}>
      <span className="flex p-2 text-left text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
        <span className="flex-auto ml-3 select-none">{props.layerID}</span>
        <svg className={"w-6 h-6 text-gray-500 " + loadVisibility} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="84" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate><animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#f3f3f3;#a3a3ac;#b8babd;#d8dddf;#f3f3f3" begin="0s"></animate></circle><circle cx="16" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="50" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate></circle><circle cx="84" cy="50" r="10" ><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate></circle><circle cx="16" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate></circle></svg>
      </span>
    </button>
  );
}

export default InferenceItem;
