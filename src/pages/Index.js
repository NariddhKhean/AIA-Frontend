import { Link } from 'react-router-dom';

const Index = () => {

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

      <div className="snap-center h-screen relative flex flex-row justify-center items-center">
        <div className="basis-1/3 text-center">
          <img className="mx-auto" width={80} src={process.env.PUBLIC_URL + "/logo-white.png"} />
          <div className="py-8 font-sans font-black text-xl tracking-widest">ABOUT THE STUDIO</div>
          <img className="mx-auto" width={230} src={process.env.PUBLIC_URL + "/logo-iaac.png"}/>
        </div>
        <div className="basis-1/3 font-light tracking-wide">
          Visualization as a tool for analysis, exploration, and communication has become a driving force in the task of unravelling the complex urban fabrics that form our cities. This platform tries to bring together urban visualization projects from around the globe.
        </div>
        <svg className="absolute bottom-12 animate-bounce w-10 h-10 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
      </div>

      <div className="snap-center h-screen flex items-center bg-gray-100">
        <div className="w-screen text-center">[to do: "dynamic(ish) map of vienna"]</div>
      </div>

      <div id="groups" style={{backgroundImage: "url(/bg-vienna-black.png)"}} className="bg-cover bg-center snap-center h-screen p-24 flex justify-center items-center bg-black">

        <div className="flex-shrink grid grid-cols-3 grid-rows-3 gap-4">

          <Link className="relative w-48 h-48 text-center" to="/g1">
            <svg className="absolute top-0 left-0 w-full h-full text-[#fb923ca0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">AI-UBREM</div>
              <div className="text-xs font-mono font-black tracking-wide">~/sync/1</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g2">
            <svg className="absolute top-0 left-0 w-full h-full text-[#fde047a0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">Bike Mapper</div>
              <div className="text-xs font-mono font-black tracking-wide">~/sync/2</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g3">
            <svg className="absolute top-0 left-0 w-full h-full text-[#d9f99da0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">A.EYE</div>
              <div className="text-xs font-mono font-black tracking-wide">~/sync/3</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g4">
            <svg className="absolute top-0 left-0 w-full h-full text-[#fb7185a0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">Karate Club</div>
              <div className="text-xs font-mono font-black tracking-wide">~/sync/4</div>
            </div>
          </Link>

          <div></div>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g5">
            <svg className="absolute top-0 left-0 w-full h-full text-[#67e8f9a0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">Game of Green</div>
              <div className="text-xs font-mono font-black tracking-wide">~/async/1</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g6">
            <svg className="absolute top-0 left-0 w-full h-full text-[#d8b4fea0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">Urban Voids</div>
              <div className="text-xs font-mono font-black tracking-wide">~/async/2</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g7">
            <svg className="absolute top-0 left-0 w-full h-full text-[#a5b4fca0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">Vivarium</div>
              <div className="text-xs font-mono font-black tracking-wide">~/async/3</div>
            </div>
          </Link>

          <Link className="relative w-48 h-48 text-center align-middle" to="/g8">
            <svg className="absolute top-0 left-0 w-full h-full text-[#6ee7b7a0]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
            <div className="relative flex flex-col h-full text-white place-content-center">
              <div className="italic text-lg tracking-wide">The AirBnB Effect</div>
              <div className="text-xs font-mono font-black tracking-wide">~/async/4</div>
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Index;
