import './PostScreen.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


import Progress from '../Progress/Progress';




function Postscreen() {
    

  return (
   
    <div className="Home">
       <div className="Login-nav">
       <Link to="/content">   <img src="/left.png" className="left"/></Link> 
        <Progress done="90"/>
        <Link to="/"> <img src="Home.png" /></Link>
      </div>

      <div className="Content-title">
        <div>
            <img src="three.png"></img>
        </div>
        <div>
            <h2>Post on your social</h2>
        </div>
      </div>

      <div className="Content-container">
          <div className="big-social-box">
              <img src="/socials/twitter.png" className="big-social"/>
          </div>

          <div>

          <div  className="post-caption">
            <p>You will be directed to your Twitter to login and post content</p> 
          </div>

          <button className="save-button">Save & Post Content</button>
         
      </div>

      </div> 
      </div>   
    
  );
}

export default Postscreen;
