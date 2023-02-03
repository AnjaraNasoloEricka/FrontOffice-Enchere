import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import "./assets/css/style.css"

import { useEffect } from 'react';
import Accueil from './pages/Accueil';
import ListEnchere from './pages/ListEnchere';
import DetailEnchere from './pages/DetailEnchere';
import CardDetailEnchere from './components/CardDetailEnchere';
import HistoriqueEnchere from './pages/HistoriqueEnchere';
import LoginClient from './pages/LoginClient';
import Rencherir from './pages/Rencherir';

function App() {
  return (

        <Routes>  
          <Route exact path="/" element={<Accueil/>} ></Route>
          <Route exact path="/list" element={<ListEnchere/>} ></Route>
          <Route exact path="/detail" element={<DetailEnchere/>} ></Route>
          <Route exact path="/loginClient" element={<LoginClient/>} ></Route>
          <Route exact path="/Rencherir" element={<Rencherir/>} ></Route>
          <Route exact path="/historique" element={<HistoriqueEnchere/>} ></Route>
        </Routes>

  );
}

export default App;
