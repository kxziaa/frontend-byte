import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';

const ScrollTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, []);

    const Up = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px"
            }} className="bg-white shadow-md rounded-2xl" 
            onClick={Up}>
            <KeyboardArrowUpIcon style={{ color: "black", fontSize:"50" }}/>
            </button>
        )}
        </div>
    );
}

export default ScrollTop;
