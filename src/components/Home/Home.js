import "./Home.css"

import styled from "styled-components";
//import css

import Header from "../Header/Header"
import Main from "../Main/Main";
import BannerFilm from "../BannerFilm/BannerFilm"
//import components

//
//


//função que rederiza Home (page_1)
export default function Home(props) {








    return (
        <>
            <Header />
            <Main>

                <TitlePage>Selecione o filme</TitlePage>

                <BannersFilms>
                    {props.bannersFilms.map((element, index) => <BannerFilm key={index} banner={element.image} bannerSelected={() => props.bannerSelected(element)} element={element} />)}
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