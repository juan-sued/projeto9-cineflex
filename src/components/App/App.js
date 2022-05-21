
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useParams, useEffect } from "react";
//import react


import "../../css/reset.css"
import "../../css/styles.css"

//import css


import Home from "../Home/Home";
import Page_2 from "../Page_2/Page_2";
import Page_3 from "../Page_3/Page_3"
import Page_4 from "../Page_4/Page_4";
import Header from "../Header/Header";
//import pages


//


import axios from "axios";
//imports assets





export default function App() {

    const [responseAPI, setResponseAPI] = useState([]);






    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {
            console.log(response.data)
            setResponseAPI([...response.data])
        })


    }, []
    )

    console.log(responseAPI);






    // const bannersFilms = [
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    // ]

    const [banner, setBanner] = useState("")

    function bannerSelected(element) {
        console.log(element)
        setBanner(element)
    }

    // const { idBanner } = useParams();

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home responseAPI={responseAPI} bannerSelected={bannerSelected} />} />
                    <Route path="/filme/:idBanner" element={<Page_2 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                    <Route path="/sessao/:idSession" element={<Page_3 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                    <Route path="/sucesso/" element={<Page_4 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}