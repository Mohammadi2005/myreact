import style from './App.module.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./components/Pages/Profile";
import {About} from "./components/Pages/About";
import {Nav} from "./components/Pages/nav";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import {Error404} from "./components/Pages/Error404";
import {createContext} from "react"

export const ProfileContent = createContext();


function App() {
    const [username, setUserName] = useState("ali");

    return (
        <div className={style.App}>
            <ProfileContent value={{username, setUserName}}>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Router>
            </ProfileContent>
        </div>
    );
}


export default App;
