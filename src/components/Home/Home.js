
import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
//import css


import Main from "../Main/Main";
import BannerFilm from "../BannerFilm/BannerFilm"
//import components

//
//


//função que rederiza Home (page_1)
export default function Home() {

    const [postersFilmsAPI, setPostersFilmsAPI] = useState([]);

    // requisição dos posters principais API 
    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {

            setPostersFilmsAPI([...response.data])
        })
    }, []
    )


    return (
        <>

            <Main>

                <TitlePage>Selecione o filme</TitlePage>

                <BannersFilms>
                    {postersFilmsAPI.map((element) => <BannerFilm key={element.id} banner={element.posterURL} postersFilmsAPI={postersFilmsAPI} idfilm={element.id} element={element} />)}
                </BannersFilms>

            </Main>


        </>
    )
}



const BannersFilms = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`;

const TitlePage = styled.h1`


`;