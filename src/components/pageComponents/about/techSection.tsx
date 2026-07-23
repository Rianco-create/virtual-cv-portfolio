import { SlCompass } from "react-icons/sl";

export default function TechS() {

    const techStack =[
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "HTML",
        "CSS",
        "Python",
    ];
  return (
      <main className="flex flex-col justify-items gap-2">
        <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Passion for Technology</p>
        <h1 className="text-[#F7F5EF] text-4xl font-bold leading-[1.15]">
            Modern, responsive, human-friendly 
            <br className="hidden sm:block"/>
            <span> software</span>
        </h1>

        <div className=" flex flex-col lg:flex-row gap-6 py-5">
            <div className="bg-[#262F37] w-full lg:w-3/5 px-5 py-5 sm:px-8 rounded-2xl shadow-xl">
                 <p className="text-slate-300 text-sm leading-6 sm:text-base sm:leading-7 flex">
                    I enjoy creating modern, responsive, and user-friendly digital solutions. 
                    Whether developing a polished landing page or a complete full-stack application, I focus on 
                    clean code, intuitive user experiences, and delivering reliable solutions that perform 
                    effectively in real-world environments.
                </p>

                <p className="py-7 text-slate-300 text-sm leading-6 sm:text-base sm:leading-7 ">
                    Along the way I've built experience with the following technologies:
                </p>

                <div className="flex flex-wrap gap-3">
                    {techStack.map((techStacks) =>(
                        <span
                          key={techStacks}
                          className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-2 py-1 text-slate-950"
                        >
                            {techStacks}
                        </span>  
                    ))}

                </div>
            </div>
                    
            <div className="bg-[#262F37] w-full lg:w-2/5 px-5 py-5 sm:px-8 rounded-2xl shadow-xl border-4 border-teal-400" >

                <SlCompass className="h-10 w-10 text-emerald-400"/>
                 <p className="text-slate-300 text-sm leading-6 sm:text-base sm:leading-7 py-2">
                        How I approach a build
                 </p>
                 
                 <ul className="list-disc py-3 text-slate-300 text-sm leading-6 sm:text-base sm:leading-7 ">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></span>
                        <span>Understand the problem before the code.</span>
                        </li>

                        <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2  rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></span>
                        <span>Design for clarity, then for delight.</span>
                        </li>

                         <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></span>
                        <span>Ship, learn, refine — repeat.</span>
                        </li>
                      
                 </ul>
                        
                    
            </div>

        </div>
      </main>
  );
}