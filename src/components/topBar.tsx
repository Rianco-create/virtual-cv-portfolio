import { Link } from "react-router-dom";

function TopBar() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 px-6 py-4 text-white">
      <div>
        <p>Hello, Rianco!</p>
      </div>

      <nav className="flex items-center gap-10">
        <Link to="/Projects">Projects</Link>
        <Link to="/Cv">Curriculum Vitae</Link>
        <Link to="/About">About</Link>
      </nav>

      <div>
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Hire Me !
        </button>
      </div>
    </header>
  );
}

export default TopBar;