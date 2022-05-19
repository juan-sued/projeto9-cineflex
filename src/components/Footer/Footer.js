import BannerFilm from "../BannerFilm/BannerFilm";
import styled from "styled-components";

export default function Footer({ banner, children }) {
    return (


        <FooterClass>

            <BannerFilm banner={banner} />

            <DateSession >
                {children}
            </DateSession>

        </FooterClass>
    )
}


const DateSession = styled.div``;

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
    padding-left: 10px;


 button {
    width: 62px;
    height: 89px;
    left: 10px;
    bottom: 14px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 8px;
    margin: 0;

}

    img {
    width: 100%;
    height: 100%;   
    }   

`;