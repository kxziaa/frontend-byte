import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
const Header = () => {
    return (
    <>
    <header className="w-screen h-[95px] sm:h-[80px] bg-white drop-shadow-lg absolute">
    <Link to={'/'}>

        <div className="flex flex-col items-center mt-4">
            <img src={Logo} alt="" className="w-8 sm:w-5 transform transition duration-500 hover:scale-150" />
            <h1 className="font-bold text-[20px]">MAHESA.</h1>
        </div>
    </Link> 
    </header>
    </>
    )
}

export default Header;