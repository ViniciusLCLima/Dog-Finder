import { Link } from "react-router-dom"


const NotFoundPage = () =>{
    return <div>
        <h1>Not found</h1>
        <p>You've gone the wrong way. The URL inserted doesn't match any address in DogFinder.com, please get to our Home page clicking <Link to="">here</Link></p>
    </div>
}

export default NotFoundPage