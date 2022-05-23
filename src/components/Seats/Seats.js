import React from "react";
import styled from "styled-components";
//import react









//função que componetiza um assento
function Seat({ isAvailable, numberSeat }) {


    function seatReserved(seat) {

        console.log("clicou", seat)




    }

    return (
        <SeatClass backgroundColor={
            isAvailable ? '#C3CFD9' : '#FBE192'}
            borderColor={
                isAvailable ? '#7B8B99' : '#F7C52B'} onClick={() => seatReserved(numberSeat)}   >

            {numberSeat}
        </SeatClass>

    )
}


//função que renderiza assentos
export default function Seats({ seats }) {

    return (

        <SeatsClass >
            {seats.map((element, index) => <Seat key={index} isAvailable={element.isAvailable} numberSeat={index + 1} />)}
        </SeatsClass>
    )
}



const SeatsClass = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 24px 14px 24px 24px;


`;

const SeatClass = styled.button` 



    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};
    border-radius: 12px;
    margin-right: 10px;
    margin-bottom: 19px;





`;