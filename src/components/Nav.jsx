import React, {useState} from "react";
import {Link} from  'react-scroll';
import Search from "./Search.jsx";

const Nav = () => {

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return(
        <header className="w-screen sm:h-[50px] lg:h-[70px] bg-white bg-opacity-40 drop-shadow-lg absolute">
            <div className=" w-full h-full px-5 sm:px-10 flex justify-between ">
                <div className="flex items-center w-full mr-5 lg:mr-14 xl:mr-40 justify-between">
                <a href="/" className="text-2xl font-bold">MAHESA.</a>
                <div className="hidden md:block">
                <ul className="flex flex-row justify-between gap-6 lg:gap-12 xl:gap-20 text-[12px] lg:text-[18px] xl:text-[20px] xl:font-semibold">
                  <li>
                    <Link to="alam" spy={true} smooth={true} offset={50} duration={500}>Alam</Link>
                  </li>
                  <li>
                    <Link to="budaya" spy={true} smooth={true} offset={50} duration={500}>Budaya</Link>
                  </li>
                  <li>
                  <Link to="kuliner" spy={true} smooth={true} offset={50} duration={500}>Kuliner</Link>
                  </li>
                  <li>
                  <Link to="rekreasi" spy={true} smooth={true} offset={50} duration={500}>Rekreasi</Link>
                  </li>
                  <li>
                  <Link to="galeri" spy={true} smooth={true} offset={50} duration={500}>Galeri</Link>
                  </li>
                </ul>
                </div>
                </div>
                <div className="hidden sm:flex mt-2 lg:mt-5">
                <Search placeholder="Cari Tempat Wisata..."/>
                </div>

                <div className="sm:hidden" onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 mt-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 mt-2" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                   }
                </div>
            </div>

            
            <div className={!nav ? 'hidden' : " w-full px-8 pb-4 items-center mt-4 sm:hidden"} >
                <Search />
            </div>
        </header>   
    )
} 

export default Nav ;