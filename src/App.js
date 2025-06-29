import logo from './logo.svg';
import './App.css';

function App() {
    const name = "amir hossein";
    const age = <h2>20</h2>
    const email = <h2>amohammadi161183@gmail.com</h2>;

    // or
    const user = <div>
        <h1>amir hossein</h1>
        <h2>20</h2>
        <h2>amohammadi161183@gmail.com</h2>
    </div>

    // or component
    return (
    <div>
        <h1>Hello world {name}</h1>
        {age}
        {email}
        ---------------------------
        {/*  or  */}
        {user}
        ---------------------------
        {/*  or  */}
        <DataComponent />
        ---------------------------
        {/*  or  */}
        <Data name="amir" age={20} email="amir@gmail.com" user={user} />
        ---------------------------
        <Data name="fatemeh" age={10} email="---" user={user} />
        ---------------------------
        <Data name="ahmad" age={22} email="ahmad@gmail.com" user={user} />
        ---------------------------
        <Job salary={6000000} location="mashhad" company="part" />
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
