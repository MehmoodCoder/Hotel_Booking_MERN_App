import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/Featureddestination";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <div className="bg-[#111111] min-h-screen text-white w-full">
        <Hero />
        <FeaturedDestination />
        <Offers />
        <Reviews />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
