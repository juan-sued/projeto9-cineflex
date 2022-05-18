
import React from "react"
//imports react

import "./Page_3.css"
//import css

import InputsBuyer from "../InputsBuyer/InputsBuyer";
import Legends from "../Legends/Legends";
import Seats from "../Seats/Seats";
import Footer from "../Footer/Footer";
// import components






export default function Page_2({ banner, nameBanner, timeSession }) {





    return (
        <>
            <header>CINEFLIX</header>

            <main className="page_3">
                <h1>Selecione o(s) assento(s)</h1>

                <Seats />

                <Legends />

                <InputsBuyer />



            </main>


            <Footer banner={banner}>
                <h2> {nameBanner}</h2>
                <h2>{timeSession}</h2>
            </Footer>

        </>
    )
}