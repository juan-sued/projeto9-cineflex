import { Link } from "react-router-dom";

import styled from "styled-components";


//função que componetiza o banner
export default function BannerFilm(props) {
    return (
        <BannerFilmClass >
            <Link to="/filme/:idBanner">
                <img src={props.banner} alt="" onClick={() => props.bannerSelected(props.element)} />
            </Link>
        </BannerFilmClass >
    )
}




const BannerFilmClass = styled.button` 


    border: none;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    padding: 4px;
    width: 145px;
    height: 209px;
    margin: 20px 0 0 20px;








`;