import BannerFilm from "../BannerFilm/BannerFilm";
import styled from "styled-components";

export default function Footer({ children }) {
    return (



        <FooterClass>
            {children}
        </FooterClass>
    )
}



const FooterClass = styled.footer`



    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: var(--colorBlue);
    border-top: 1px solid #9EADBA;
    padding-left: 20px;
    padding-right: 10px;





`;