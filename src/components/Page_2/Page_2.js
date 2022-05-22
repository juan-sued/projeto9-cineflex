
import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";


import Main from "../Main/Main";
import Sessions from "../Sessions/Session";
import Footer from "../Footer/Footer";
// import components






// função que renderiza a página_2 (escolher sessão)
export default function Page_2() {




    const [sessionsDaysAPI, setSessionsDaysAPI] = useState(null);

    const [sessionsObjectAPI, setSessionsObjectAPI] = useState({});

    const { idfilm } = useParams();

    useEffect(() => {


        console.log(idfilm)

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilm}/showtimes`);

        promise.then(response => {
            console.log("response.data api2 é:", response.data.days)
            setSessionsDaysAPI([...response.data.days])
            setSessionsObjectAPI({ ...response.data })
        })

    }, []
    )



    console.log("a segunda API é:", sessionsDaysAPI);
    return (
        <>
            {sessionsDaysAPI === null ? <img src="../../assets/loading.jpeg" alt=""></img> : <>

                <Main>

                    <TitlePage>
                        Selecione a sessão
                    </TitlePage>

                    <Sessions days={sessionsDaysAPI} />
                </Main>

                <Footer banner={sessionsObjectAPI.posterURL}>
                    <h2> {sessionsObjectAPI.title}</h2>
                </Footer>
            </>
            }



        </>
    )
}


const TitlePage = styled.h1`


`;