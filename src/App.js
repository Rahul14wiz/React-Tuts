import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#003366';
      showAlert("Dark Mode", "success");
      document.title ='TextUtils-DarkMode ';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Navbar title ="TextUtils" aboutText = "About Us" mode ={mode} toggleMode = {toggleMode} />
      <Alert alert ={alert}/>
      <div className="container my-3">
      {/* <TextForm showAlert ={showAlert} heading = "Enter the text" mode ={mode}/> */}

    <Routes>
         <Route exact path="/" element= {<TextForm showAlert ={showAlert} heading = "Enter the text" mode ={mode} />} />
         <Route exact path="/about" element={<About h1 = "About US"  />} /> 
    </Routes>
  
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
