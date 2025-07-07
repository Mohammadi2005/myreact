import style from './App.module.css';
import {Link, Route, Routes, BrowserRouter as Router, createCookie} from "react-router-dom";
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import {createContext, useState} from "react";
import {Nav} from "./components/Pages/nav";
import {About} from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
export const ProfileContent = createContext();


function App() {
    const [username, setUsername] = useState('null');
    const client = new QueryClient({
        defaultOptions: {
            queries : {refetchOnWindowFocus: false}
        }
    });

    return (
        <div className={style.App}>
            <QueryClientProvider client={client}>
                <Router>
                    <ProfileContent value={{username, setUsername}}>
                        <Nav/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </ProfileContent>
                </Router>
            </QueryClientProvider>
        </div>
    );
}

export default App;