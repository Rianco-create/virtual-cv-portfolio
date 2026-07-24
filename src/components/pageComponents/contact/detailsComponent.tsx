import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineLanguage,
} from "react-icons/hi2";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Details() {
  const contactDetails = [
    {
      title: "Email",
      value: "rheederrianco22@gmail.com",
      icon: HiOutlineEnvelope,
      link: "mailto:rheederrianco22@gmail.com",
    },
    {
      title: "Phone",
      value: "074 785 0552",
      icon: HiOutlinePhone,
      link: "tel:+27747850552",
    },
    {
      title: "Location",
      value: "Potchefstroom, North West",
      icon: HiOutlineMapPin,
    },
    {
      title: "Working hours",
      value: "Mon–Fri · 09:00–18:00 SAST",
      icon: HiOutlineClock,
    },
    {
      title: "Languages",
      value: "English · Afrikaans",
      icon: HiOutlineLanguage,
    },
    {
      title: "Website",
      value: "rianco.jwlisting.co.za",
      icon: HiOutlineGlobeAlt,
      link: "https://rianco.jwlisting.co.za",
    },
  ];

  return (
    <main className="flex w-full flex-col gap-2">
      <p className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
        Get in touch
      </p>

      <h1 className="text-4xl font-bold leading-[1.15] text-[#F7F5EF] sm:text-5xl">
        Let&apos;s{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          connect
        </span>
      </h1>

      <p className="max-w-2xl py-4 text-sm leading-7 text-slate-300 sm:text-base">
        Prefer to reach out directly? Here are the best ways to get hold of me.
        I read every message and typically respond within one business day.
      </p>

      <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;

          const cardContent = (
            <>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400">
                <Icon className="h-5 w-5 text-slate-950" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {detail.title}
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F7F5EF]">
                  {detail.value}
                </p>
              </div>
            </>
          );

          return detail.link ? (
            <a
              key={detail.title}
              href={detail.link}
              target={detail.link.startsWith("http") ? "_blank" : undefined}
              rel={detail.link.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-slate-700 bg-[#262F37] px-4 py-4 shadow-xl transition hover:border-emerald-400"
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={detail.title}
              className="flex items-center gap-4 rounded-xl border border-slate-700 bg-[#262F37] px-4 py-4 shadow-xl"
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      <h2 className="mt-4 text-xl font-bold text-[#F7F5EF]">
        Elsewhere on the web
      </h2>

      <div className="flex flex-wrap gap-3 py-5">
        <a
          href="https://www.linkedin.com/in/rianco-rheeder-7b2434335"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#262F37] px-4 py-3 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-white"
        >
          <FaLinkedinIn className="text-emerald-400" />
          LinkedIn
        </a>

        <a
          href="https://github.com/Rianco-create"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#262F37] px-4 py-3 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-white"
        >
          <FaGithub className="text-emerald-400" />
          GitHub
        </a>
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-[#262F37] px-6 py-6">
        <h2 className="text-lg font-bold text-[#F7F5EF]">
          Currently
        </h2>

        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
          I am currently open to graduate opportunities, collaborative
          projects, and opportunities that will help me grow as an Information
          Technology professional.
        </p>
      </div>
    </main>
  );
}