import React from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const Offers = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <Title
            align="left"
            title="Exclusive Deals & Special Offers"
            description="Take advantage of our limited-time discounts, seasonal packages, and premium perks for your next getaway."
          />
          
          <button
            onClick={() => {
              navigate("/offers");
              scrollTo(0, 0);
            }}
            className="my-14 px-4 py-2 text-sm font-medium border border-white-100 cursor-pointer transition-all bg-gray-900 rounded hover:bg-white-100"
          >
            View All Offers
          </button>
        </div>
      </div>
    </>
  );
};

export default Offers;
