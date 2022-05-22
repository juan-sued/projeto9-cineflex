import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

//imports react


import Main from "../Main/Main";
import Legends from "../Legends/Legends";
import InputsBuyer from "../InputsBuyer/InputsBuyer";
import Seats from "../Seats/Seats";
import ButtonOrange from "../ButtonOrange/ButtonOrange";
import Footer from "../Footer/Footer";

// import components



export default function Page_3({ banner, nameBanner, timeSession }) {





    const [seatAPI, setSeatAPI] = useState(null);

    const [objectSeatsAPI, setObjectSeatsAPI] = useState({});

    const { idSession } = useParams();

    useEffect(() => {


        console.log(idSession)

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSession}/showtimes`);

        promise.then(response => {
            console.log("response.data api2 é:", response.data.seats)
            setSeatAPI([...response.data.seats])
            setObjectSeatsAPI({ ...response.data })
        })

    }, []
    )










    return (
        <>

            {seatAPI === null ? <img src="../../assets/loading.jpeg" alt=""></img> : <>



                <Main>
                    <TitlePage>Selecione o(s) assento(s)</TitlePage>

                    <Seats />

                    <Legends />

                    <InputsBuyer />

                    <ButtonOrange label=" Reservar assento(s)" route={"/sucesso/"} />

                </Main>


                <Footer banner={objectSeatsAPI.movie.posterURL}>
                    <h2> {objectSeatsAPI.movie.title}</h2>
                    <h2>{objectSeatsAPI.name}</h2>
                </Footer>

            </>
            }




        </>
    )
}
const TitlePage = styled.h1`


`;