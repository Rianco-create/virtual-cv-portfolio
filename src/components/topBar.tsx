import { Link } from "react-router-dom";

function TopBar() {
  return (
  <header className="flex items-center justify-between bg-red-500 px-6 py-4 text-white">
    <div>
      <p>Hello, Rianco!</p>
    </div>

    <nav>
        <Link
          to="/Projects"
        //   activeProps={{ className: "text-blue-600 font-medium" }}
        >
          Projects
        </Link>
    </nav>
  </header>
);
}

export default TopBar;