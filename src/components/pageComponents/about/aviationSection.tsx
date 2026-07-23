import { SlPlane } from "react-icons/sl";

export default function AviationSection() {
  return (
      <main className="flex flex-col justify-items gap-2">
        <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Passion for Aviation</p>
        <h1 className="text-[#F7F5EF] text-4xl font-bold leading-[1.15]">
            Lessons learned above the clouds.
        </h1>

         <div className=" flex flex-col lg:flex-row gap-6 py-5">
             <div className="bg-[#262F37] w-full lg:w-1/2 px-5 py-5 sm:px-8 rounded-2xl shadow-xl">

                <p className="text-slate-300 text-sm leading-6 sm:text-base sm:leading-7 ">
                    I obtained <span className="font-bold">my pilot's licence in 2022</span>, and completing 
                    my first solo flight was one of the most memorable 
                    achievements of my aviation journey.
                </p>

                <p className="text-slate-300 text-sm leading-6 sm:text-base sm:leading-7  py-3">
                    Aviation has helped me develop confidence, discipline,
                    preparation, focus, responsibility, and the ability to <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">remain calm 
                    under pressure</span>, qualities I bring to every line of code I write.
                </p>

             </div>
                            
            <div className="flex w-full flex-col items-center justify-center rounded-2xl border-4 border-teal-400 bg-[#262F37] px-5 py-5 text-center shadow-xl sm:px-8 lg:w-1/2">
                <SlPlane className="h-10 w-10 text-emerald-400"/>

                <p className="text-3xl font-bold leading-[1.15] text-[#F7F5EF] "><span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">"</span>Powered by passion — and a 
                   little aviation fuel.<span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">"</span></p>
      
            </div>
        
        </div>

        
      </main>
  );
}