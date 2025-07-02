import style from '../App.module.css';
import {useState} from "react";

export function ShowCourse(props) {

    return (
        <div>
            {props.courses.map((course) => {
                return (
                    <div key={`div-${course.id}`} className={course.completed ? style.yesCompleted : style.noCompleted }>
                        <h2 key={`h2-${course.id}`}>{course.name} - {course.id}</h2>
                        <button key={`btn-${course.id}`} onClick={() => props.removeCourse(course.id)}>Remove Course</button>
                        <button key={`btn-color-${course.id}`} onClick={() => {props.completeCourse(course.id)}}>Completed</button>
                    </div>
                )
            })}
        </div>
    )
}