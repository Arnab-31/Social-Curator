import './LoginScreen.css';
import { Link } from 'react-router-dom';


function Loginscreen() {
  return (
    <div className="Home">
      <div className="Home-nav">
        <Link to="/"> <img src="Home.png" /></Link>
      </div>

      <div className="Home-title">
        <h2>Welcome to Social Curator!</h2>

        <div className="Login-img-box">
            <img src="/socials/instagram.png"></img>
        </div>
      
      </div>

      <div className="Login-form-box">
        <input placeholder="Email Address/Username" type="text"></input>
        <input placeholder="Password" type="password"></input>
        <button>Submit</button>
      </div>


      

      
    </div>
  );
}

export default Loginscreen;
