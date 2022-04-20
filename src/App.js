import Home from "./components/home/home";
import './App.css'
import React from "react";
import Crafty from './components/crafty/crafty';
import Tmon from "./components/tmon/tmon";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    



<BrowserRouter>
<Routes>
  <Route  exact path="/" element={<Home/>}></Route>
  <Route path="/crafty" element={<Crafty/>}></Route>
  <Route path="/tmon" element={<Tmon/>}></Route>
</Routes>
</BrowserRouter>





    </div>
  );
}

export default App;
