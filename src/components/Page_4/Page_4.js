
import "./Page_4.css"
import styled from "styled-components"
//import css

import Header from "../Header/Header"
import Main from "../Main/Main"
import ButtonOrange from "../ButtonOrange/ButtonOrange"
//import components




//função que renderiza a página 4 (Sucesso)
export default function Page_4({ banner, nameBanner, timeSession }) {


    return (
        <>
            <Header />

            <Main text="Pedido feito com sucesso!">


                <ContainerFS>
                    <h2>Filme e Sessão</h2>
                    <div className="filmAndSession">
                        <h2>
                            {nameBanner}
                        </h2>
                        {timeSession}
                        <h2>
                        </h2>
                    </div>
                </ContainerFS>
                <ButtonOrange label=" Voltar para Home" route="/" />

            </Main>

        </>
    )
}

const ContainerFS = styled.div`


`;


