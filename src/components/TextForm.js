import React, { useState } from 'react'



export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("uppercase " + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log("uppercase " + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleRevClick=()=>{
        
        let newText="";
        for(let i=text.length-1;i>=0;i--){
            newText+=text[i];
        }
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("change ");
        setText(event.target.value);
    }
    const [text,setText]= useState('');
    
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse the text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
  )
}
