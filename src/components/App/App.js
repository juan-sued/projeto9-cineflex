
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useState } from "react";
//import react

import "./App.css";
import "../../css/reset.css"
import "../../css/styles.css"
//import css


import Home from "../Home/Home";
import Page_2 from "../Page_2/Page_2";
import Page_3 from "../Page_3/Page_3"
import Page_4 from "../Page_4/Page_4";
//import pages


//

import bannerfuture from "../../assets/bannerfuture.svg"
import bannerenola from "../../assets/bannerenola.svg"
//imports assets





export default function App() {
    const bannersFilms = [
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    ]

    const [banner, setBanner] = useState("")

    function bannerSelected(element) {
        console.log(element)
        setBanner(element)
    }

    // const { idBanner } = useParams();

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home bannersFilms={bannersFilms} bannerSelected={bannerSelected} />} />
                    <Route path="/filme/:idBanner" element={<Page_2 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                    <Route path="/sessao/:idSession" element={<Page_3 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                    <Route path="/sucesso/" element={<Page_4 />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}
