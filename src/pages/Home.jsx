import React, {useState, useEffect} from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
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
      <Nav />
      <Banner />
      <section id="alam" className="mt-[20px] py-10  flex flex-col items-center">
        <h1 className="font-bold text-center text-2xl mt-4">WISATA ALAM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
          {wisata.slice(0,4).map((item) => (
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
        <h1 className="font-bold text-center text-2xl mt-4">WISATA BUDAYA</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
          {wisata.slice(4,9).map((item) => (
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
        <h1 className="font-bold text-center text-2xl mt-4">WISATA REKREASI</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
          {wisata.slice(13,18).map((item) => (
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
        <h1 className="font-bold text-center text-2xl mt-4">WISATA KULINER</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 gap-4 justify-center">
          {wisata.slice(9,25).map((item) => (
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
    </>
  );
}

export default Home;