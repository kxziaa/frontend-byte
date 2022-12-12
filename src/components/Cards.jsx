import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ image, nama, lokasi, id}) => {
    return (
        <>
        <Link to={`/detail/${id}`}>
            <div className="relative w-max h-max">
                
                <img src={image} alt="" className="w-56 rounded-lg" />
                
                <div className="absolute top-0 right-0  bg-[#ff0b0b] text-white px-[10px] py-2 rounded-tr-lg rounded-bl-lg">
                    <h3 className="font-semibold">{lokasi}</h3>
                </div>

                <div className="text-[#000000]">
                    <h3 className="font-semibold text-center">{nama}</h3>
                </div>
            </div>
            </Link>
        </>
    );
};

export default Cards; 