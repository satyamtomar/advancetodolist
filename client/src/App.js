import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
     <Router>
          <Header />
          <Alert alert={alert} />
          <Routes>
              <Route exact path="/about" key="about"  element={<About showAlert={showAlert} />} />
       
              <Route exact path="/" key="home" element={<Home showAlert={showAlert} />} />
                
             
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
                
              

              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
              </Routes>
          </Router>
    </>
  );
}

export default App;
