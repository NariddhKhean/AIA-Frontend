import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const group = 1;

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

      <div className="snap-center h-screen relative flex flex-row justify-center items-center">
        <div className="basis-1/3 text-center place-items-center">
          <img className="mx-auto" width={120} src={process.env.PUBLIC_URL + "/g" + group + "/group-logo.png"}/>
          <div className="pb-8 pt-16 font-sans font-black text-xl tracking-widest">AI-UBREM</div>
          <img className="mx-auto" width={230} src={process.env.PUBLIC_URL + "/logo-iaac.png"}/>
        </div>
        <div className="basis-1/3 font-light tracking-wide">
          [to do: group description]
        </div>
        <svg className="absolute bottom-12 animate-bounce w-10 h-10 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </div>

      <div style={{backgroundImage: "url(/bg-vienna-white.png)"}} className="bg-cover bg-center snap-center h-screen flex items-center bg-black">
        <div className="w-screen text-center">[to do: "animated gif of the project"]</div>
      </div>

      <div className="relative snap-center h-screen flex items-center">
        <div className="h-screen w-screen px-8 pt-8 pb-48">
          <img className="object-contain w-full h-full" src={process.env.PUBLIC_URL + "/g" + group + "/methodology.png"}/>
        </div>
        <Link to={"/g" + group + "/map"}>
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#fc9b47] to-[#dac710] group-hover:from-[#fc9b47] group-hover:to-[#dac710] hover:text-white">
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
