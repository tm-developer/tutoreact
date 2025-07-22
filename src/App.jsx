import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import ListeDeFruits from "./pages/ListeDeFruits.jsx";
import Films from "./pages/Films.jsx";
import './App.css'


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/liste" element={<ListeDeFruits />}/>
                <Route path="/films" element={<Films />}/>
                <Route path="*" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default App;

