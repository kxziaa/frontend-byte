import React, {useState, useEffect} from "react";
import Img from './Img';
import axios from "axios";
import { Link } from "react-router-dom";
const Galeri = () => {
  const [wisata, setWisata] = useState([]);

  const getWisata = async () => {
    const response = await axios.get ("http://localhost:5000/mahesas")
    setWisata(response.data);
  };
   
  useEffect(() => {
    getWisata();
  }, []);
  return (

    <section id="galeri" className=" py-4 flex flex-col items-center">
      <h1 className="font-bold text-center text-[30px] text-slate-500 mt-4">KUNJUNGI LAINNYA</h1>
      <div className="flex flex-wrap justify-center gap-2 mt-5 md:mx-4 mx-10">
        {wisata.map((data) => (
          <Link to={`/detail/${data.id}`} target="_blank" >
          <Img
            image={data.image}
            id={data.id}
          />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Galeri;