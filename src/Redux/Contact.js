import {useSelector} from "react-redux";

export const Contact = () => {
    const selectUsername = useSelector(state => state.user);
    return (
        <div>
            <h2>Contact {selectUsername.username}</h2>
        </div>
    )
}