import React from "react";
//import react


import "./Seats.css"
// import css




//função que componetiza assento
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
        <div className="seats">
            {arrSeats.map((element, index) => <Seat key={index} numberSeat={element} />)}

        </div>
    )
}


