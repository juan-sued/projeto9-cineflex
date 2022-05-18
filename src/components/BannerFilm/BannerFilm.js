import { Link } from "react-router-dom";
//função que componetiza o banner
export default function BannerFilm(props) {
    return (
        <button className="bannerFilm">

            <Link to="/Page_2">
                <img src={props.banner} alt="" onClick={() => props.bannerSelected(props.element)} />
            </Link>

        </button >
    )
}
