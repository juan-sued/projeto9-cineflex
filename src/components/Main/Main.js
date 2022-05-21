
import styled from "styled-components";
//import react

export default function Main({ children }) {
    return (
        <MainClass>
            {children}
        </MainClass>
    )
}


const MainClass = styled.main`
margin-top: 67px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;


`;


