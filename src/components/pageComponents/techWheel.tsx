import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export default function TechWheel() {
  const iconContainer =
    "absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-50 shadow-md md:h-12 md:w-12";

  return (
    <div className="flex items-center justify-center">
      <div className="tech-wheel-spin rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-600 p-1">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-slate-950 md:h-80 md:w-80">
          {/* React */}
          <div
            className={`${iconContainer} left-1/2 top-0 -translate-x-1/2 -translate-y-1/2`}
          >
            <FaReact className="text-xl text-cyan-500 md:text-2xl" />
          </div>

          {/* HTML */}
          <div
            className={`${iconContainer} right-0 top-1/2 translate-x-1/2 -translate-y-1/2`}
          >
            <FaHtml5 className="text-xl text-blue-600 md:text-2xl" />
          </div>

          {/* CSS */}
          <div
            className={`${iconContainer} bottom-0 right-1/2 translate-x-1/2 translate-y-1/2`}
          >
            <FaCss3Alt className="text-xl text-indigo-500 md:text-2xl" />
          </div>

          {/* Python */}
          <div
            className={`${iconContainer} bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2`}
          >
            <FaPython className="text-xl text-sky-600 md:text-2xl" />
          </div>

          {/* Tailwind CSS */}
          <div
            className={`${iconContainer} right-8 top-4 translate-x-1/2 md:right-11 md:top-6`}
          >
            <SiTailwindcss className="text-xl text-cyan-400 md:text-2xl" />
          </div>

          {/* JavaScript */}
          <div
            className={`${iconContainer} left-8 top-4 -translate-x-1/2 md:left-11 md:top-6`}
          >
            <SiJavascript className="text-xl text-blue-500 md:text-2xl" />
          </div>

          {/* TypeScript */}
          <div
            className={`${iconContainer} bottom-4 right-8 translate-x-1/2 md:bottom-6 md:right-11`}
          >
            <SiTypescript className="text-xl text-indigo-600 md:text-2xl" />
          </div>

          {/* Java */}
          <div
            className={`${iconContainer} bottom-4 left-8 -translate-x-1/2 md:bottom-6 md:left-11`}
          >
            <FaJava className="text-xl text-sky-700 md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}