import profilePic from "../content/willian-souza-p5BoBF0XJUA-unsplash.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-16">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur-md md:flex-row md:p-14">
        
        {/* Profile image */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 opacity-30 blur-xl" />

            <img
              className="relative h-80 w-72 rounded-3xl border-4 border-white object-cover shadow-xl md:h-96 md:w-80"
              src={profilePic}
              alt="Rianco Rheeder"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Welcome to my portfolio
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Rianco!
            </span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            I’m a final-year BSc Information Technology student with a passion
            for programming and web development. I enjoy turning ideas into
            practical digital solutions, solving problems, and occasionally
            convincing my code to work after several cups of coffee. My goal is
            to continue growing as an IT professional and, one day, establish
            my own technology company.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View My Projects
            </button>

            <button
              type="button"
              className="rounded-xl border border-blue-200 bg-white/80 px-6 py-3 font-medium text-blue-700 shadow-sm transition duration-300 hover:border-blue-400 hover:bg-blue-50"
            >
              Download CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}