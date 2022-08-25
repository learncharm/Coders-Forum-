import React from 'react';
import './App.css';
import Home from "./components/home";
import NavBar from './components/NavBar/NavBar';
import Admin from "./components/Admin/Admin";
import AdminThread from "./components/Admin/Thread/Thread";
import AdminComment from "./components/Admin/Comment/Comment";
import Thread from "./components/Thread/Thread";
import Pthread from "./components/Pthread/Pthread";
import Category from "./components/Admin/Category/Category";
import CategoryState from './components/Admin/Context/Category/CategoryState';
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
      <CategoryState>
        <div class="alan-btn"></div>

        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/admin/category' element={<Category />}></Route>
            <Route path='/admin/thread' element={<AdminThread />}></Route>
            <Route path='/admin/comment' element={<AdminComment />}></Route>
          </Routes>
          
          <Routes>
          
            <Route path='/' element={<Home />}></Route>

            <Route path='/threads/:category' element={<Thread />}></Route>
            <Route path='/thread/:threadid' element={<Pthread />}></Route>

          </Routes>

        </BrowserRouter>

      </CategoryState>

    </>
  );
}

export default App;
