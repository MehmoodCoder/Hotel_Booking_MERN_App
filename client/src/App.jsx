import Navbar from "../src/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/Routes/Home";
import Footer from "./components/Footer";
import AllRooms from "./Routes/AllRooms";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AllRooms/>} path="/rooms"/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
