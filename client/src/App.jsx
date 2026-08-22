import Navbar from "../src/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/Routes/Home";
import Footer from "./components/Footer";
import AllRooms from "./Routes/AllRooms";
import RoomDetails from "./Routes/RoomDetails";
import MyBookings from "./Routes/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./Routes/OwnerRoutes/Layout";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AllRooms />} path="/rooms" />
          <Route element={<RoomDetails />} path="/rooms/:id" />
          <Route element={<MyBookings />} path="/my-bookings" />
          <Route element={<Layout />} path="/owner" />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
