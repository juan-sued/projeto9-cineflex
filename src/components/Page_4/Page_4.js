
import { Link } from "react-router-dom"
import "./Page_4.css"
//import css

import Header from "../Header/Header"
import ButtonOrange from "../ButtonOrange/ButtonOrange"
//import components




//função que renderiza a página 4 (Sucesso)
export default function Page_4({ banner, nameBanner, timeSession }) {


    return (
        <>
            <Header />

            <main className="page_3">
                <h1>Pedido feito com sucesso!</h1>



                <ButtonOrange label=" Voltar para Home" to="/" />



            </main>

        </>
    )
}