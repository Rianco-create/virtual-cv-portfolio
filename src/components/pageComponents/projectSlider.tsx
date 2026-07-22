import { useState } from "react";
import jwLogo from "../../content/jwLogo.png"
import endura from "../../content/Endura.png" ;
import jwd from "../../content/JWD.png" ;
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


interface Project{
    id:number;
    name:string;
    description:string;
    link:string;
    image:String;
}

export default function ProjectSlider() {

    const [index, setIndex] = useState(0);

    const projects: Project[] = [

        {id: 1, name: "JulukaWorx Directory", description: "JulukaWorx Directory is a business directory website that helps users discover trusted, high-quality local businesses across different categories. Businesses can submit their details for review and, once approved, be listed on the platform so that potential customers can find their services more easily. The website was developed using Vite, React, TypeScript and Tailwind CSS", link:"https://jwlisting.co.za/",image: jwd},
        {id: 3, name: "Endura Construction", description: "Endura Construction is a professional business website developed for a construction client to showcase the company’s services, experience and completed work. The website provides potential customers with clear information about the business and makes it easy for them to request quotations or get in touch. It was designed with a modern, responsive and user-friendly layout to ensure a professional experience across desktop and mobile devices.", link: "https://www.enduraconstruction.co.za/",image: endura},
        {id: 2, name: "JulukaWorx", description: "JulukaWorx Directory is an online platform designed to help users discover local businesses and services across a variety of categories. The website allows businesses to showcase their services, contact information and other important details, making it easier for potential customers to find and connect with them. The platform was developed using Vite, React, TypeScript and Tailwind CSS, with a focus on responsive design and a simple, user-friendly browsing experience.", link: "https://www.julukaworx.com",image: jwLogo},
    ];

    const handleNext = () => {
        setIndex(projects.length -1 === index ? 0: index + 1) 
    }

    const handlePrev = () => {
        setIndex(index === 0 ? projects.length - 1 : index - 1);
    }


return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10 sm:px-6 sm:py-14 lg:py-16 flex flex-row  justify-center items-center gap-10  overflow-hidden md:flex-row md:gap-10">


        <div >
            <button onClick={handlePrev} className="rounded-full bg-white/80 p-3 shadow-md transition duration-300 hover:bg-blue-50">
                <SlArrowLeft className="text-blue-600 text-lg sm:text-xl" />
            </button>
        </div>

        <div key={projects[index].id} className="project-slide bg-white rounded-2xl p-6 max-w-xl shadow-xl border border-white/70 w-full max-w-xl p-5 sm:p-6">
            <img src={projects[index].image as string}
            alt="Julukaworx"
            className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24 md:mx-0"  />
            <div className=" flex flex-col gap-7">
                <h2 className="text-xl sm:text-2xl text-slate-900 font-bold">{projects[index].name}</h2>
                <p className="line-clamp-6 text-sm leading-6 text-slate-600 sm:line-clamp-none sm:text-base sm:leading-7">
                    {projects[index].description}
                </p>
            
                <a className="rounded-xl self-start border border-blue-200 bg-white/80 px-6 py-3 font-medium text-blue-700 shadow-sm transition duration-300 hover:border-blue-400 hover:bg-blue-50" href={projects[index].link} target="_blank" rel="noopener noreferrer self-center md:self-start" >
                View Project
                </a>
            
            </div>  
        </div>

        <div >
            <button onClick={handleNext} className="rounded-full bg-white/80 p-3 shadow-md transition duration-300 hover:bg-blue-50">
                <SlArrowRight className="text-blue-600 text-lg sm:text-xl" />
            </button>
        </div>

      </main>
);
    
}