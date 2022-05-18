import { Link } from "react-router-dom";
import BannerFilm from "../BannerFilm/BannerFilm";
import "./Page_2.css"

function Footer({ banner, children }) {
    return (
        <footer>
            <BannerFilm banner={banner} />

            <div className="dateSession">
                {children}
            </div>

        </footer>
    )


}

export default function Page_2({ banner, nameBanner, timeSession }) {
    return (
        <>
            <header>CINEFLIX</header>

            <main>
                <h1>Selecione a sessão</h1>
                <Link to="/">
                    <button>
                        HOME
                    </button>
                </Link>
                batatinha
            </main>
            <Footer banner={banner}>
                <h2> {nameBanner}</h2>
                <h2>{timeSession}</h2>
            </Footer>

        </>
    )
}