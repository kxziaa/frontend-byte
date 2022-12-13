import React, {useState} from "react";
import {Link} from  'react-scroll';
import Search from "./Search.jsx";
import Kabasaran from "../assets/Kabasaran.jpg";
import Logo from "../assets/Logo.png";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';


const Nav = () => {

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return(
        <header>
          <div className="relative">
            <img src={Kabasaran} alt="" className="brightness-50" />
            <div className=" w-full h-[50px] sm:h-[60px] px-5 sm:px-10 flex justify-between absolute top-0 ">
                <div className="flex items-center w-full mr-5 sm:mr-14 lg:mr-20 xl:mr-40 justify-between text-white">
                  <div className="flex flex-row">
                    <img src={Logo} alt="" className="w-7 sm:w-5 transform transition duration-500 hover:scale-150 " />
                <a href="/" className="sm:text-[15px] font-bold items-center">MAHESA.</a>
                </div>
                <div className="hidden md:block">
                <ul className="flex flex-row justify-between gap-6 lg:gap-12 xl:gap-20 text-[12px] lg:text-[18px] xl:text-[20px] xl:font-semibold font-poppins">
                  <li className=" no-underline hover:underline">
                    <Link to="alam" spy={true} smooth={true} offset={50} duration={500} >Alam</Link>
                  </li>
                  <li className=" no-underline hover:underline">
                  <Link to="kuliner" spy={true} smooth={true} offset={50} duration={500}>Kuliner</Link>
                  </li>
                  <li className=" no-underline hover:underline">
                    <Link to="budaya" spy={true} smooth={true} offset={50} duration={500}>Budaya</Link>
                  </li>
                  <li className=" no-underline hover:underline">
                  <Link to="rekreasi" spy={true} smooth={true} offset={50} duration={500}>Rekreasi</Link>
                  </li>
                  <li className=" no-underline hover:underline">
                  <Link to="galeri" spy={true} smooth={true} offset={50} duration={500}>Galeri</Link>
                  </li>
                </ul>
                </div>
                </div>
                <div className="hidden sm:flex mt-2 items-center">
                <Search placeholder="Cari Tempat Wisata..."/>
                </div>
                
                <div className="flex sm:hidden" onClick={handleClick}>
                    {!nav ? <SearchIcon className="mt-2" style={{ color: "white" }} />
                    : <CloseIcon className="cursor-pointer mt-2" style={{ color: "white" }}/>
                   }
                </div>
            </div>

            
            <div className={!nav ? 'hidden' : " w-full px-8 pb-4 items-center mt-4 bg:black sm:hidden"} >
                <Search />
            </div>
            <div className="hidden sm:flex sm:flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-white ">
              <h1 className="text-center font-bold text-[50px] xl:text-[70px]">MAHESA.</h1>
              <p className="text-center xl:text-[30px] font-poppins">APLIKASI SARANA INFORMASI DESTINASI WISATA <br /> <span className="font-bold"> KABUPATEN MINAHASA</span></p>
              
            </div>
            </div>
        </header>
    )
} 

export default Nav ;