import logo from './logo.svg';
import User from './components/User'
import Class from './components/Class'
import style from './App.module.css';


function App() {
    const age = 2;
    const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const users = [
        {name: 'ali', age: 4},
        {name: 'amir', age: 2},
        {name: 'hassan', age: 3},
        {name: 'reza', age: 2},
    ]
    const classes = [
        {name: "java", finished : false},
        {name: "python", finished : true},
        {name: "css", finished : true},
        {name: "html", finished : false},
        {name: "C++", finished : true},
        {name: "Django", finished : false}
    ]

    return (
    // CSS
    <div className={style.myStyle}>    {/* add css to tag */}
        <h1>CSS</h1>
        <DataComponent />
        ---------------------------
        {/*  or  */}
        <div style={{ color : "#099999", textAlign: "left" }}>
            <Data name="amir" age={20} email="amir@gmail.com"/>
        </div>
        ---------------------------
        <div style={{backgroundColor: age > 20 ? "#e0e1e2" : "#0e0e62"}}>
            <Data name="ahmad" age={22} email="ahmad@gmail.com"/>
        </div>
        ---------------------------
        <div className={age > 10 ? style.x : style.y}>
            <Job salary={6000000} location="mashhad" company="part" />
        </div>
        ---------------------------------------------------------------------------------
    {/*  LIST  */}
        <h1>LIST</h1>
        <div>
            {
                names.map((name, index) => {
                    return (<p key={index}>{name}</p>);
                })
            }
            ---------------------------
            {
                users.map((user, index) => {
                    return (<p key={index}>name: {user.name} - age: {user.age}</p>);
                })
            }
        </div>
        ---------------------------
        <User users={users} />
        ---------------------------
        <div style={{ textAline: "left" }}>
            <h2>exercise</h2>
            <Class classes={classes} />
        </div>
    </div>
)
}

// Component
const DataComponent = () => {
    return (
        <div>
            <h1>AmirHossein</h1>
            <h2>20</h2>
            <h2>amohammadi161183@gmail.com</h2>
        </div>
    )
}
// Component input
const Data = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h2>{props.email}</h2>
        </div>
    )
}

const Job = (props) => {
    return (
        <div>
            <h2>{props.salary}</h2>
            <h2>{props.location}</h2>
            <h2>{props.company}</h2>
        </div>
    )
}
export default App;
