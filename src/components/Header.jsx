import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <>
    <header className="w-screen h-[70px] bg-white drop-shadow-lg fixed">
    <Link to={'/'}>
        <h1 className="text-2xl font-bold text-center align-middle pt-[18px]">MAHESA.</h1>
    </Link> 
    </header>
    </>
    )
}

export default Header;