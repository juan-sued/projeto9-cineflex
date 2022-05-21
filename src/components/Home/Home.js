

import styled from "styled-components";
//import css


import Main from "../Main/Main";
import BannerFilm from "../BannerFilm/BannerFilm"
//import components

//
//


//função que rederiza Home (page_1)
export default function Home(props) {








    return (
        <>

            <Main>

                <TitlePage>Selecione o filme</TitlePage>

                <BannersFilms>
                    {props.responseAPI.map((element, index) => <BannerFilm key={index} banner={element.posterURL} bannerSelected={() => props.bannerSelected(element)} element={element} />)}
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