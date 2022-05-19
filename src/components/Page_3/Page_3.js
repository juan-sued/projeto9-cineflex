
import React from "react"
//imports react

import "./Page_3.css"
//import css

import Main from "../Main/Main";
import Header from "../Header/Header";
import Legends from "../Legends/Legends";
import InputsBuyer from "../InputsBuyer/InputsBuyer";
import Seats from "../Seats/Seats";
import ButtonOrange from "../ButtonOrange/ButtonOrange";
import Footer from "../Footer/Footer";
// import components






export default function Page_3({ banner, nameBanner, timeSession }) {


    return (
        <>
            <Header />

            <Main text="Selecione o(s) assento(s)">

                <Seats />

                <Legends />

                <InputsBuyer />

                <ButtonOrange label=" Reservar assento(s)" route={"/sucesso/"} />

            </Main>


            <Footer banner={banner}>
                <h2> {nameBanner}</h2>
                <h2>{timeSession}</h2>
            </Footer>

        </>
    )
}