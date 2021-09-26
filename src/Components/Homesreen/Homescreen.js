import './Homescreen.css';
import { Link } from 'react-router-dom';

function Homescreen() {
  return (
    <div className="Home">
      <div className="Home-nav">
          <Link to="/"> <img src="Home.png" /></Link>
      </div>

      <div className="Home-title">
        <h2>Welcome to Social Curator!</h2>
        <p>Login to your social account</p>
      </div>

      <div className="Home-img-box">
        <img src="/socials/facebook.png"></img>
        <Link to="/login"><img src="/socials/instagram.png"></img></Link>
        <img src="/socials/pint.png"></img>
        <img src="/socials/twitter.png"></img>
      </div>

      <img src="illustration.png" className="graphic" />

      
      
    </div>
  );
}

export default Homescreen;
