import React from "react";

const Img = ({image}) => {
    return (
        <div className="py-8 px-10">
            <img src={image} alt="" className="w-80 h-60 rounded-md object-cover" />
        </div>
    )
}
export default Img;