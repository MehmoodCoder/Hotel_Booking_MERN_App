import Navbar from "../src/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/Routes/Home";
import Footer from "./components/Footer";
import RoomDetails from "./Routes/RoomDetails";
import MyBookings from "./Routes/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./Routes/OwnerRoutes/Layout";
import Dashboard from "./Routes/OwnerRoutes/Dashboard";
import AddRoom from "./Routes/OwnerRoutes/AddRoom";
import ListRooms from "./Routes/OwnerRoutes/ListRooms";
import AllRooms from "./Routes/AllRooms";
import { Toaster } from "react-hot-toast";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AllRooms />} path="/rooms" />
          <Route element={<RoomDetails />} path="/rooms/:id" />
          <Route element={<MyBookings />} path="/my-bookings" />
          <Route element={<Layout />} path="/owner">
            <Route index element={<Dashboard />} />
            <Route element={<AddRoom />} path="add-room" />
            <Route element={<ListRooms />} path="list-rooms" />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
