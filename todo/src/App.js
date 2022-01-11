import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Todo from './Component/Todo';
import Setting from './Component/Setting';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Nav/>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/todo" element ={<Todo />}/>
          <Route path="/setting" element ={<Setting />}/>
          <Route path="/login" element ={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
