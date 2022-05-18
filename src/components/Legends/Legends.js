
import "./Legends.css"





export default function Legends() {
    return (

        <span className="legends">
            <div className="legend">
                <div className="selectedColor"></div>
                <p>Selecionado</p>
            </div>
            <div className="legend">
                <div className="availableColor"></div>
                <p>Selecionado</p>
            </div>
            <div className="legend">
                <div className="unavailableColor"></div>
                <p>Indisponível</p>
            </div>
        </span>
    )
}