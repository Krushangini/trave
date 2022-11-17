import { Link } from "react-router-dom";
import img from './assets/sig.jpg';
import './sign.css';

const Sign=()=>{
    return(
        <div>
            <h1>Start your Adventure with us</h1>
            <img src={img} alt="background"></img>
            <form>
                <label for="fname" className="lab">User Name :</label>
                <input type="text" id="fname"  className="bc"></input>
                <br></br>
                <label for="lname" className="lab">Mail Id  :</label>
                <input type="text" id="lname"  className="bc"></input>
                <br></br>
                <label for="lname" className="lab">Password  :</label>
                <input type="text" id="lname"  className="bc"></input>
                <br></br>
                <button className="bt"><Link to="/Home" className="sub">Submit</Link></button>
                <h4>Already have an account? <Link to="/Login" className="sign">Login</Link></h4>
            </form>
        </div>
    )
}

export default Sign;