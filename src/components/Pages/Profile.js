import {useParams} from "react-router-dom"
import {useState} from "react";

function Profile(props) {
    const {name} = useParams()
    return (
        <div>
            <h1>this is profile of - {props.username}</h1>
            <ChangeProfile setUserName={props.setUserName}/>
        </div>
    )
}
export default Profile

const ChangeProfile = (props) => {
    const [newName, setNewName] = useState('')
    return (
        <div>
            <input onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => props.setUserName(newName)}>Change Profile</button>
        </div>
    )
}