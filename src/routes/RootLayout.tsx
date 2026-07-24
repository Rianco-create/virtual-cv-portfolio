import { Outlet } from "react-router-dom";
import TopBar from "../components/topBar";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <div>
      <TopBar />
      {/* <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
      </nav> */}
      
      <main > 
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
}