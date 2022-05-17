import { Link } from "react-router-dom";
import "./Home.css"
import bannerfuture from "../../assets/bannerfuture.svg"
import bannerenola from "../../assets/bannerenola.svg"
//imports

function BannerFilm({ banner }) {
    return (

        <Link to="/Page_2">
            <button className="bannerFilm">
                <img src={banner} alt="" />
            </button>
        </Link>

    )
}

export default function Home() {

    const bannersFilms = [bannerfuture, bannerenola, bannerfuture, bannerenola, bannerfuture, bannerfuture, bannerfuture, bannerenola,]




    return (
        <>
            <header>
                CINEFLIX
            </header>
            <main>
                <h1>Selecione o filme</h1>

                <div className="bannersFilms">

                    {bannersFilms.map((element, index) => <BannerFilm key={index} banner={element} />)}


                </div>

            </main>

        </>
    )
}