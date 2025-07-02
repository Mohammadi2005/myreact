import style from './App.module.css';
import { useEffect, useState } from 'react';
import {Showinput} from "./components/Effect";

function App() {
    const [showInput, setShowInput] = useState(false);

    return (
        <div className={style.myStyle}>
            <button type="button" onClick={() => setShowInput(!showInput)}>
                {showInput ? 'Hide Text Input' : 'Show Text Input'}
            </button>

            {showInput && <Showinput />}
        </div>
    );
}
export default App;
