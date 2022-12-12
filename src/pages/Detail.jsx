import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Wisata from "../components/Wisata";

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
    }, []);

    return (
        <>
            <Header />
            <Wisata 
                nama={wisata.nama}
                lokasi={wisata.lokasi}
                image={wisata.image}
                desk={wisata.desk}
                />
        </>
    )
}

export default Detail;