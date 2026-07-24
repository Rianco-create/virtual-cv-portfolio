import AviationSection from "../components/pageComponents/about/aviationSection";
import Future from "../components/pageComponents/about/future";
import Intro from "../components/pageComponents/about/intro";
import Qualities from "../components/pageComponents/about/qualities";
import TechS from "../components/pageComponents/about/techSection";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Intro */}
      <section className="px-5 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <Intro />
        </div>
      </section>

      {/* Technology */}
      <section
        id="technology"
        className="scroll-mt-20 px-5 sm:px-8 lg:px-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          <TechS />
        </div>
      </section>

      {/* Aviation */}
      <section className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <AviationSection />
        </div>
      </section>

      {/* Qualities */}
      <section className="px-5 py-5 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <Qualities />
        </div>
      </section>

      {/* Future */}
      <section className="px-5 py-5 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <Future />
        </div>
      </section>
    </main>
  );
}