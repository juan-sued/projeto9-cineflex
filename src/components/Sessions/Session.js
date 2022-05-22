import { Link } from "react-router-dom";
import "./Sessions.css"

//function que renderiza as sessions
export default function Sessions({ days }) {
    return (
        <div className="sessions">

            {days.map((e) => <Session daySession={e.date} weekday={e.weekday} key={e.id} id={e.id} showtimes={e.showtimes} />)}

        </div>

    )
}

//function que componentiza session
function Session({ daySession, weekday, showtimes }) {
    return (
        <div className="session">
            <h3>
                {weekday} - {daySession}
            </h3>
            <span className="timeSessions">
                <Link to={`/sessao/${showtimes[0].id}`}>
                    <button>{showtimes[0].name}</button>
                </Link>
                <Link to={`/sessao/${showtimes[1].id}`}>
                    <button>{showtimes[1].name}</button>
                </Link>

            </span>
        </div>
    )
}
