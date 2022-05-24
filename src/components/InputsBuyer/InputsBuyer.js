import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function InputsBuyer({
  seatsReservedList,
  seats,
  objUserBuyer,
  setObjUserBuyer
}) {
  //   console.log('isso é oq quero', idSeatsReserved);
  const navigate = useNavigate();
  const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many';

  //variável de estado que guarda o valor do Nome do User
  const [inputValueName, setInputValueName] = useState('');

  //variável de estado que guarda o valor do CPF do User
  const [inputValueCpf, setInputValueCpf] = useState('');

  //função que impede que o navegador realize o reaload
  function submitData(event) {
    event.preventDefault();

    //
    objUserBuyer.ids = seatsReservedList.map(seat => seats[seat].id);
    objUserBuyer.name = inputValueName;
    objUserBuyer.cpf = inputValueCpf;
    //

    const newobjUserBuyer = { ...objUserBuyer };
    setObjUserBuyer(newobjUserBuyer);
    const promisse = axios.post(URL, objUserBuyer);
    promisse.then(response => {
      console.log('enviado com sucesso', response.data);

      navigate('../sucesso', { replace: true });
    });

    setInputValueCpf('');
    setInputValueCpf('');
  }

  return (
    <form onSubmit={submitData}>
      <InputsBuyerClass>
        <InputNameBuyer>
          <h4 forhtml="formName">Nome do comprador:</h4>
          <input
            id="formName"
            name="name"
            placeholder="Digite seu nome..."
            value={inputValueName}
            pattern={"[A-Za-z' ']+"}
            onChange={e => setInputValueName(e.target.value)}
            required
          ></input>
        </InputNameBuyer>
        <InputCpfBuyer>
          <h4 forhtml="formCPF">CPF do comprador:</h4>
          <input
            id="formCPF"
            name="cpf"
            placeholder="Digite seu CPF..."
            value={inputValueCpf}
            pattern={'[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}'}
            onChange={e => setInputValueCpf(e.target.value)}
            required
          ></input>
        </InputCpfBuyer>
      </InputsBuyerClass>

      <Container>
        <ButtonOrangeClass margin={30} type="submit">
          Reservar assentos
        </ButtonOrangeClass>
      </Container>
    </form>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ButtonOrangeClass = styled.button`
  margin-top: ${props => props.margin}px;
  width: 225px;
  height: 42px;
  background: #e8833a;
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

const InputsBuyerClass = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 18px;

  h4 {
    line-height: 21px;
    margin-bottom: 4px;
  }

  input {
    font-size: 18px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    width: 350px;
    height: 51px;
    font-style: italic;
  }
`;

const InputNameBuyer = styled.div``;

const InputCpfBuyer = styled.div``;
