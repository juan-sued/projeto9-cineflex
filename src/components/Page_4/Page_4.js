import './Page_4.css';
import styled from 'styled-components';
//import css

import Main from '../Main/Main';
import ButtonOrange from '../ButtonOrange/ButtonOrange';
//import components

//função que renderiza a página 4 (Sucesso)
export default function Page_4({ objUserBuyer, seatsReservedList, objectSeatsAPI }) {
  return (
    <>
      <Main>
        <TextSucess>Pedido feito com sucesso!</TextSucess>

        <Container>
          <Title>Filme e Sessão</Title>
          <FilmeAndSession>
            <h2>{objectSeatsAPI.movie.title}</h2>

            <h2>
              {objectSeatsAPI.day.weekday} - {objectSeatsAPI.name}
            </h2>
          </FilmeAndSession>
        </Container>

        <Container>
          <Title>Ingressos</Title>
          <FilmeAndSession>
            {seatsReservedList.map((seatReserved, index) => (
              <h2 key={index}> Assento: {seatReserved}</h2>
            ))}
          </FilmeAndSession>
        </Container>

        <Container>
          <Title>Comprador</Title>
          <FilmeAndSession>
            <h2>Nome: {objUserBuyer.name}</h2>

            <h2>CPF: {objUserBuyer.cpf}</h2>
          </FilmeAndSession>
        </Container>

        <ButtonOrange label=" Voltar para Home" route="/" />
      </Main>
    </>
  );
}

const Title = styled.h2`
  font-weight: 700;
  text-align: start;
  margin: 0;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 30px;
  padding-bottom: 45px;
`;

const FilmeAndSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  h2 {
    margin: 0;
  }
`;

const TextSucess = styled.h1`
  color: #247a6b;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 40px;
  margin-bottom: 45px;
  width: 170px;
`;
