import React, { useState } from 'react'

export default function TextForm(props) {
    function handleUpCase(){
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to UpperCase", 'Success')
    }

    const handleLoCase = () =>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showAlert("Changed to LowerCase", 'Success')
    }

    const handlecleartext = ()=>{
        setText('');
        props.showAlert("Text cleared", "Success")
    }

    const handleclearSpace = () =>{
        let newText3 = text.split(/[ ]+/);
        setText(newText3.join(" "));
        props.showAlert("Cleared Extra Spaces", "Success")
    }
    
    const Onchange = (event) =>{
        console.log("Text changed");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    //text = "Change Text" - Wrong way to change state
    // setText('Change text');
    return (
        //style={{color: props.mode==='black'?'white':'#042743'}}
        <>
        <div className="container" style={{color: props.mode==='black'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  onChange={Onchange} style={{backgroundColor: props.mode==='white'?'white':'grey', color: props.mode==='white'?'#042743':'white'}} value={text} id="myBox" rows="5"></textarea>
            </div>

            <button type="button" onClick={handleUpCase} className="btn btn-primary mx-2">Convert to UpperCase</button>
            <button type="button" onClick={handleLoCase} className="btn btn-primary mx-2">Convert to LowerCase</button>
            <button type="button" onClick={handlecleartext} className="btn btn-primary mx-2">Clear Text</button>
            <button type="button" onClick={handleclearSpace} className="btn btn-primary mx-2">Clear Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='black'?'white': 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
