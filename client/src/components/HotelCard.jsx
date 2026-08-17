import React from "react";
import { Link } from "react-router-dom";
import starRating from '../assets/starRatings.svg'

const HotelCard = ({ room, index }) => {
    return (
        <>
            <Link to={'/room/' + room._id} key={room._id} onClick={() => scrollTo(0, 0)} className="">
                <img src={room.img[0]} alt="Room Img" className="relative max-w-70 w-full rounded-xl overflow-hidden bg-gray-700 text-white shadow-[0px_4px_4px_rgba(256,256,256,0.5)]" />

                {index % 2 === 4 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-black text-white font-medium rounded-full">
                    Best Seller
                </p>}

                <div className="p-4 pt-5">
                    <div className="flex items-center justify-between">
                        <p className="font-playfair text-xl font-medium text-white">{room.hotel.name}</p>
                        <div className="flex items-center gap-1">
                            <img src={ starRating } alt="star icon" /> 4.5
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <img src={ } alt="location icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p><span className="text-xl text-white">${room.price}</span>/night</p>
                        <button className="px-4 py-2 text-sm font-medium border border-white rounded hover:bg-white transition-all cursor-pointer">
                            Book Now
                        </button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HotelCard