import React,{useState} from 'react'
import PropTypes from 'prop-types'
import LanguageDetect from 'languagedetect';

export default function TextForm(props) {
  // const arrayColumn = (arr, n) => arr.map(x => x[n]+'\n');
  const [text,setText] = useState("");
  let detect = new LanguageDetect();
  const [language,setDetectedLanguage] = useState("English");
  const handleUpClick = ()=>{
    // console.log('Upper case button clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase.","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
    // console.log('On change');
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to lowercase.","success");
    // console.log(text.split(" ") + text.split(" ").length);
  }
  const handleClearClick = ()=>{
    setText('');
    props.showAlert("Text has been cleared.","success");
  }
  const handleDetectLanguage = ()=>{
    // console.log(detect.detect(text)[0][0]);
    if(text.trim().length>0){
      setDetectedLanguage(detect.detect(text)[0][0]);
    }
    props.showAlert("Text language has been detected.","success");
  }
  const copyText = ()=>{
    const el = document.getElementById('mybox');
    el.select();
    navigator.clipboard.writeText(el.value);
    props.showAlert("Text has been copied to clipboard.","success");
  }
  const extractSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed.","success");
  }
  return (
    <>
      <div className='container'>
          <div className={`mb-3`} style={{color:props.mode === 'dark'?'white':'#042743'}}>
              <h2>{props.heading}</h2>
              {/* <label htmlFor="myox" className="form-label">Example textarea</label> */}
              <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
          </div>
          <button type="button" className={`btn btn-${props.darkTheme === 'Green'?'success':'primary'} mx-2`} onClick={handleUpClick}>UpperCase</button>
          <button type="button" className={`btn btn-${props.darkTheme === 'Green'?'success':'primary'} mx-2`} onClick={handleLoClick}>LowerCase</button>
          <button type="button" className={`btn btn-${props.darkTheme === 'Green'?'success':'primary'} mx-2`} onClick={handleDetectLanguage}>Detect Language</button>
          <button type="button" className={`btn btn-${props.darkTheme === 'Green'?'success':'primary'} mx-2`} onClick={copyText}>Copy Text</button>
          <button type="button" className={`btn btn-${props.darkTheme === 'Green'?'success':'primary'} mx-2`} onClick={extractSpaces}>Extract Spaces</button>
          <button type="button" className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
      </div>
      <div className={`container my-3`} style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>Language of the entered text is {language.toUpperCase()}.</p>
        <p>Your text has {(text.trim().split(/\s+/)).filter(text=>text.length>0).length} words and {text.trim().length} characters.</p>
        <p>Text can be read in {0.008*text.trim().split(/\s+/).length} minutes.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text.trim():"Enter some text in text area to preview."}</p>
      </div>
    </>
  )
}

TextForm.propTyps = {heading:PropTypes.string.isRequired}