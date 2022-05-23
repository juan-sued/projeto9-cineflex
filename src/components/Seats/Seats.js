
import styled from "styled-components";

import { useState } from "react";

//import react









//função que componetiza um assento
function Seat(props) {




    const [seatSelected, setSeatSelected] = useState(false)


    //função que pega o botão que foi clicado
    function seatClick(seatClicked, isAvailableClicked) {
        console.log(seatClicked)
        console.log(isAvailableClicked)

        if (isAvailableClicked === true) {

            props.incrementSeatReservedList(seatClicked)

            setSeatSelected(!seatSelected);

        } else {

            console.log("disponível", seatClicked)
        }
    }

    return (
        <SeatClass backgroundColor={
            !props.isAvailable ? '#FBE192' : seatSelected ? '#8DD7CF' : '#C3CFD9'}
            borderColor={
                !props.isAvailable ? '#F7C52B' : seatSelected ? '#45BDB0' : '#808F9D'} onClick={() => seatClick(props.numberSeat, props.isAvailable)} >

            {props.numberSeat}
        </SeatClass>

    )
}







//função que renderiza assentos
export default function Seats({ seats }) {

    const [seatsReservedList, setSeatsReservedList] = useState([])

    function incrementSeatReservedList(seat) {

        if (seatsReservedList.find(e => e === seat)) {
            console.log("encontrou um igual")
            const seatsReservedListFilter = seatsReservedList.filter(e => e !== seat)
            console.log("fez o filter")

            setSeatsReservedList(seatsReservedListFilter)

        } else {
            setSeatsReservedList([...seatsReservedList, seat])
        }
    }

    console.log(seatsReservedList)
    return (

        <SeatsClass >
            {seats.map((element, index) => <Seat key={index} isAvailable={element.isAvailable} incrementSeatReservedList={incrementSeatReservedList} numberSeat={index + 1} />)}
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