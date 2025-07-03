import style from './App.module.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import Home from "./components/Pages/Home";
import {About} from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import {Error404} from "./components/Pages/Error404";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<Error404/>} />
                    {/*<Route path="*" element={<h1>Page Not Found 404</h1>} />*/}
                </Routes>
            </Router>
        </div>
    );
}


export default App;
