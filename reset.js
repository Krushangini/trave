import { Link } from "react-router-dom";
import './reset.css';
import img from './assets/back.jpg';

const Login=()=>{
    return(
        <div>
            <h1>Reset your Password</h1>
            <img src={img} alt="background"></img>
            <p className="des">your password reset link has been to<br></br> your mail.<br></br>
                kindly check your mail.move back to
                <br></br>
                <button className="bu"><Link to="/Login" className="sub">Login</Link></button>
                 </p>
                
               
        </div>
    )
}
export default Login;