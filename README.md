# 2022 AIA Platform Frontend

## Description

The objective of this project is to develop a full stack web platform for the _AI in Architecture_ studio, whereby the students can display both their ML models and results, and deploy them onto whichever cloud technology IAAC so chooses.

### Frontend

[_*Repo*_](https://github.com/NariddhKhean/AIA-Frontend)

The frontend will take the form of a website, with a static landing page containing a description of the studio, student-provided “about” pages that will describe the work of each group, and interactive Mapbox maps that will visualise the student’s data layers. Furthermore, on the Mapbox interface, users will have access to a range of student-developed liv models (running on the developed backend server described below), where live ML models can be called upon to return inferences, also visualised on the map.

Built using _React_, and styled with _Tailwind_, the frontend will house the interactive _Mapbox_ interface, as well as static pages for a description of the studio and of each group. Other common frontend web technology, such as _HTML_ and _CSS_, will also be used.

### Backend

[_*Repo*_](https://github.com/NariddhKhean/AIA-Backend)

The standalone backend server will act as a REST API to handle fetch requests from the aforementioned frontend. This backend server will host all data and models provided by the students, including static data layers in the form of GeoJSONs and Mapbox Style JSONs, as well as student-trained ML models, to respond to live inference requests.

Containerised using _Docker_ and managed with _Docker-compose_, the _Python_-based _Flask_ web server will use _Gunicorn_ to serve the student’s static files (*.geojson and style.json files), ML models, and pre-/post-processing scripts (_Python_ functions) over a REST API. An _NGINX_ load balancer will be placed in front of the server. The backend is where the student groups will be uploading their data layers, _Mapbox_ styles, and ML model pipelines, so a specification for how this will be used will also be developed and provided.

## Getting Started

To start the frontend server locally, you'll need [_npm_](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Then, clone this repo, create an environment variables file called `.env`, and then add your _Mapbox_ API key.

```fish
echo "<YOUR MAPBOX API KEY HERE>" > .env
```

Then, install the dependencies and then start.

```fish
npm install
npm start
```

