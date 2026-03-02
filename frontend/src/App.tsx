// Screens
import { LandingPage } from "./components/screens/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
