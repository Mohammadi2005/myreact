import style from './App.module.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./components/Pages/Profile";
import {About} from "./components/Pages/About";
import {Nav} from "./components/Pages/nav";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import {Error404} from "./components/Pages/Error404";


function App() {
    const [username, setUserName] = useState("ali");

    return (
        <div className={style.App}>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home username={username} />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/profile" element={<Profile
                        username={username} setUserName={setUserName} />}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Router>
        </div>
    );
}


export default App;
