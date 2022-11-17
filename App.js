import './App.css';
import { Route,Routes} from 'react-router-dom';
import Login from './login';
import Front from './front';
import Sign from './sign';
import Forgot from './forgot';
import Reset from './reset';
import Place from './places';
function App() {
  return (
    <Routes>
     <Route path ="/Login"element={<Login/>}></Route>
     <Route path ="/" element={<Front/>}></Route>
     <Route path='/Sign'element={<Sign/>}></Route>
     <Route path='/Login/Forgot'element={<Forgot/>}></Route>
     <Route path='/Login/Forgot/Reset'element={<Reset/>}></Route>
     <Route path='/Home/See-More'element={<Place/>}></Route>
    </Routes>
  );
}

export default App;