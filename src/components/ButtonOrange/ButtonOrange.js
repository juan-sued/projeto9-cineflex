
import styled from "styled-components";
import { Link } from "react-router-dom"
import "./ButtonOrange.css"
//import css



export default function ButtonOrange({ label, route }) {
    return (

        <Link style={{ textDecoration: "none", color: "black" }} to={route} >
            <ButtonOrangeClass margin={30} >
                {label}
            </ButtonOrangeClass>
        </Link>


    )
}

const ButtonOrangeClass = styled.button`

     margin-top:${props => props.margin}px;
     width: 225px;
     height: 42px;
     background: #E8833A;
     border-radius: 3px;
     border: none;
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 400;
     font-size: 18px;
     display: flex;
     justify-content: center;
     align-items: center;
     letter-spacing: 0.04em;
     color: white;
    
 



`;