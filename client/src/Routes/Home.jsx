import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/Featureddestination";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <Offers />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Home;
