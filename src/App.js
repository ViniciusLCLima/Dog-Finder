import './App.css';
import { Outlet} from 'react-router-dom';
import Nav from './Nav';



function App(props) {
  
  return <div>
    <header>
      <Nav dogs ={props.dogs} />
    </header>
    <main>
      <Outlet />
    </main>
  </div>;
}

export default App;
