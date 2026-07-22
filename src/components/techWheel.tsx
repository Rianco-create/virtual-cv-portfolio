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
    "absolute flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-50 shadow-md";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="tech-wheel-spin rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-600 p-1">
        <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white">
          {/* React */}
          <div
            className={`${iconContainer} left-1/2 top-0 -translate-x-1/2 -translate-y-1/2`}
          >
            <FaReact className="text-2xl text-cyan-500" />
          </div>

          {/* HTML */}
          <div
            className={`${iconContainer} right-0 top-1/2 translate-x-1/2 -translate-y-1/2`}
          >
            <FaHtml5 className="text-2xl text-blue-600" />
          </div>

          {/* CSS */}
          <div
            className={`${iconContainer} bottom-0 right-1/2 translate-x-1/2 translate-y-1/2`}
          >
            <FaCss3Alt className="text-2xl text-indigo-500" />
          </div>

          {/* Python */}
          <div
            className={`${iconContainer} bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2`}
          >
            <FaPython className="text-2xl text-sky-600" />
          </div>

          {/* Tailwind CSS */}
          <div
            className={`${iconContainer} right-11 top-6 translate-x-1/2`}
          >
            <SiTailwindcss className="text-2xl text-cyan-400" />
          </div>

          {/* JavaScript */}
          <div
            className={`${iconContainer} left-11 top-6 -translate-x-1/2`}
          >
            <SiJavascript className="text-2xl text-blue-500" />
          </div>

          {/* TypeScript */}
          <div
            className={`${iconContainer} bottom-6 right-11 translate-x-1/2`}
          >
            <SiTypescript className="text-2xl text-indigo-600" />
          </div>

          {/* Java */}
          <div
            className={`${iconContainer} bottom-6 left-11 -translate-x-1/2`}
          >
            <FaJava className="text-2xl text-sky-700" />
          </div>
        </div>
      </div>
    </div>
  );
}