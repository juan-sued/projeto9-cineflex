
import styled from "styled-components";
// import css



export default function Header() {
    return (
        <HeaderClass>
            CINEFLIX
        </HeaderClass>
    )
}

const HeaderClass = styled.header`

    height: 67px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--colorBlue);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    color: var(--colorOrange)
    `;