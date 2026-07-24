import profilePic from "../content/ppic.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 rounded-3xl border border-slate-700 bg-[#262F37] p-8 shadow-2xl md:flex-row md:p-14">
        
        {/* Profile image */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 opacity-30 blur-xl" />

            <img
              className="relative h-80 w-72 rounded-3xl border-4 border-slate-700 object-cover shadow-xl md:h-96 md:w-80"
              src={profilePic}
              alt="Rianco Rheeder"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <p className="mb-3 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.25em] text-transparent">
            Welcome to my portfolio
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#F7F5EF] md:text-5xl">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Rianco!
            </span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            I’m a final-year BSc Information Technology student with a passion
            for programming and web development. I enjoy turning ideas into
            practical digital solutions, solving problems, and occasionally
            convincing my code to work after several cups of coffee. My goal is
            to continue growing as an IT professional and, one day, establish
            my own technology company.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Link
                  to="/Projects"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  View My Projects
                </Link>

            <a
              href="/Rianco_Rheeder_FlowCV_Resume_2026-07-24.pdf"
              download
              className="rounded-xl border border-teal-400 bg-transparent px-6 py-3 font-semibold text-[#F7F5EF] shadow-sm transition duration-300 hover:bg-teal-400/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}