import style from './App.module.css';
import {Login} from "./Redux/Login";
import {Home} from "./Redux/Home";
import {Contact} from "./Redux/Contact";
import {store} from "./Redux/Store";
import {Provider} from "react-redux";
import {Link, Routes, Route, BrowserRouter as Router} from "react-router-dom";

function App() {


    return (
        <div className={style.App}>
            <Provider store={store}>
                <Router>
                    <Link to="/" style={{padding: "10px"}}>Home</Link>
                    <Link to="/login" style={{padding: "10px"}}>Login</Link>
                    <Link to="/contact" style={{padding: "10px"}}>Contact</Link>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </Router>
            </Provider>


        </div>
    );
} 

export default App;
