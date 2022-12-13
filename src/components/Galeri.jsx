import React, {useState, useEffect} from "react";
import Img from './Img';
import axios from "axios";

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

    <section id="galeri" className=" py-10 flex flex-col items-center">
      <h1 className="font-bold text-center text-2xl mt-10">GALERI </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-10 mx-10">
        {wisata.map((data) => (
          <Img
            image={data.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Galeri;