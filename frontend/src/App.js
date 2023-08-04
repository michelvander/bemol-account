import { Home } from './Pages/Home/index';
// import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import { Route, Routes, HashRouter } from "react-router-dom";
import React from 'react';

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route exact path="*" element={<Home />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
