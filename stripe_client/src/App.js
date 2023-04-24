import React from 'react';
import './App.css';
import Pay from './components/Pay';
import Sucess from './components/Sucess';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/pay" element={<Pay />}></Route>
                <Route path="/sucess" element={<Sucess />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
