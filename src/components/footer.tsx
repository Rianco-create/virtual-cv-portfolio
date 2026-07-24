import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 bg-[#1b2229] px-5 py-10 text-[#F7F5EF] sm:px-8 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold">
            Rianco{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Rheeder
            </span>
          </h2>

          <p className="mt-2 text-sm font-medium text-emerald-400">
            Web Developer
          </p>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            A final-year BSc Information Technology student passionate about
            programming, web development, and creating practical digital
            solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold">Quick links</h2>

          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
            <Link to="/" className="transition hover:text-emerald-400">
              Home
            </Link>

            <Link
              to="/Projects"
              className="transition hover:text-emerald-400"
            >
              Projects
            </Link>

            <Link to="/About" className="transition hover:text-emerald-400">
              About me
            </Link>

            <Link to="/Contact" className="transition hover:text-emerald-400">
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact and social links */}
        <div>
          <h2 className="text-lg font-semibold">Connect with me</h2>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a
              href="mailto:rheederrianco22@gmail.com"
              className="flex items-center gap-3 transition hover:text-emerald-400"
            >
              <HiOutlineEnvelope className="h-5 w-5 text-emerald-400" />
              rheederrianco22@gmail.com
            </a>

            <a
              href="tel:+27747850552"
              className="flex items-center gap-3 transition hover:text-emerald-400"
            >
              <HiOutlinePhone className="h-5 w-5 text-emerald-400" />
              074 785 0552
            </a>

            <div className="flex items-center gap-3">
              <HiOutlineMapPin className="h-5 w-5 text-emerald-400" />
              Potchefstroom, North West
            </div>

            <a
              href="https://rianco.jwlisting.co.za"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-emerald-400"
            >
              <HiOutlineGlobeAlt className="h-5 w-5 text-emerald-400" />
              rianco.jwlisting.co.za
            </a>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href="https://github.com/Rianco-create"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Rianco Rheeder's GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#262F37] text-emerald-400 transition hover:-translate-y-1 hover:border-emerald-400"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/rianco-rheeder-7b2434335"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Rianco Rheeder's LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#262F37] text-emerald-400 transition hover:-translate-y-1 hover:border-emerald-400"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>

            <a
              href="mailto:rheederrianco22@gmail.com"
              aria-label="Send Rianco Rheeder an email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#262F37] text-emerald-400 transition hover:-translate-y-1 hover:border-emerald-400"
            >
              <HiOutlineEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-3 border-t border-slate-700 pt-6 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {currentYear} Rianco Rheeder. All rights reserved.</p>

        <p>Built with React, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}