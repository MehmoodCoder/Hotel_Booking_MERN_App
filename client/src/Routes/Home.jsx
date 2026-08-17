import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/Featureddestination";
import Offers from "../components/Offers";
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <Offers/>
      <Reviews />
    </>
  );
};

export default Home;
