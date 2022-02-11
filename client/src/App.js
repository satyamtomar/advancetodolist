
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';
import Userinfo from './components/Userinfo';
import Wrongroute from './components/Wrongroute';

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
                
              <Route exact path="/userinfo" key="userinfo"  element={<Userinfo showAlert={showAlert} />} />
       
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
                
              <Route  path="/*" element={<Wrongroute/>}/>

              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
              </Routes>
          </Router>
    </>
  );
}

export default App;
