import React from "react";
import Img from './Img';
import Kabasaran from "../assets/Kabasaran.jpg";


const Galeri = () => {

  const rowOne = [
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
    {
      img: Kabasaran,
    },
  ]
  return (

    <section id="galeri" className=" py-10 flex flex-col items-center">
      <h1 className="font-bold text-center text-2xl mt-10">GALERI </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {rowOne.map((data) => (
          <Img
            img={data.img}
          />
        ))}
      </div>
    </section>
  )
}

export default Galeri;