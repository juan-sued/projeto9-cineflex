
import styled from "styled-components";



import Main from "../Main/Main";
import Sessions from "../Sessions/Session";
import Footer from "../Footer/Footer";
// import components






// função que renderiza a página_2 (escolher sessão)
export default function Page_2({ banner, nameBanner, timeSession }) {
    return (
        <>


            <Main>
                <TitlePage>
                    Selecione a sessão
                </TitlePage>

                <Sessions timeSession={timeSession} />
            </Main>

            <Footer banner={banner}>
                <h2> {nameBanner}</h2>
            </Footer>

        </>
    )
}


const TitlePage = styled.h1`


`;