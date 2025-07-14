import style from './App.module.css';
import {Person} from "./propsType/Person";


function App() {

    return (
        <div className={style.myStyle} >
            <Person name={"ali"} email={"ali@gmail.com"} age={20} isMarried={true} courses={["C", "C++", "java", "css"]}/>
        </div>
    );
}

export default App;
