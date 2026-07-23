import TechWheel from "../techWheel";
import { SlDiamond } from "react-icons/sl";

export default function Intro() {
  return (
      <main className="bg-slate-950 flex flex-col md:flex-row w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 lg:gap-0 lg:px-4 justify-center items-center gap-12 md:gap-8">

        {/* greeting */}
        <div className="w-full max-w-xl md:w-1/2 text-center md:text-left ">
            <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">About Me</p>
            <h1 className="text-4xl font-bold leading-[1.15] text-[#F7F5EF] md:text-6xl">
                Hi , I'm  <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Rianco</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Rheeder</span>
            </h1>


            <p className="text-slate-300 text-base leading-7 sm:text-lg sm:leading-8 py-8">
                A final-year <span className="font-bold">BSc Information Technology</span>  student with a passion for programming, 
                web development, and creating practical digital solutions. I enjoy solving problems, 
                learning new technologies, and turning ideas into functional websites and applications.
            </p>

            <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400  py-3 px-3 border-4 rounded-2xl font-semibold tracking-wide text-slate-950 mx-auto md:mx-0">
                Discover more  <SlDiamond/>
            </button>
        </div>

       {/* wheel */}
         <div className="w-full max-w-xl md:w-1/2">
            <TechWheel />
         </div>

      </main>
  );
}