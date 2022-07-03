import React from 'react';
import './App.css';
import Home from "./components/home";
import Admin from "./components/Admin/Admin";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    alanBtn({
        key: 'd58468224e69996e980b39e72a128c432e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'adminPanel') {
            // Call the client code that will react to the received command
            window.location.href = '/admin';
          }
          if (commandData.command === 'homePage') {
            // Call the client code that will react to the received command
            window.location.href = '/';
          }
        }
    });
  }, []);
  return (
    <>
    <div class="alan-btn"></div>

<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>

</BrowserRouter>
  
  </>
  );
}

export default App;
