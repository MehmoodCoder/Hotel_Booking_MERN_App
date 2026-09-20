import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useParams } from "react-router-dom";

function Loader() {
  const { navigate } = useAppContext();
  const { nextUrl } = useParams();

  useEffect(() => {
    if (nextUrl) {
      const timer = setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [nextUrl, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#121212]">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-800 border-t-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
      </div>
    </div>
  );
}

export default Loader;
