import TechWheel from "../techWheel";
import { SlDiamond } from "react-icons/sl";

export default function Intro() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-12 bg-slate-950 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:gap-8 lg:gap-0 lg:px-4 lg:py-24">
      {/* Greeting */}
      <div className="w-full max-w-xl text-center md:w-1/2 md:text-left">
        <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          About Me
        </p>

        <h1 className="text-4xl font-bold leading-[1.15] text-[#F7F5EF] md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Rianco
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Rheeder
          </span>
        </h1>

        <p className="py-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          A final-year{" "}
          <span className="font-bold">BSc Information Technology</span>{" "}
          student with a passion for programming, web development, and creating
          practical digital solutions. I enjoy solving problems, learning new
          technologies, and turning ideas into functional websites and
          applications.
        </p>

        <a
          href="#technology"
          className="mx-auto flex w-fit items-center gap-2 rounded-2xl border-4 bg-gradient-to-r from-emerald-500 to-teal-400 px-3 py-3 font-semibold tracking-wide text-slate-950 md:mx-0"
        >
          Discover more
          <SlDiamond />
        </a>
      </div>

      {/* Wheel */}
      <div className="w-full max-w-xl md:w-1/2">
        <TechWheel />
      </div>
    </main>
  );
}