import style from './App.module.css';
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
    const [cat, setCat] = useState("");

    useEffect(() => {
        fetchCat()
    }, [])

    function fetchCat() {
        axios.get("https://catfact.ninja/fact")
            .then(res => {
                setCat(res.data.fact);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // -----------------------------------------------------

    const [name, setName] = useState("");
    const [data, setData] = useState({});

    function fetchData(name) {
        axios.get(`https://api.agify.io/?name=${name}`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // -----------------------------------------------------

    const [exc, setExc] = useState({});
    function fetchExcuse(place){
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${place}`)
            .then(res => {
                console.log(res.data);
                setExc(res.data[0]);
            })
            .catch(err => {
                console.log("Error fetching excuse");
            })
    }
    return (
        <div className={style.myStyle}>
            <div>
                <button onClick={fetchCat}>Fetch data</button>
                <p>{cat}</p>
            </div>

            <br/>
            <h1>-------------------------------</h1>
            <br/>

            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <button onClick={() => fetchData(name)}>Fetch data</button>

                {data.name && data.age && <Data  data={data} />}
            </div>

            <br/>
            <h1>-------------------------------</h1>
            <br/>

            <div>
                <button onClick={() => fetchExcuse("party")}>Party</button>
                <button onClick={() => fetchExcuse("family")}>family</button>
                <button onClick={() => fetchExcuse("office")}>office</button>
                {exc.excuse && <Excuse exc={exc}/>}

            </div>
        </div>
    );
}
function Data(props) {
    return (
        <div>
            <h3>age is : {props.data.age}</h3>
            <h3>name is : {props.data.name}</h3>
        </div>
    )
}

function Excuse(props) {
    return (
        <div>
            <h3>my Excuse : {props.exc.excuse}</h3>
        </div>
    )
}

export default App;
