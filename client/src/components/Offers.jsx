import React from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();

  const Data = [
    {
      _id: "offer_1",
      badge: "25% OFF",
      title: "Summer Escape Package",
      description:
        "Enjoy a luxury stay with daily breakfast and free spa access.",
      expiry: "Aug 31",
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "offer_2",
      badge: "15% OFF",
      title: "Romantic Getaway",
      description: "Special couple packages including candle light dinner.",
      expiry: "Sep 15",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "offer_3",
      badge: "20% OFF",
      title: "Long Stay Discount",
      description: "Book 5 nights or more and get 20% off on food & drinks.",
      expiry: "Aug 31",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Data.map((item) => (
            <div
              key={item._id}
              className="group relative h-72 w-full rounded-2xl overflow-hidden bg-cover bg-center border border-gray-800 shadow-[0px_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0px_6px_20px_rgba(255,255,255,0.25)] transition-all duration-300 cursor-pointer p-5 flex flex-col justify-between"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 group-hover:bg-black/70 transition-colors duration-300"/>

              <div className="relative z-10 self-start">
                <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 shadow-sm">
                  {item.badge || "25% OFF"}
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-1.5">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-white tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-xs line-clamp-2 font-light leading-relaxed">
                  {item.description}
                </p>

                <span className="text-[11px] text-gray-400 font-medium pt-1">
                  Expires {item.expiry || "Aug 31"}
                </span>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                  <span>View Offers</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
