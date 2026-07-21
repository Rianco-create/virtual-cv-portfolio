import { Outlet } from "react-router-dom";
import TopBar from "../components/topBar";

export default function RootLayout() {
  return (
    <div>
      <TopBar />
      {/* <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
      </nav> */}
      
      <main style={{ padding: "1rem" }}> 
        <Outlet />
      </main>
    </div>
  );
}