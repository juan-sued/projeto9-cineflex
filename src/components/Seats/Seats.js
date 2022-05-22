import React from "react";
import styled from "styled-components";
//import react





//função que componetiza um assento
function Seat({ numberSeat }) {
    return (
        <button className="seat">
            {numberSeat}
        </button>

    )
}


//função que renderiza assentos
export default function Seats() {


    const [arrSeats, setArrSeats] = React.useState([]);

    if (arrSeats.length < 50) {
        makeSeatsList();
    }


    //função que cria 50 botões para assentos
    function makeSeatsList() {
        let i = 0;
        while (arrSeats.length < 50) {
            i++
            arrSeats.push(i)

        }
        const newArrSeats = [...arrSeats]
        setArrSeats(newArrSeats)

    }
    return (

        <SeatsClass >
            {arrSeats.map((element, index) => <Seat key={index} />)}
        </SeatsClass>
    )
}



const SeatsClass = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 24px 14px 24px 24px;





button {
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 10px;
    margin-bottom: 19px;

}



`;
