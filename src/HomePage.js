import { useNavigate } from "react-router-dom"

function HomePage (props){
    const navigate = useNavigate()
    const handleClick = dogName =>{
        navigate(dogName)
    }
    return <div><h1>Click a dog!</h1>
    {props.dogs.map(dog => <button type="button" onClick={()=>handleClick(dog.name)}><img src={dog.src} alt={`The dog called ${dog.name}`}/><h2>{dog.name}</h2></button>)}
    </div>
}

export default HomePage