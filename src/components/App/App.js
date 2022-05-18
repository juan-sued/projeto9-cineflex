
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import "./App.css";
import "../../css/reset.css"
import "../../css/styles.css"
//import css


import Home from "../Home/Home";
import Page_2 from "../Page_2/Page_2";
//import pages


//

import bannerfuture from "../../assets/bannerfuture.svg"
import bannerenola from "../../assets/bannerenola.svg"
//imports assets





export default function App() {
    const bannersFilms = [
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00" },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 15:00" },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00" },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 15:00" },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00" },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 15:00" },
        { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00" },
        { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 15:00" },
    ]

    const [banner, setBanner] = useState("")

    function bannerSelected(element) {
        console.log(element)
        setBanner(element)
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home bannersFilms={bannersFilms} bannerSelected={bannerSelected} />} />
                    <Route path="/page_2" element={<Page_2 banner={banner.image} nameBanner={banner.name} timeSession={banner.session} />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}