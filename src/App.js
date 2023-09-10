
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import React from 'react';
import Home from './Components/Home';
import { useEffect, useState } from 'react';
function App() {
  const [footer, setfooter] = useState("footer")


  return (
    <>




<BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
