import { configure } from '@testing-library/react'
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success")
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success")
    }

    const handleClearClick =()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Empty" , "success")
    }

    const handleCopy =()=>{
       var text =document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0,9999);
       navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard" , "success")
    }

    const handleOnChange =(event)=>{
     setText(event.target.value)
    }

  
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor :props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'}} value={text}  id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
 <button className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>Copy Text</button>
 

    </div>


    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  Words And {text.length} Characters</p>
    <h4>Time To Read</h4>
    <p> {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read This.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Text in Above Box to Preview It"}</p>
    </div>
    </>
  )
}
