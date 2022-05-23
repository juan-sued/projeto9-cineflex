import styled from "styled-components";

import { useState, useEffect } from "react";
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



export default function Page_3() {



    const [seatsAPI, setSeatsAPI] = useState([]);

    const [objectSeatsAPI, setObjectSeatsAPI] = useState({});

    const { idSession } = useParams();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

        promise.then(response => {



            setSeatsAPI(response.data.seats)
            setObjectSeatsAPI(response.data)

        })

        promise.catch(err => console.log(err))

    }, [idSession]
    )



    return (
        <>



            <Main>
                <TitlePage>Selecione o(s) assento(s)</TitlePage>

                <Seats seats={seatsAPI} />

                <Legends />

                <InputsBuyer />

                <ButtonOrange label=" Reservar assento(s)" route={"/sucesso/"} />

            </Main>

            <Footer>
                <BannerClass>
                    {objectSeatsAPI.movie === undefined ? "" :
                        <img src={objectSeatsAPI.movie.posterURL} alt="" />
                    }
                </BannerClass>

                {objectSeatsAPI.movie === undefined ? "" :
                    <DateSession >
                        <h2> {objectSeatsAPI.movie.title}</h2>
                        <h2>{objectSeatsAPI.day.weekday}  - {objectSeatsAPI.name}</h2>
                    </DateSession >
                }
            </Footer>

        </>
    )
}
const TitlePage = styled.h1`

`;

const DateSession = styled.div``;


const BannerClass = styled.div`

    border: none;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    padding: 8px;
    width: 64px;
    height: 89px;

   
img {
    height: 100%;
    width: 100%;


}

`;

const Loading = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;


    img {

    margin-top: 200px;
    height: 300px;
    width: 300px;

}`;