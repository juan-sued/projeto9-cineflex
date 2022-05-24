import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//import react
import '../../css/reset.css';
import '../../css/styles.css';

//import css
import Home from '../Home/Home';
import Page_2 from '../Page_2/Page_2';
import Page_3 from '../Page_3/Page_3';
import Page_4 from '../Page_4/Page_4';
import Header from '../Header/Header';
//import pages

export default function App() {
  //variável de estado que guarda o valor do objeto para reserva de assentos
  const [objUserBuyer, setObjUserBuyer] = useState({
    ids: [],
    name: '',
    cpf: ''
  });
  const [seatsReservedList, setSeatsReservedList] = useState([]);
  // variável de estado que guarda o Object inteiro da API
  const [objectSeatsAPI, setObjectSeatsAPI] = useState({});
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/filme/:idfilm" element={<Page_2 />} />

          <Route
            path="/sessao/:idSession"
            element={
              <Page_3
                objUserBuyer={objUserBuyer}
                setObjUserBuyer={setObjUserBuyer}
                seatsReservedList={seatsReservedList}
                setSeatsReservedList={setSeatsReservedList}
                objectSeatsAPI={objectSeatsAPI}
                setObjectSeatsAPI={setObjectSeatsAPI}
              />
            }
          />

          <Route
            path="/sucesso/"
            element={
              <Page_4
                objUserBuyer={objUserBuyer}
                seatsReservedList={seatsReservedList}
                objectSeatsAPI={objectSeatsAPI}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
