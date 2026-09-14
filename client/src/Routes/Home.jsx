import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import RecommendedHotels from "../components/RecommendedHotels";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <RecommendedHotels/>
        <FeaturedDestination />
        <Offers />
        <Reviews />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
