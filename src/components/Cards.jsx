import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ image, nama, lokasi, id}) => {
    return (
        <>
        <Link to={`/detail/${id}`} >
            <div className="relative w-max h-max transform transition duration-500  hover:scale-110  shadow-2xl font-poppins">
                <img src={image} alt="" className="w-56 h-72 rounded-t-lg object-fit" />
                <div className=" bg-white w-56 h-28 rounded-lg items-center flex flex-col">
                    <h3 className="font-bold text-black text-[20px] text-center mt-2 ">{nama}</h3>
                    <div className="rounded b-lg">
                    <h4 className="font-light flex text-stone-400 mt-2 mx-2 text-center text-[13px]">
                        {lokasi}</h4>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
};

export default Cards; 