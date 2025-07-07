import {useParams} from "react-router-dom"
import {useState, useContext} from "react";
import {ProfileContent} from "../../App";

function Profile() {
    const {username} = useContext(ProfileContent)
    return (
        <div>
            <h1>this is profile of - {username}</h1>
            <ChangeProfile/>
        </div>
    )
}
export default Profile

const ChangeProfile = () => {
    const [newName, setNewName] = useState('')
    const {setUsername} = useContext(ProfileContent)
    return (
        <div>
            <input onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => setUsername(newName)}>Change Profile</button>
        </div>
    )
}