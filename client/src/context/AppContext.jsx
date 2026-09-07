import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/react";
import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://mh56-hotelhub-backend.vercel.app";
axios.defaults.baseURL = backendUrl;

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchCities, setSearchCities] = useState([]);

  const fetchUser = async () => {
    try {
      const token = await getToken();
      if (!token) return;

      const { data } = await axios.get("/api/user/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setIsOwner(data.user?.role === "hotelOwner");
        setSearchCities(data.user?.recentSearchedCities || []);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    } else {
      setIsOwner(false);
    }
  }, [user]);

  const value = {
    currency,
    navigate,
    user,
    getToken,
    isOwner,
    setIsOwner,
    axios,
    showHotelReg,
    setShowHotelReg,
    searchCities,
    setSearchCities,
    backendUrl,
    fetchUser,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};