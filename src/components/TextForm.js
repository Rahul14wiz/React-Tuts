/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase","primary")
    }

    const handleClearClick = () => {
        // console.log("UpperCase was Clicked")
        let newText = ' ';
        setText(newText);
        props.showAlert("Coverted to UpperCase","danger")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("Rahul");
    return (
        <>
            <div className="conatiner" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#003366' : 'white',color: props.mode === 'dark' ? 'white' : 'black'   }} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary </h2>
                <p> {text.split(" ").length} words, {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes passed</p>
                <h2> Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </>
    )
}
