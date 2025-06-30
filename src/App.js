import style from './App.module.css';
import {useState} from 'react'

function App() {
    const [age, setAge] = useState(0);
    const increaseAge = () => {
        setAge(age + 1);
    }
    const [input, setInput] = useState("hello");
    const changeInput = (event) => {
        setInput(event.target.value);
        console.log(event);
    }
    const [tag, setTag] = useState(false);
    const changeTag = () => {
        setTag(!tag);
    }
    const [color, setColor] = useState("red");
    const changeColor = () => {
        setColor(color == "green" ? "red" : "green");
    }
    const [count, setCount] = useState(0);

    return (

    <div className={style.myStyle}>    {/* add css to tag */}
        <h2>{age}</h2>
        <button onClick={increaseAge}>Increase age</button>
        {/*<button onClick={() => setAge(age + 1)}>Increase age</button>*/}
        <button onClick={() => setAge(age - 1)}>Decrease age</button>
        <br/>--------------------------<br/>
        <input type="text" onChange={changeInput} />
        <p>{input}</p>
        <br/>--------------------------<br/>
        <button onClick={changeTag}> change </button>
        <h2 hidden={tag}>Amir Hossein Mohammadi</h2>
        {!tag && <h2>Amir Hossein</h2>}
        <br/>--------------------------<br/>
        <button onClick={changeColor}> change color</button>
        <h2 style={{ color : color }}>Amir Hossein Mohammadi</h2>
        <br/>--------------------------<br/>
        <h2>{count}</h2>
        <button onClick={() => {setCount(count + 1)}}> increase</button>
        <button onClick={() => {setCount(count - 1)}}> decrease</button>
        <button onClick={() => {setCount(0)}}> set to 0</button>


    </div>
)
}

export default App;
