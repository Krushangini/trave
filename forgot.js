import { Link } from "react-router-dom";
import './forgot.css';
import img from './assets/for.png';

const Forgot=()=>{
    return(
        <div>
            <h1>Find Your Adventure</h1>
            <img src={img} alt="background"></img>
            <form>
                <label for="fname" className="lab">Mail Id :</label>
                <input type="text" id="fname" ></input>
                <button className="but"><Link to="/Login/Forgot/Reset" className="sub">Submit</Link></button>
            </form>
        </div>
    )
}
export default Forgot;