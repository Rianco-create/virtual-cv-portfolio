import { useState } from "react";
import jwLogo from "../../content/jwLogo.png";
import endura from "../../content/Endura.png";
import jwd from "../../content/JWD.png";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  image: String;
}

export default function ProjectSlider() {
  const [index, setIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      name: "JulukaWorx Directory",
      description:
        "JulukaWorx Directory is a business directory website that helps users discover trusted, high-quality local businesses across different categories. Businesses can submit their details for review and, once approved, be listed on the platform so that potential customers can find their services more easily. The website was developed using Vite, React, TypeScript and Tailwind CSS",
      link: "https://jwlisting.co.za/",
      image: jwd,
    },
    {
      id: 3,
      name: "Endura Construction",
      description:
        "Endura Construction is a professional business website developed for a construction client to showcase the company’s services, experience and completed work. The website provides potential customers with clear information about the business and makes it easy for them to request quotations or get in touch. It was designed with a modern, responsive and user-friendly layout to ensure a professional experience across desktop and mobile devices.",
      link: "https://www.enduraconstruction.co.za/",
      image: endura,
    },
    {
      id: 2,
      name: "JulukaWorx",
      description:
        "JulukaWorx Directory is an online platform designed to help users discover local businesses and services across a variety of categories. The website allows businesses to showcase their services, contact information and other important details, making it easier for potential customers to find and connect with them. The platform was developed using Vite, React, TypeScript and Tailwind CSS, with a focus on responsive design and a simple, user-friendly browsing experience.",
      link: "https://www.julukaworx.com",
      image: jwLogo,
    },
  ];

  const handleNext = () => {
    setIndex(projects.length - 1 === index ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? projects.length - 1 : index - 1);
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-10 overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 md:flex-row md:gap-10 lg:py-16">
      <div>
        <button
          onClick={handlePrev}
          className="rounded-full border border-slate-700 bg-[#262F37] p-3 shadow-md transition duration-300 hover:border-emerald-400 hover:bg-teal-400/10"
        >
          <SlArrowLeft className="text-lg text-emerald-400 sm:text-xl" />
        </button>
      </div>

      <div
        key={projects[index].id}
        className="project-slide w-full max-w-xl rounded-2xl border border-slate-700 bg-[#262F37] p-5 shadow-xl sm:p-6"
      >
        <img
          src={projects[index].image as string}
          alt="Julukaworx"
          className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24 md:mx-0"
        />

        <div className="flex flex-col gap-7">
          <h2 className="text-xl font-bold text-[#F7F5EF] sm:text-2xl">
            {projects[index].name}
          </h2>

          <p className="line-clamp-6 text-sm leading-6 text-slate-300 sm:line-clamp-none sm:text-base sm:leading-7">
            {projects[index].description}
          </p>

          <a
            className="self-start rounded-xl border border-teal-400 bg-transparent px-6 py-3 font-semibold text-[#F7F5EF] shadow-sm transition duration-300 hover:bg-teal-400/10"
            href={projects[index].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>

      <div>
        <button
          onClick={handleNext}
          className="rounded-full border border-slate-700 bg-[#262F37] p-3 shadow-md transition duration-300 hover:border-emerald-400 hover:bg-teal-400/10"
        >
          <SlArrowRight className="text-lg text-emerald-400 sm:text-xl" />
        </button>
      </div>
    </main>
  );
}