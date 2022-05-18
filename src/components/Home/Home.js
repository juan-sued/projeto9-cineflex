import "./Home.css"
import "../BannerFilm/BannerFilm.css"
//import css

import Header from "../Header/Header"
import BannerFilm from "../BannerFilm/BannerFilm"
//import components

//
//


//função que rederiza Home (page_1)
export default function Home(props) {



    // function bannerClick(element, index) {
    //     bannerCliked = bannerFilms[index]
    // }





    return (
        <>
            <Header />
            <main>
                <h1>Selecione o filme</h1>

                <div className="bannersFilms">
                    {props.bannersFilms.map((element, index) => <BannerFilm key={index} banner={element.image} bannerSelected={() => props.bannerSelected(element)} element={element} />)}
                </div>

            </main>

        </>
    )
}