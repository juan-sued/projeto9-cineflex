
import React from "react"
import styled from "styled-components";
//imports react


import Main from "../Main/Main";
import Legends from "../Legends/Legends";
import InputsBuyer from "../InputsBuyer/InputsBuyer";
import Seats from "../Seats/Seats";
import ButtonOrange from "../ButtonOrange/ButtonOrange";
import Footer from "../Footer/Footer";

// import components



export default function Page_3({ banner, nameBanner, timeSession }) {


    return (
        <>


            <Main>
                <TitlePage>Selecione o(s) assento(s)</TitlePage>
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
const TitlePage = styled.h1`


`;