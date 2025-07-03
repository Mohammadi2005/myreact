import style from './App.module.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import Home from "./components/Pages/Home";
import {About} from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Profile from "./components/Pages/Profile";
import {Error404} from "./components/Pages/Error404";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Nav} from "./components/Pages/nav";

function App() {

    return (
        <div className={style.App}>
            <Router>
                {/*<nav className={style.AppHeader}>*/}
                {/*    <Link to="/" style={{padding:'10px'}}>Home</Link>*/}
                {/*    <Link to="/about" style={{padding:'10px'}}>About</Link>*/}
                {/*    <Link to="/contact" style={{padding:'10px'}}>Contact</Link>*/}
                {/*</nav>*/}
                <Nav/>
                <Routes style={{width:'800px', height:'800px'}}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/profile/:name" element={<Profile/>} />
                    <Route path="*" element={<Error404/>} />
                    {/*<Route path="*" element={<h1>Page Not Found 404</h1>} />*/}
                </Routes>
                <footer>
                    <h3 style={{backgroundColor:"#344444" , color:"#FB9929"}}>this is footer</h3>
                </footer>
            </Router>
        </div>
    );
}


export default App;
