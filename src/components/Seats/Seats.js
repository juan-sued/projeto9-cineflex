import styled from 'styled-components';
import { useState } from 'react';

//import react

//função que componetiza um assento
function Seat({ isAvailable, numberSeat, seatClick, incrementSeatReservedList }) {
  // variável de estado que determina se o assento foi selecionado
  const [seatSelected, setSeatSelected] = useState(false);

  //função que pega o assento que foi clicado
  function seatClick(seatClicked, isAvailableClicked) {
    if (isAvailableClicked === true) {
      incrementSeatReservedList(seatClicked);
      setSeatSelected(!seatSelected);
    } else {
      alert('Este assento encontra-se ocupado!');
    }
  }
  return (
    <SeatClass
      backgroundColor={!isAvailable ? '#FBE192' : seatSelected ? '#8DD7CF' : '#C3CFD9'}
      borderColor={!isAvailable ? '#F7C52B' : seatSelected ? '#45BDB0' : '#808F9D'}
      onClick={() => seatClick(numberSeat, isAvailable)}
    >
      {numberSeat}
    </SeatClass>
  );
}

//função que renderiza assentos
export default function Seats({ seats, seatsReservedList, setSeatsReservedList }) {
  //função que atualiza a lista de assentos reservados
  function incrementSeatReservedList(seat) {
    if (seatsReservedList.find(e => e === seat - 1)) {
      const seatsReservedListFilter = seatsReservedList.filter(e => e !== seat - 1);

      setSeatsReservedList(seatsReservedListFilter);
    } else {
      setSeatsReservedList([...seatsReservedList, seat - 1]);
    }
  }
  return (
    <SeatsClass>
      {seats.map((element, index) => (
        <Seat
          key={index}
          isAvailable={element.isAvailable}
          incrementSeatReservedList={incrementSeatReservedList}
          numberSeat={index + 1}
        />
      ))}
    </SeatsClass>
  );
}
// style do conjunto de assentos
const SeatsClass = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 14px 24px 24px;
`;
// style do assento
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
