import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const group = 2;

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
          <div className="pb-8 font-sans font-extralight text-3xl tracking-widest">AI-UBREM</div>
          <div className="text-xl">Do you know your home contributes to 34% of Vienna Energy consumption?</div>
        </div>
        <svg className="absolute bottom-12 animate-bounce w-10 h-10 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </div>

      <div style={{backgroundImage: "url(/bg-vienna-white.png)"}} className="relative bg-cover bg-center snap-center h-screen flex items-center bg-black">
        <div className="w-screen text-center">[to do: "animated gif of the project"]</div>
        <div className="absolute top-24 left-24 right-24 bottom-24">
          <div className="w-1/3 h-full overflow-auto">
            <div className="p-8 bg-[#FFFFFF80] text-lg">Urban Building Energy modeling (UBEM) demonstrated a reliable tool to visualize city fabric and its complex systems use patterns. This tool enables visualizing and prediction of energy and solar potential of buildings as an <span className="font-bold">AI-based UBREM</span>. U-value is an index that measure building envelop/ structure heat transmittance. The lower the u-value shows better insulation, thus decreases your building energy consumption. Use the sliders to alter u-values for walls, windows, roof and basement. A single good insulation layer adding to your wall can decrease building energy consumption by almost 30%. Hence, building energy demand (BED) can be met using PV cells on roof top, the PV potential can even exceed BED and support neighboring units manifesting a Positive Energy District (PED) with renewable energy (RE).</div>
          </div>
        </div>
      </div>

      <div className="relative snap-center h-screen flex items-center">
        <div className="h-screen w-screen p-48 pt-24">
          <img className="object-contain w-full h-full" src={process.env.PUBLIC_URL + "/g" + group + "/methodology.png"}/>
        </div>
        <Link to={"/g" + group + "/map"}>
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#dac710] to-[#cee741] group-hover:from-[#dac710] group-hover:to-[#cee741] hover:text-white">
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
