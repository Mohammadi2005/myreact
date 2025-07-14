import {useState} from "react";
import {login, logout} from "./Store";
import {useDispatch, useSelector} from "react-redux";

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const selectUsername = useSelector(state => state.user);

    return (
        <div>
            <h2>Login {selectUsername.username}</h2>
            <input onChange={(e) => setNewUsername(e.target.value)}/><br/>
            <button onClick={() => dispatch(login({username:newUsername}))}>Log in</button>
            <button onClick={() => dispatch(logout())}>log out</button>
        </div>
    )
}