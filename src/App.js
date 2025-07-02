import style from './App.module.css';
import {useState} from 'react'
import {ShowCourse} from './components/Course';
// import * as events from "node:events";
var id = 0

function App() {
    const [courses, setCourses] = useState([])
    const [newCourse, setNewCourse] = useState({})

    const addCourse = () => {
        setCourses([...courses , {name: newCourse, id: id++, completed: false}])
    }
    const removeCourse = (curId) => {
        setCourses(courses.filter(course => course.id !== curId))
    }
    const completeCourse = (curId) => {
        const newCourses = courses.map((course) => {
            if(curId === course.id) {
                return {...course, completed: true}
            }
            return course
        })
        setCourses(newCourses)
    }
    const setNC = (event) => {
        setNewCourse(event.target.value)
    }

    return (
    <div className={style.myStyle}>
        <div>
            <input type="text" onChange={(e) => setNC(e)}/>
            <button type="submit" onClick={addCourse}>Add Cours</button>
        </div>
        {/*<div>*/}
        {/*    {courses.map((course) => {*/}
        {/*        return (*/}
        {/*            <div key={`div-${course.id}`}>*/}
        {/*                <h2 key={`h2-${course.id}`}>{course.name} - {course.id}</h2>*/}
        {/*                <button key={`btn-${course.id}`} onClick={() => removeCourse(course.id)}>Remove Course</button>*/}
        {/*            </div>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</div>*/}
        <ShowCourse courses={courses} removeCourse={removeCourse} completeCourse={completeCourse}/>
    </div>
)
}


export default App;
