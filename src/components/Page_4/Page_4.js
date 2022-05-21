
import "./Page_4.css"
import styled from "styled-components"
//import css

import Main from "../Main/Main"
import ButtonOrange from "../ButtonOrange/ButtonOrange"
//import components




//função que renderiza a página 4 (Sucesso)
export default function Page_4({ banner, nameBanner, timeSession }) {


    return (
        <>

            <Main>
                <TextSucess>
                    Pedido feito com sucesso!
                </TextSucess>


                <Container>
                    <Title>Filme e Sessão</Title>
                    <FilmeAndSession>
                        <h2>
                            {nameBanner}
                        </h2>

                        <h2>
                            {timeSession}
                        </h2>
                    </FilmeAndSession>
                </Container>

                <Container>
                    <Title>Ingressos</Title>
                    <FilmeAndSession>
                        <h2>
                            Assentos 15
                        </h2>

                        <h2>
                            Assentos 16
                        </h2>
                    </FilmeAndSession>
                </Container>


                <Container>
                    <Title>Comprador</Title>
                    <FilmeAndSession>
                        <h2>
                            Nome: João da Silva Sauro
                        </h2>

                        <h2>
                            CPF: 123.456.789-10
                        </h2>
                    </FilmeAndSession>
                </Container>



                <ButtonOrange label=" Voltar para Home" route="/" />

            </Main>

        </>
    )
}




const Title = styled.h2`

font-weight: 700;
text-align: start;
margin: 0;
margin-bottom: 10px;

`



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



h2{

    margin: 0;
}
`




const TextSucess = styled.h1` 
color: #247A6B;
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



