import style from "../../App.module.css";
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={style.AppHeader}>
            <Link to="/" style={{padding:'10px'}}>Home</Link>
            <Link to="/about" style={{padding:'10px'}}>About</Link>
            <Link to="/contact" style={{padding:'10px'}}>Contact</Link>
            <Link to="/profile" style={{padding:'10px'}}>Profile</Link>
        </nav>
    )
}