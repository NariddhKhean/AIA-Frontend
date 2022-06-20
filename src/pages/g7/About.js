import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const group = 7;

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
          <div className="pb-8 font-sans font-extralight text-3xl tracking-widest">URBAN VOIDS</div>
          <div className="text-xl">[to do: group description]</div>
        </div>
        <svg className="absolute bottom-12 animate-bounce w-10 h-10 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </div>

      <div style={{backgroundImage: "url(/bg-vienna-white.png)"}} className="relative bg-cover bg-center snap-center h-screen flex items-center bg-black">
        <div className="w-screen text-center">[to do: "animated gif of the project"]</div>
        <div className="absolute top-24 left-24 right-24 bottom-24">
          <div className="w-1/3 h-full overflow-auto">
            <div className="p-8 bg-[#FFFFFF80] text-lg">We assume that urban quality in Vienna may be distributed unevenly.  One of the quality factors is the availability of basic micro scale services.<br/><br/>We would like to work on urban quality improvement for the areas with a level of service lower than average.</div>
          </div>
    </div>
      </div>

      <div className="relative snap-center h-screen flex items-center">
        <div className="h-screen w-screen p-48 pt-24">
          <img className="object-contain w-full h-full" src={process.env.PUBLIC_URL + "/g" + group + "/methodology.png"}/>
        </div>
        <Link to={"/g" + group + "/map"}>
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#205195] to-[#bb86c4] group-hover:from-[#205195] group-hover:to-[#bb86c4] hover:text-white">
            <span className="relative px-5 py-2.5 font-bold tracking-widest transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              INTERACTIVE MAP
            </span>
          </button>
        </Link>
      </div>

    </div>
  )
}

export default About;
