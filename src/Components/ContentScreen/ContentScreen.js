import './ContentScreen.css';
import { Link } from 'react-router-dom';
import { FileDrop } from 'react-file-drop'
import { useEffect, useRef, useState } from 'react';
import Progress from '../Progress/Progress';


function Contentscreen(props) {

  const [file,setFile] = useState();
  const [tags,setTags] = useState(['#foodoftheday','#gourmetsweets','#lemonycupcakes'])
  const [tagsHits,setTagsHits] = useState(['90K','32K','40K'])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('file');
    console.log(myParam)
    setFile(myParam)
  }
  )

  const deleteTag = (tagName)=>{
    var newtags = [...tags];
    const index = newtags.indexOf(tagName);
    tags.splice(index, 1);
    if (index !== -1) {
      newtags.splice(index, 1);
      setTags(newtags);
    }

  }

  return (
    <div className="Home">
       <div className="Login-nav">
       <Link to="/upload">   <img src="/left.png" className="left"/></Link> 
        <Progress done="70"/>
        <Link to="/"> <img src="Home.png" /></Link>
      </div>

      <div className="Content-title">
        <div>
            <img src="two.png"></img>
        </div>
        <div>
            <h2>Generate Content</h2>
        </div>

      </div>


      <div className="Content-container">
        <h3>Attached Photo</h3>
        <div><img src={file} alt=''className="preview" /></div>
      </div>


      <div className="Content-container">
        <h3>Select platform</h3>
        <div className="social-icons">
          <img src="/socials/instagram.png" className="social" />
          <img src="/socials/facebook.png" className="social" />
          <img src="/socials/twitter.png" className="social" />
          <img src="/socials/pint.png" className="social" />
        </div>
      </div>


      <div className="Content-container">
        <h3>Scoring Title</h3>
        <div className="title-box">
          <div className="title">
             <h3>easy peasy lemon squeezy  </h3>
          </div> 
          <div className="title-info">
            <p>Title scored as highly compelling!
            Adding humor and rhymes often peaks people’s interest.</p>
          </div>
        </div> 
      </div>


      <div className="Content-container">
        <h3>Generated Caption</h3>
        <div className="title-box">
          <div className="title">
             <h3>Is it just me or does this recipe look more scrumptious because I’m on a diet? Well, at least I can tell you that it’s not as “sugary” 
as it seems👀  </h3>
          </div> 
        </div> 
      </div>


      <div className="Content-container">
        <h3>Recommended Hashtags</h3>
        <div className="tags-container">
          {tags.map((i) => (
              <div className="tag">
                <p>{i}</p>
                <img src="/cross.png" className="cross-icon" onClick={()=>deleteTag(i)}/>
              </div>
          ))}
        </div>

        <div className="tags-checkbox-container">
           {tags.map((i) => (
                <div className="tags-checkbox">
                 <input type="checkbox" className="checkbox"/>
                 <div className="tag-box">
                   <label>{i}</label>
                   <div className="tag-hits">
                     <p>{tagsHits[tags.indexOf(i)]}</p>
                   </div>
                 </div>
               </div>
           ))}        
        </div>
      </div>


      <div className="Content-container">

        <Link to="/post"><button className="save-button">Save & Post Content</button></Link>
      </div>
       

    </div>    
    
);
}


export default Contentscreen;
