
import Footer from "../Footer/Footer";
import "./Page_2.css"
import Sessions from "../Sessions/Session";








export default function Page_2({ banner, nameBanner, timeSession }) {
    return (
        <>
            <header>CINEFLIX</header>

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