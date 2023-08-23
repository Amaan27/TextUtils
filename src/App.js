
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [text, mytext] = useState('Enable Dark Mode')

  const [mode, MyMode] = useState('white');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const togglemode = () => {
    if (mode === 'black') {
      MyMode('white')
      mytext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been successfully enabled", 'Success')
      document.title ="TextUtils - LightMode";
    }
    else {
      MyMode('black')
      mytext('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been successfully enabled", 'Success')
      document.title = "TextUtils - DarkMode"
    }
  }


  return (
    <>

      {/* <Router> */}
      <Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} togglemode={togglemode} text={text}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      {/* <Routes>
          <Route path="/about" element={<About />}>
          </Route> */}
          {/* <Route path="/" element={}> */}
          <TextForm heading="Enter Text" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Routes>       */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
