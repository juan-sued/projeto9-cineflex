
import "./InputsBuyer.css"
//import css



export default function InputsBuyer() {

    return (


        <div className="inputsBuyer">
            <div className="inputNameBuyer">
                <h4>Nome do comprador:</h4>
                <input placeholder="Digite seu nome..." ></input>
            </div>

            <div className="inputCpfBuyer">
                <h4>CPF do comprador:</h4>
                <input placeholder="Digite seu CPF..." ></input>
            </div>


        </div>
    )
}

