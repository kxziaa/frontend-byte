import React from "react";

const Img = ({image}) => {
    return (
        <div className="py-8 px-10">
            <img src={image} alt="" className="w-40 h-40 rounded-md object-cover brightness-75 hover:brightness-100 transition duration-500  hover:scale-110" />
        </div>
    )
}
export default Img;