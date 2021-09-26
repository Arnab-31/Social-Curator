import './Uploadscreen.css';
import { Link } from 'react-router-dom';
import { FileDrop } from 'react-file-drop'
import { useRef, useState } from 'react';
import Progress from '../Progress/Progress';






function Uploadscreen() {
    const fileInputRef = useRef(null);
    const [file,setFile]  = useState(null);
    const [upload,setUpload]  = useState(false);
 
    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    const onFileInputChange = (event) => {

        const { files } = event.target;
        setFile(URL.createObjectURL(files[0]));
        setUpload(true);
        console.log(files);
        // do something with your files...
    }

   

  return (
   
    <div className="Home">
       <div className="Login-nav">
         <Link to="/login">   <img src="/left.png" className="left"/></Link> 
        <Progress done="30"/>
        <Link to="/"> <img src="Home.png" /></Link>
      </div>

      <div className="Upload-title">
        <div>
            <img src="one.png"></img>
        </div>
        <div>
            <h2>Upload Image</h2>
        </div>

    </div>

        <div className="Upload-box">
            
            
            <div className="Upload-file-input">
                <FileDrop
                    onTargetClick={onTargetClick}
                >
                    <div className="border-box">
                        {file ? <img src={file} alt=''className="preview" /> :  <h2>Upload your image to generate your social content!</h2>}
                    </div>
                
                </FileDrop>
             
                <div className="Upload-input-box">
                    {!upload ?  
                    <div className="Upload-input-box">
                        <label for="imageUpload" className="upload-label">Attach</label>
                        <input
                            onChange={onFileInputChange}
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            id="imageUpload"
                        />
                    </div>
                    :
                    <Link to={`/content?file=${file}`} className="upload-label2"> <label for="imageUpload" className="upload-text">Upload</label></Link>
                    }
                </div>
            </div>
         

        </div>

      </div>    
    
  );
}

export default Uploadscreen;
