import styled from 'styled-components';
//import css

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//imports react

import Main from '../Main/Main';
import Legends from '../Legends/Legends';
import InputsBuyer from '../InputsBuyer/InputsBuyer';
import Seats from '../Seats/Seats';
import Footer from '../Footer/Footer';
// import components

export default function Page_3({
  objUserBuyer,
  setObjUserBuyer,
  seatsReservedList,
  setSeatsReservedList,
  objectSeatsAPI,
  setObjectSeatsAPI
}) {
  // variável de estado que guarda o array de assentos da API
  const [seatsAPI, setSeatsAPI] = useState([]);

  const { idSession } = useParams();
  const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;
  useEffect(() => {
    const promise = axios.get(URL);

    promise.then(response => {
      setSeatsAPI(response.data.seats);
      setObjectSeatsAPI(response.data);
    });

    promise.catch(err => console.log(err));
  }, [idSession]);
  console.log(objectSeatsAPI);
  // variável de estado que guarda o index dos assentos selecionados

  return (
    <>
      <Main>
        <TitlePage>Selecione o(s) assento(s)</TitlePage>

        <Seats
          seats={seatsAPI}
          seatsReservedList={seatsReservedList}
          setSeatsReservedList={setSeatsReservedList}
        />

        <Legends />

        <InputsBuyer
          seatsReservedList={seatsReservedList}
          seats={seatsAPI}
          objUserBuyer={objUserBuyer}
          setObjUserBuyer={setObjUserBuyer}
        />
      </Main>

      <Footer>
        <BannerClass>
          {objectSeatsAPI.movie === undefined ? (
            ''
          ) : (
            <img src={objectSeatsAPI.movie.posterURL} alt="" />
          )}
        </BannerClass>

        {objectSeatsAPI.movie === undefined ? (
          ''
        ) : (
          <DateSession>
            <h2> {objectSeatsAPI.movie.title}</h2>
            <h2>
              {objectSeatsAPI.day.weekday} - {objectSeatsAPI.name}
            </h2>
          </DateSession>
        )}
      </Footer>
    </>
  );
}
const TitlePage = styled.h1``;

const DateSession = styled.div``;

const BannerClass = styled.div`
  border: none;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  padding: 8px;
  width: 64px;
  height: 89px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;

  img {
    margin-top: 200px;
    height: 300px;
    width: 300px;
  }
`;
