import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const group = 1;

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

      <div className="snap-center h-screen relative flex flex-row justify-center items-center">
        <div className="basis-1/3">
          <div className="flex justify-center">
            <Link to="/#groups">
              <img className="py-4" width={200} src={process.env.PUBLIC_URL + "/g" + group + "/group-logo.png"}/>
            </Link>
          </div>
          <div className="flex justify-center">
            <img className="py-4" width={200} src={process.env.PUBLIC_URL + "/logo-iaac.png"}/>
          </div>
        </div>
        <div className="basis-1/3 font-light tracking-wide">
          <div className="pb-8 font-sans font-extralight text-3xl tracking-widest">BIKE MAPPER</div>
          <div className="text-xl">Designed for cyclists seeking to customize their bike journey, <span className="font-bold">BikeMapper</span> will propose the optimal route based on user preferences and display the properties of each street.</div>
        </div>
        <svg className="absolute bottom-12 animate-bounce w-10 h-10 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </div>

      <div className="snap-center h-screen relative flex flex-row justify-center items-center">
        <div className="basis-1/3 pl-24 pr-6 font-light tracking-wide text-right">
          <div className="text-lg"><span className="font-bold">BikeMapper</span> responds to the lack of bike mapping applications available. Designed for cyclists seeking to customize their bike journey based on road safety, road quality, lighting, vegetation, and wind speed. <span className="font-bold">BikeMapper</span> will propose the optimal route based on user preferences and display a heat map that displays the properties of each street.</div>
        </div>
        <div className="basis-2/3 h-screen py-16 pr-24 pl-6 text-left">
          <img className="object-scale-down h-full w-full" src={process.env.PUBLIC_URL + "/g" + group + "/preview.gif"}/>
        </div>
      </div>

      <div className="relative snap-center h-screen flex items-center">
        <div className="h-screen w-screen p-48 pt-24">
          <img className="object-contain w-full h-full" src={process.env.PUBLIC_URL + "/g" + group + "/methodology.svg"}/>
        </div>
        <Link to={"/g" + group + "/map"}>
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#fc9b47] to-[#dac710] group-hover:from-[#fc9b47] group-hover:to-[#dac710] hover:text-white">
            <span className="relative px-5 py-2.5 font-bold tracking-widest transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              INTERACTIVE MAP
            </span>
          </button>
        </Link>
      </div>

    </div>
  )
}

export default About;
//<div style={{backgroundImage: "url(/bg-vienna-white.png)"}} className="relative bg-cover bg-center snap-center h-screen flex items-center bg-black">
