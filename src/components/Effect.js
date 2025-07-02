import {useEffect, useState} from "react";
import style from "../App.module.css";

export function Showinput() {
    const [text, setText] = useState('');

    // for mounting
    useEffect(() => {
        console.log('component did mount');

        // for unmounting
        return () => {
            console.log('component did unmount');
        }

    }, []);

    // for update
    useEffect(() => {
        console.log('component updated');
    },[text]);

    return (
        <div className={style.myStyle}>
            <input
                type="text"
                placeholder="Enter text"
                onChange={(e) => setText(e.target.value)}
            />
            <h3>{text}</h3>
        </div>
    );
}