
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import react


import "../../css/reset.css"
import "../../css/styles.css"

//import css


import Home from "../Home/Home";
import Page_2 from "../Page_2/Page_2";
import Page_3 from "../Page_3/Page_3"
import Page_4 from "../Page_4/Page_4";
import Header from "../Header/Header";
//import pages






export default function App() {



    // const filmsFilms = [
    //     { posterURL: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    //     { image: bannerfuture, name: "2067", session: "Quinta-feira - 15:00", id: 20 },
    //     { image: bannerenola, name: "Enola Holmes", session: "Quinta-feira - 16:30", id: 13 },
    // ]




    // const { idfilm } = useParams();

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/filme/:idfilm" element={<Page_2 />} />

                    <Route path="/sessao/:idSession" element={<Page_3 />} />

                    <Route path="/sucesso/" element={<Page_4 />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}