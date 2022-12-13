import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import Wisata from "../components/Wisata";
import Galeri from "../components/Galeri";

const Detail = () => {
    const { id } = useParams();
    const [wisata, setWisata] = useState("");

    const getWisata = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/mahesa/${id}`);
            setWisata(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        getWisata();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Nav/>
            <Wisata 
                nama={wisata.nama}
                lokasi={wisata.lokasi}
                image={wisata.image}
                desk={wisata.desk}
                />
            <Galeri />
        </>
    )
}

export default Detail;