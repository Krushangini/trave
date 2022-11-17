import { Link } from "react-router-dom";
import './login.css';
import img from './assets/back.jpg';

const Login=()=>{
    return(
        <div>
            <h1>Find Your Adventure</h1>
            <img src={img} alt="login"></img>
            <form>
                <label for="fname" className="lab">User Name :</label>
                <input type="text" id="fname"  className="id"></input>
                <br></br>
                <label for="lname" className="lab">Password  :</label>
                <input type="password" id="lname" className="id"></input>
                <br></br>
                <Link to="/Login/Forgot" className="for">Forgot Password?</Link>
                <br></br>
                <button><Link to="/Home" className="sub">Submit</Link></button>
                <h4 className="l">Doesnot have an account? <Link to="/Sign" className="sign">Sign up</Link></h4>
            </form>
        </div>
    )
}
export default Login;