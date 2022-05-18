import { Link } from "react-router-dom";
import "./Sessions.css"

function Session({ timeSession }) {
    return (
        <div className="session">
            <h3>
                {timeSession} - 21/10/2022
            </h3>
            <span className="timeSessions">
                <Link to="/">
                    <button>15:00</button>
                </Link>
                <Link to="/sessao/:idSession">
                    <button>19:00</button>
                </Link>

            </span>
        </div>
    )
}

export default function Sessions({ timeSession }) {
    return (
        <div className="sessions">

            <Session timeSession={timeSession} />
            <Session timeSession={timeSession} />
            <Session timeSession={timeSession} />
            <Session timeSession={timeSession} />
        </div>


    )
}
