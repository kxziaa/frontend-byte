import React, {useState, useEffect} from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Galeri from "../components/Galeri";
import axios from "axios";

function Home() {
    const [wisata, setWisata] = useState([]);

    const getWisata = async () => {
      const response = await axios.get ("http://localhost:5000/mahesas")
      setWisata(response.data);
    };
     
    useEffect(() => {
      getWisata();
    }, []);

  return (
    <>
      <div className="font-poppins">
      <Header />

      <section id="alam" className="mt-[20px] sm:py-10  flex flex-col items-center">
        <h1 className="font-bold text-[28px] mt-4">WISATA ALAM</h1>
        <div className="flex flex-wrap justify-center gap-16 mt-10 mx-20">
          {wisata.slice(0,7).map((item) => (
            <Cards
            key={item.id}
            image={item.image}
            lokasi={item.lokasi}
            nama={item.nama}
            id={item.id}
            />
          ))}
        </div>
      </section>
      <section id="kuliner" className="mt-[20px] py-10  flex flex-col items-center">
        <h1 className="font-bold text-center text-[28px]  mt-4">WISATA KULINER</h1>
        <div className="flex flex-wrap justify-center gap-16 mt-10 mx-20">
          {wisata.slice(7,12).map((item) => (
            <Cards
            key={item.id}
            image={item.image}
            lokasi={item.lokasi}
            nama={item.nama}
            id={item.id}
            />
          ))}
        </div>
      </section>
      <section id="rekreasi" className="mt-[20px] py-10  flex flex-col items-center">
        <h1 className="font-bold text-center text-[28px]  mt-4">WISATA REKREASI</h1>
        <div className="flex flex-wrap justify-center gap-16 mt-10 mx-20">
          {wisata.slice(12,16).map((item) => (
            <Cards
            key={item.id}
            image={item.image}
            lokasi={item.lokasi}
            nama={item.nama}
            id={item.id}
            />
          ))}
        </div>
      </section>
      <section id="budaya" className="mt-[20px] py-10  flex flex-col items-center">
        <h1 className="font-bold text-center text-[28px]  mt-4">WISATA BUDAYA</h1>
        <div className="flex flex-wrap justify-center gap-16 mt-10 mx-20">
          {wisata.slice(16,25).map((item) => (
            <Cards
            key={item.id}
            image={item.image}
            lokasi={item.lokasi}
            nama={item.nama}
            id={item.id}
            />
          ))}
        </div>
      </section>
      <Galeri />
      </div>
    </>
  );
}

export default Home;