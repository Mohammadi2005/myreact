import {useParams} from "react-router-dom"

function Profile() {
    const {name} = useParams()
    return (
        <div>
            <h2>this is profile of {name}</h2>
        </div>
    )
}
export default Profile
