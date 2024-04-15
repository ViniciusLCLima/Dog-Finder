import { useNavigate } from "react-router-dom"


const Dog = (props)=>{
    const navigate = useNavigate()
    return <div>
        <img src={props.src} alt={`The dog ${props.name}`} />
        <h1>{props.name}</h1>
        <p>{props.age} years old</p>
        <ul>
            {props.facts.map(fact => <li>{fact}</li>)}
        </ul>
        <button type="Button"onClick={() => navigate("/dogs")}>Back</button>
    </div>
}

export default Dog