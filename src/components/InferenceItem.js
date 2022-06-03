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

const InferenceItem = (props) => {
  var [loadVisibility, setLoadVisibility] = useState("invisible");
  var [disableButton, setDisableButton] = useState(false);

  const prepareInference = useCallback(() => async () => {
    props.handleSetRunningInference(true);
    props.handleSetArgsList([]);
    props.handleSetArgsVis("hidden");

    var inputArgs = {"model": props.layerID, "group": props.group};

    async function addPointTo(key) {
      await props.map.current.once('click')
        .then(value => {
          inputArgs[key] = value.lngLat;
          document.getElementById("currentArg" + key).innerHTML = "(" + value.lngLat.lng.toFixed(3) + ", " + value.lngLat.lat.toFixed(3) + ")";
        });
    }

    function addSliderTo(key) {
      var slider = document.getElementById("sliderArg" + key);
      inputArgs[key] = slider.value;
      document.getElementById("currentArg" + key).innerHTML = slider.value;
    }

    function addDropdownTo(key) {
      var dropdown = document.getElementById("dropdownArg" + key);
      inputArgs[key] = dropdown.options[dropdown.selectedIndex].value;
    }

    if (props.inputs.length > 0) {

      var argsList = [];
      props.inputs.forEach(input => {
        inputArgs[input["returnID"]] = null;

        if (input["type"] === "mapPoint") {
          argsList.push(
            <div>
              <div className="w-full flex text-sm italic py-1">
                <div className="flex-1 text-left">{input["returnID"]}</div>
                <div className="flex-none text-right" id={"currentArg" + input["returnID"]}>null</div>
              </div>
              <button className="w-full text-gray-900 py-1 rounded bg-gray-200 hover:bg-gray-100" onClick={ async () => await addPointTo(input["returnID"]) }>{input["prompt"]}</button>
            </div>
          );

        } else if (input["type"] === "mapSelectLayer") {
          argsList.push(
            <div>
              <div className="w-full flex text-sm italic py-1">
                <div className="flex-1 text-left">{input["returnID"]}</div>
                <div className="flex-none text-right" id={"currentArg" + input["returnID"]}>null</div>
              </div>
              <div>TO DO</div>
            </div>
          );

        } else if (input["type"] === "uiSlider") {
          inputArgs[input["returnID"]] = input["max"];
          argsList.push(
            <div>
              <div className="w-full flex text-sm italic py-1">
                <div className="flex-1 text-left">{input["prompt"]}</div>
                <div className="flex-none text-right" id={"currentArg" + input["returnID"]}>{inputArgs[input["returnID"]]}</div>
              </div>
              <input className="w-full h-2 accent-slate-400 bg-gray-200 rounded-lg appearance-none cursor-pointer" id={"sliderArg" + input["returnID"]} type="range" onChange={ () => addSliderTo(input["returnID"]) } min={input["min"]} max={input["max"]} />
            </div>
          );

        } else if (input["type"] === "uiDropdown") {
          inputArgs[input["returnID"]] = input["options"][0];
          argsList.push(
            <div>
              <div className="w-full text-sm italic pb-2">{input["prompt"]}</div>
              <select className="w-full form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id={"dropdownArg" + input["returnID"]} onChange={ () => addDropdownTo(input["returnID"]) }>
                {input["options"].map((option, i) => <option key={i}>{option}</option>)}
              </select>
            </div>
          );

        } else {
          throw "Student error: unknown input type: " + input["type"];
        }
      });

      argsList.push(
        <div className="flex">
          <div className="flex-1"></div>
          <button className="flex-none text-sm font-mono font-black text-gray-800 p-2 rounded bg-gray-200 hover:bg-gray-100" onClick={ async () => await fetchInference(inputArgs) }>run</button>
          <div className="flex-1"></div>
        </div>
      );

      props.handleSetArgsList(argsList);
      props.handleSetArgsVis("");
    }

    await fetchInference(inputArgs)

  }, []);

  const fetchInference = async (inputArgs) => {
    if (!Object.values(inputArgs).includes(null)) {
      ReactDOM.flushSync(() => {
        props.handleSetRunningInference(false);
        props.handleSetArgsList([]);
        props.handleSetArgsVis("hidden");

        setLoadVisibility("visible");
        setDisableButton(true);
      });

      await fetch(props.APIURL + '/api', {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputArgs)
      })
        .then(response => response.json())
        .then(geojson => {props.map.current.getSource(props.layerID + 'Source').setData(geojson)});

      ReactDOM.flushSync(() => {
        setLoadVisibility("invisible");
        setDisableButton(false);
      });
    }
  }

  return (
    <div>
      <button className="w-full" disabled={disableButton} onClick={prepareInference()}>
        <span className="flex p-2 text-left text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200">
          <span className="flex-auto ml-3 select-none">{props.layerID}</span>
          <svg className={"w-6 h-6 text-gray-500 " + loadVisibility} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="84" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate><animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#f3f3f3;#a3a3ac;#b8babd;#d8dddf;#f3f3f3" begin="0s"></animate></circle><circle cx="16" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="50" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate></circle><circle cx="84" cy="50" r="10" ><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate></circle><circle cx="16" cy="50" r="10"><animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate><animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate></circle></svg>
        </span>
      </button>
    </div>
  );
}

export default InferenceItem;
