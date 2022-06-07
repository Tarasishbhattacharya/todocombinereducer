// import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Addtodo } from './component/Addtodo';
import { Singletodo } from './component/Singletodo';
import { Todolist } from './component/Todolist';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Todolist/>} />
       <Route path="/todo/:id" element={<Singletodo/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
