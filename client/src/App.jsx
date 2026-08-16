import Navbar from "../src/components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/Routes/Home";

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <>
      {!isOwnerPath && <Navbar/>}
      <div className="min-h-[70vh]">
        <Routes >
          <Route element={<Home/>} path="/" />
        </Routes>
      </div>
    </>
  )
}

export default App;
