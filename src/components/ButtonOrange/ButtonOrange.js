

import { Link } from "react-router-dom"
import "./ButtonOrange.css"
//import css



export default function ButtonOrange({ label, route }) {
    return (

        <Link to={route} >
            <button className="buttonOrange">
                {label}
            </button>
        </Link>


    )
}
