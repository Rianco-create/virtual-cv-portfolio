import { useState } from "react";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between border-b border-slate-700 bg-[#1b2229] px-6 py-4 text-[#F7F5EF]">
      {/* Mobile burger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-slate-700 bg-[#262F37] p-2 text-emerald-400 transition hover:border-emerald-400 md:hidden"
        aria-label="Open navigation menu"
      >
        <SlMenu className="h-6 w-6" />
      </button>

      {/* Greeting */}
      <div className="hidden md:block">
        <p className="font-medium">Hello, Rianco!</p>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-10 md:flex">
        <Link
          to="/"
          className="transition hover:text-emerald-400"
        >
          Home
        </Link>

        <Link
          to="/Projects"
          className="transition hover:text-emerald-400"
        >
          Projects
        </Link>

        <Link
          to="/About"
          className="transition hover:text-emerald-400"
        >
          About me
        </Link>
      </nav>

      {/* Hire Me button */}
      <div>
        <button
          type="button"
          className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Hire Me!
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="absolute left-0 top-full z-50 w-full border-b border-slate-700 bg-[#1b2229] px-6 py-5 shadow-xl md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-emerald-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Projects"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-emerald-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                onClick={() => setIsOpen(false)}
                className="block transition hover:text-emerald-400"
              >
                About me
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default TopBar;