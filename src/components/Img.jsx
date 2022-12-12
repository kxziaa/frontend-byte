import React from "react";

const Img = ({img}) => {
    return (
        <div className="py-8 px-10">
            <img src={img} alt="" className="w-80 rounded-md" />
        </div>
    )
}
export default Img;