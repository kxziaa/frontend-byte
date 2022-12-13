import React from "react"
import icon from "../assets/Location.svg"

const Wisata = ({image, nama, lokasi, desk }) => {
    return (
    <>
        <div className="sm:mx-[50px] lg:mx-[100px] sm:flex sm:flex-row sm:items-center sm:gap-8 sm:pt-28 mb-6 font-poppins">
                <img src={image} className="object-cover w-screen sm:w-[450px] h-[300px] lg:w-[500px] lg:h-[450px] xl:w-[550] xl:h-[500px] sm:rounded-xl" alt="" />
                <div className="mt-10 sm:mt-0">
                    <h2 className="font-bold text-center sm:text-left text-[20px] sm:text-[25px]">{nama}</h2>
                    <div className="justify-center sm:justify-start flex flex-row align-middle gap-2">
                        <img src={icon} className="w-4 lg:w-5" alt="" />
                        <h3 className="text-[16px] sm:text-[20px]">{lokasi} </h3>
                    </div>
                    <p className=" text-center sm:text-start mt-3 sm:mt-6 mx-10 text-[12px] sm:text-[15px] sm:mx-0">
                        {desk}
                    </p>
                </div>
            </div>
            </>
    );
};

export default Wisata;