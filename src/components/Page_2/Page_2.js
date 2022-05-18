import "./Page_2.css"
//import css

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sessions from "../Sessions/Session";
// import components






// função que renderiza a página_2 (escolher sessão)
export default function Page_2({ banner, nameBanner, timeSession }) {
    return (
        <>
            <Header />

            <main className="page_2">
                <h1>Selecione a sessão</h1>
                <Sessions timeSession={timeSession} />
            </main>


            <Footer banner={banner}>
                <h2> {nameBanner}</h2>

            </Footer>

        </>
    )
}