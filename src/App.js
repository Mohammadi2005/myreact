import style from './App.module.css';
import {useReducer} from "react";
import {initialState, formReducer} from "./useReducerHook/formReducer";



function App() {

    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleInput = (e) => {
        dispatch({type: "change_input", data: {name: e.target.name, value: e.target.value}})
    }

    return (
        <div className={style.App}>
            <input type="text" placeholder="title" name="title" onChange={handleInput} /><br/>
            <input type="text" placeholder="description" name="description" onChange={handleInput} /><br/>
            <input type="number" placeholder="price" name="price" onChange={handleInput} /><br/>
            {state.title && <p>{state.title}</p>}
            {state.description && <p>{state.description}</p>}
            {state.price && <p>{state.price}</p>}<br/>
            <button onClick={() => dispatch({type: "increase"})}>+</button>
            <h1>{state.quantity}</h1>
            <button onClick={() => dispatch({type: "decrease"})}>-</button>
        </div>
    );
}

export default App;
