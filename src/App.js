import style from './App.module.css';
import {useReducer} from "react";
import {initialState, handleState} from "./useReducerHook/useReducer";
import axios from "axios";

function App() {

    const [state, dispatch] = useReducer(handleState, initialState)

    const handleStateChange = () => {
        dispatch({type: "fetch_start"})
        axios.get("https://catfact.ninja/fact")
            .then(res => {
                dispatch({type: "fetch_success", fact: res.data.fact})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: "fetch_error"})
            })
    }

    return (
        <div className={style.App}>
            <button onClick={handleStateChange}>
                {state.loading ? "Loading..." : "fetch cat fact"}
            </button>
            {state.fact && <h2>{state.fact}</h2>}
            {state.error && <h2>Error. some thing is wrong</h2>}
        </div>
    );
}

export default App;
